# Code generated by smithy-python-codegen DO NOT EDIT.

import json
from typing import Any, cast

from smithy_python.interfaces.http import HTTPResponse
from smithy_python.protocolutils import parse_rest_json_error_info
from smithy_python.types import Document
from smithy_python.utils import expect_type

from .config import Config
from .errors import ApiError, ServiceError, UnknownApiError, ValidationException
from .models import EchoMessageOutput, ValidationExceptionField


async def _deserialize_echo_message(
    http_response: HTTPResponse, config: Config
) -> EchoMessageOutput:
    if http_response.status != 200 and http_response.status >= 300:
        raise await _deserialize_error_echo_message(http_response, config)

    kwargs: dict[str, Any] = {}

    output: dict[str, Document] = {}
    if body := await http_response.consume_body():
        output = json.loads(body)

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    return EchoMessageOutput(**kwargs)


async def _deserialize_error_echo_message(
    http_response: HTTPResponse, config: Config
) -> ApiError[Any]:
    code, message, parsed_body = await parse_rest_json_error_info(http_response)

    match code.lower():
        case "validationexception":
            return await _deserialize_error_validation_exception(
                http_response, config, parsed_body, message
            )

        case _:
            return UnknownApiError(message)


async def _deserialize_error_validation_exception(
    http_response: HTTPResponse,
    config: Config,
    parsed_body: dict[str, Document] | None,
    default_message: str,
) -> ValidationException:
    kwargs: dict[str, Any] = {"message": default_message}

    if (parsed_body is None) and (body := await http_response.consume_body()):
        parsed_body = json.loads(body)

    output: dict[str, Document] = parsed_body if parsed_body is not None else {}

    if (_field_list := output.get("fieldList")) is not None:
        kwargs["field_list"] = _deserialize_validation_exception_field_list(
            _field_list, config
        )

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    return ValidationException(**kwargs)


def _deserialize_validation_exception_field(
    output: Document, config: Config
) -> ValidationExceptionField:
    if not isinstance(output, dict):
        raise ServiceError(f"Expected dict, found {type(output)}")

    kwargs: dict[str, Any] = {}

    if "path" not in output:
        raise ServiceError(
            'Expected to find "path" in the operation output, but it was not present.'
        )
    kwargs["path"] = expect_type(str, output["path"])

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    return ValidationExceptionField(**kwargs)


def _deserialize_validation_exception_field_list(
    output: Document, config: Config
) -> list[ValidationExceptionField]:
    if not isinstance(output, list):
        raise ServiceError(f"Expected list, found {type(output)}")
    return [_deserialize_validation_exception_field(e, config) for e in output]
