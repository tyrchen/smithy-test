# Code generated by smithy-python-codegen DO NOT EDIT.

from typing import Any, Dict, List, Optional


class EchoMessageInput:
    message: Optional[str]

    def __init__(
        self,
        *,
        message: Optional[str] = None,
    ):
        self.message = message

    def as_dict(self) -> Dict[str, Any]:
        """Converts the EchoMessageInput to a dictionary.

        The dictionary uses the modeled shape names rather than the parameter names as
        keys to be mostly compatible with boto3.
        """
        d: Dict[str, Any] = {}

        if self.message is not None:
            d["message"] = self.message

        return d

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "EchoMessageInput":
        """Creates a EchoMessageInput from a dictionary.

        The dictionary is expected to use the modeled shape names rather than the
        parameter names as keys to be mostly compatible with boto3.
        """
        kwargs: Dict[str, Any] = {}

        if "message" in d:
            kwargs["message"] = d["message"]

        return EchoMessageInput(**kwargs)

    def __repr__(self) -> str:
        result = "EchoMessageInput("
        if self.message is not None:
            result += f"message={repr(self.message)}"

        return result + ")"

    def __eq__(self, other: Any) -> bool:
        if not isinstance(other, EchoMessageInput):
            return False
        attributes: list[str] = [
            "message",
        ]
        return all(getattr(self, a) == getattr(other, a) for a in attributes)


class EchoMessageOutput:
    message: str

    def __init__(
        self,
        *,
        message: str,
    ):
        self.message = message

    def as_dict(self) -> Dict[str, Any]:
        """Converts the EchoMessageOutput to a dictionary.

        The dictionary uses the modeled shape names rather than the parameter names as
        keys to be mostly compatible with boto3.
        """
        return {
            "message": self.message,
        }

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "EchoMessageOutput":
        """Creates a EchoMessageOutput from a dictionary.

        The dictionary is expected to use the modeled shape names rather than the
        parameter names as keys to be mostly compatible with boto3.
        """
        kwargs: Dict[str, Any] = {
            "message": d["message"],
        }

        return EchoMessageOutput(**kwargs)

    def __repr__(self) -> str:
        result = "EchoMessageOutput("
        if self.message is not None:
            result += f"message={repr(self.message)}"

        return result + ")"

    def __eq__(self, other: Any) -> bool:
        if not isinstance(other, EchoMessageOutput):
            return False
        attributes: list[str] = [
            "message",
        ]
        return all(getattr(self, a) == getattr(other, a) for a in attributes)


class ValidationExceptionField:
    path: str
    message: str

    def __init__(
        self,
        *,
        path: str,
        message: str,
    ):
        """Describes one specific validation failure for an input member.

        :param path: A JSONPointer expression to the structure member whose value failed
        to satisfy the modeled constraints.
        :param message: A detailed description of the validation failure.
        """
        self.path = path
        self.message = message

    def as_dict(self) -> Dict[str, Any]:
        """Converts the ValidationExceptionField to a dictionary.

        The dictionary uses the modeled shape names rather than the parameter names as
        keys to be mostly compatible with boto3.
        """
        return {
            "path": self.path,
            "message": self.message,
        }

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "ValidationExceptionField":
        """Creates a ValidationExceptionField from a dictionary.

        The dictionary is expected to use the modeled shape names rather than the
        parameter names as keys to be mostly compatible with boto3.
        """
        kwargs: Dict[str, Any] = {
            "path": d["path"],
            "message": d["message"],
        }

        return ValidationExceptionField(**kwargs)

    def __repr__(self) -> str:
        result = "ValidationExceptionField("
        if self.path is not None:
            result += f"path={repr(self.path)}, "

        if self.message is not None:
            result += f"message={repr(self.message)}"

        return result + ")"

    def __eq__(self, other: Any) -> bool:
        if not isinstance(other, ValidationExceptionField):
            return False
        attributes: list[str] = [
            "path",
            "message",
        ]
        return all(getattr(self, a) == getattr(other, a) for a in attributes)


class SigninForm:
    username: str
    password: str

    def __init__(
        self,
        *,
        username: str,
        password: str,
    ):
        """Contains username and password. Currently any username and password is accepted."""
        self.username = username
        self.password = password

    def as_dict(self) -> Dict[str, Any]:
        """Converts the SigninForm to a dictionary.

        The dictionary uses the modeled shape names rather than the parameter names as
        keys to be mostly compatible with boto3.
        """
        return {
            "username": self.username,
            "password": self.password,
        }

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "SigninForm":
        """Creates a SigninForm from a dictionary.

        The dictionary is expected to use the modeled shape names rather than the
        parameter names as keys to be mostly compatible with boto3.
        """
        kwargs: Dict[str, Any] = {
            "username": d["username"],
            "password": d["password"],
        }

        return SigninForm(**kwargs)

    def __repr__(self) -> str:
        result = "SigninForm("
        if self.username is not None:
            result += f"username={repr(self.username)}, "

        if self.password is not None:
            result += f"password={repr(self.password)}"

        return result + ")"

    def __eq__(self, other: Any) -> bool:
        if not isinstance(other, SigninForm):
            return False
        attributes: list[str] = [
            "username",
            "password",
        ]
        return all(getattr(self, a) == getattr(other, a) for a in attributes)


