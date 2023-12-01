# Code generated by smithy-python-codegen DO NOT EDIT.

from typing import Any, Dict, Generic, Literal, Optional, TypeVar

from .models import (
    ValidationExceptionField,
    _validation_exception_field_list_as_dict,
    _validation_exception_field_list_from_dict,
)


class ServiceError(Exception):
    """Base error for all errors in the service.
    """
    pass

T = TypeVar('T')
class ApiError(ServiceError, Generic[T]):
    """Base error for all api errors in the service.
    """
    code: T
    def __init__(self, message: str):
        super().__init__(message)
        self.message = message

class UnknownApiError(ApiError[Literal['Unknown']]):
    """Error representing any unknown api errors
    """
    code: Literal['Unknown'] = 'Unknown'

class ValidationException(ApiError[Literal["ValidationException"]]):
    code: Literal["ValidationException"] = "ValidationException"
    message: str
    field_list: Optional[list[ValidationExceptionField]]
    def __init__(
        self,
        *,
        message: str,
        field_list: Optional[list[ValidationExceptionField]] = None,
    ):
        """A standard error for input validation failures.
        This should be thrown by
        services when a member of the input structure
        falls outside of the modeled or
        documented constraints.
        :param message: A message associated with the specific error.

        :param field_list: A list of specific failures encountered while validating the
        input.
        A member can appear in this list more than once if it failed to satisfy
        multiple constraints.
        """
        super().__init__(message)
        self.field_list = field_list

    def as_dict(self) -> Dict[str, Any]:
        """Converts the ValidationException to a dictionary.

        The dictionary uses the modeled shape names rather than the parameter names as
        keys to be mostly compatible with boto3.
        """
        d: Dict[str, Any] = {
            'message': self.message,
            'code': self.code,
        }

        if self.field_list is not None:
            d["fieldList"] = _validation_exception_field_list_as_dict(self.field_list),

        return d

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "ValidationException":
        """Creates a ValidationException from a dictionary.

        The dictionary is expected to use the modeled shape names rather than the
        parameter names as keys to be mostly compatible with boto3.
        """
        kwargs: Dict[str, Any] = {
            'message': d['message'],
        }

        if "fieldList" in d:
            kwargs["field_list"] = _validation_exception_field_list_from_dict(d["fieldList"]),

        return ValidationException(**kwargs)

    def __repr__(self) -> str:
        result = "ValidationException("
        result += f'message={self.message},'
        if self.message is not None:
            result += f"message={repr(self.message)}, "

        if self.field_list is not None:
            result += f"field_list={repr(self.field_list)}"

        return result + ")"

    def __eq__(self, other: Any) -> bool:
        if not isinstance(other, ValidationException):
            return False
        attributes: list[str] = ['message','message','field_list',]
        return all(
            getattr(self, a) == getattr(other, a)
            for a in attributes
        )