class SigninInput:
    payload: Optional[SigninForm]

    def __init__(
        self,
        *,
        payload: Optional[SigninForm] = None,
    ):
        """
        :param payload: Contains username and password. Currently any username and
        password is accepted.
        """
        self.payload = payload

    def as_dict(self) -> Dict[str, Any]:
        """Converts the SigninInput to a dictionary.

        The dictionary uses the modeled shape names rather than the parameter names as
        keys to be mostly compatible with boto3.
        """
        d: Dict[str, Any] = {}

        if self.payload is not None:
            d["payload"] = self.payload.as_dict()

        return d

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "SigninInput":
        """Creates a SigninInput from a dictionary.

        The dictionary is expected to use the modeled shape names rather than the
        parameter names as keys to be mostly compatible with boto3.
        """
        kwargs: Dict[str, Any] = {}

        if "payload" in d:
            kwargs["payload"] = SigninForm.from_dict(d["payload"])

        return SigninInput(**kwargs)

    def __repr__(self) -> str:
        result = "SigninInput("
        if self.payload is not None:
            result += f"payload={repr(self.payload)}"

        return result + ")"

    def __eq__(self, other: Any) -> bool:
        if not isinstance(other, SigninInput):
            return False
        attributes: list[str] = [
            "payload",
        ]
        return all(getattr(self, a) == getattr(other, a) for a in attributes)


class SigninToken:
    token: str

    def __init__(
        self,
        *,
        token: str,
    ):
        """Contains a bearer token for authentication."""
        self.token = token

    def as_dict(self) -> Dict[str, Any]:
        """Converts the SigninToken to a dictionary.

        The dictionary uses the modeled shape names rather than the parameter names as
        keys to be mostly compatible with boto3.
        """
        return {
            "token": self.token,
        }

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "SigninToken":
        """Creates a SigninToken from a dictionary.

        The dictionary is expected to use the modeled shape names rather than the
        parameter names as keys to be mostly compatible with boto3.
        """
        kwargs: Dict[str, Any] = {
            "token": d["token"],
        }

        return SigninToken(**kwargs)

    def __repr__(self) -> str:
        result = "SigninToken("
        if self.token is not None:
            result += f"token={repr(self.token)}"

        return result + ")"

    def __eq__(self, other: Any) -> bool:
        if not isinstance(other, SigninToken):
            return False
        attributes: list[str] = [
            "token",
        ]
        return all(getattr(self, a) == getattr(other, a) for a in attributes)


class SigninOutput:
    payload: SigninToken

    def __init__(
        self,
        *,
        payload: SigninToken,
    ):
        """
        :param payload: Contains a bearer token for authentication.
        """
        self.payload = payload

    def as_dict(self) -> Dict[str, Any]:
        """Converts the SigninOutput to a dictionary.

        The dictionary uses the modeled shape names rather than the parameter names as
        keys to be mostly compatible with boto3.
        """
        return {
            "payload": self.payload.as_dict(),
        }

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "SigninOutput":
        """Creates a SigninOutput from a dictionary.

        The dictionary is expected to use the modeled shape names rather than the
        parameter names as keys to be mostly compatible with boto3.
        """
        kwargs: Dict[str, Any] = {
            "payload": SigninToken.from_dict(d["payload"]),
        }

        return SigninOutput(**kwargs)

    def __repr__(self) -> str:
        result = "SigninOutput("
        if self.payload is not None:
            result += f"payload={repr(self.payload)}"

        return result + ")"

    def __eq__(self, other: Any) -> bool:
        if not isinstance(other, SigninOutput):
            return False
        attributes: list[str] = [
            "payload",
        ]
        return all(getattr(self, a) == getattr(other, a) for a in attributes)


def _validation_exception_field_list_as_dict(
    given: list[ValidationExceptionField],
) -> List[Any]:
    return [v.as_dict() for v in given]


def _validation_exception_field_list_from_dict(
    given: List[Any],
) -> list[ValidationExceptionField]:
    return [ValidationExceptionField.from_dict(v) for v in given]
