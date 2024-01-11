# Code generated by smithy-python-codegen DO NOT EDIT.

import json
from typing import Any, cast

from smithy_python.interfaces.http import HTTPResponse
from smithy_python.protocolutils import parse_rest_json_error_info
from smithy_python.types import Document
from smithy_python.utils import expect_type

from .config import Config
from .errors import (
    ApiError,
    ConflictError,
    ForbiddenError,
    NotFoundError,
    ServiceError,
    ThrottlingError,
    UnauthorizedError,
    UnknownApiError,
    ValidationException,
)
from .models import (
    CreateTodoOutput,
    DeleteTodoOutput,
    EchoMessageOutput,
    GetTodoOutput,
    ListTodosOutput,
    SigninOutput,
    TodoItem,
    UpdateTodoOutput,
    UpdateTodoStatusOutput,
    ValidationExceptionField,
)


async def _deserialize_create_todo(
    http_response: HTTPResponse, config: Config
) -> CreateTodoOutput:
    if http_response.status != 201 and http_response.status >= 300:
        raise await _deserialize_error_create_todo(http_response, config)

    kwargs: dict[str, Any] = {}

    for fld in http_response.fields:
        for key, value in fld.as_tuples():
            _key_lowercase = key.lower()
            match _key_lowercase:
                case "x-todo-id":
                    kwargs["id"] = value

    return CreateTodoOutput(**kwargs)


async def _deserialize_error_create_todo(
    http_response: HTTPResponse, config: Config
) -> ApiError[Any]:
    code, message, parsed_body = await parse_rest_json_error_info(http_response)

    match code.lower():
        case "conflicterror":
            return await _deserialize_error_conflict_error(
                http_response, config, parsed_body, message
            )

        case "validationexception":
            return await _deserialize_error_validation_exception(
                http_response, config, parsed_body, message
            )

        case _:
            return UnknownApiError(message)


async def _deserialize_delete_todo(
    http_response: HTTPResponse, config: Config
) -> DeleteTodoOutput:
    if http_response.status != 204 and http_response.status >= 300:
        raise await _deserialize_error_delete_todo(http_response, config)

    kwargs: dict[str, Any] = {}

    for fld in http_response.fields:
        for key, value in fld.as_tuples():
            _key_lowercase = key.lower()
            match _key_lowercase:
                case "x-rows-affected":
                    kwargs["rows_affected"] = int(value)

    return DeleteTodoOutput(**kwargs)


async def _deserialize_error_delete_todo(
    http_response: HTTPResponse, config: Config
) -> ApiError[Any]:
    code, message, parsed_body = await parse_rest_json_error_info(http_response)

    match code.lower():
        case "notfounderror":
            return await _deserialize_error_not_found_error(
                http_response, config, parsed_body, message
            )

        case "validationexception":
            return await _deserialize_error_validation_exception(
                http_response, config, parsed_body, message
            )

        case _:
            return UnknownApiError(message)


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


async def _deserialize_get_todo(
    http_response: HTTPResponse, config: Config
) -> GetTodoOutput:
    if http_response.status != 200 and http_response.status >= 300:
        raise await _deserialize_error_get_todo(http_response, config)

    kwargs: dict[str, Any] = {}

    output: dict[str, Document] = {}
    if body := await http_response.consume_body():
        output = json.loads(body)

    if "todo" not in output:
        raise ServiceError(
            'Expected to find "todo" in the operation output, but it was not present.'
        )
    kwargs["todo"] = _deserialize_todo_item(output["todo"], config)

    return GetTodoOutput(**kwargs)


async def _deserialize_error_get_todo(
    http_response: HTTPResponse, config: Config
) -> ApiError[Any]:
    code, message, parsed_body = await parse_rest_json_error_info(http_response)

    match code.lower():
        case "notfounderror":
            return await _deserialize_error_not_found_error(
                http_response, config, parsed_body, message
            )

        case "validationexception":
            return await _deserialize_error_validation_exception(
                http_response, config, parsed_body, message
            )

        case _:
            return UnknownApiError(message)


async def _deserialize_list_todos(
    http_response: HTTPResponse, config: Config
) -> ListTodosOutput:
    if http_response.status != 200 and http_response.status >= 300:
        raise await _deserialize_error_list_todos(http_response, config)

    kwargs: dict[str, Any] = {}

    output: dict[str, Document] = {}
    if body := await http_response.consume_body():
        output = json.loads(body)

    if "todos" not in output:
        raise ServiceError(
            'Expected to find "todos" in the operation output, but it was not present.'
        )
    kwargs["todos"] = _deserialize_todo_list(output["todos"], config)

    if (_next_token := output.get("nextToken")) is not None:
        kwargs["next_token"] = expect_type(str, _next_token)

    return ListTodosOutput(**kwargs)


async def _deserialize_error_list_todos(
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


async def _deserialize_signin(
    http_response: HTTPResponse, config: Config
) -> SigninOutput:
    if http_response.status != 200 and http_response.status >= 300:
        raise await _deserialize_error_signin(http_response, config)

    kwargs: dict[str, Any] = {}

    output: dict[str, Document] = {}
    if body := await http_response.consume_body():
        output = json.loads(body)

    if "token" not in output:
        raise ServiceError(
            'Expected to find "token" in the operation output, but it was not present.'
        )
    kwargs["token"] = expect_type(str, output["token"])

    return SigninOutput(**kwargs)


async def _deserialize_error_signin(
    http_response: HTTPResponse, config: Config
) -> ApiError[Any]:
    code, message, parsed_body = await parse_rest_json_error_info(http_response)

    match code.lower():
        case "validationexception":
            return await _deserialize_error_validation_exception(
                http_response, config, parsed_body, message
            )

        case "unauthorizederror":
            return await _deserialize_error_unauthorized_error(
                http_response, config, parsed_body, message
            )

        case "forbiddenerror":
            return await _deserialize_error_forbidden_error(
                http_response, config, parsed_body, message
            )

        case "throttlingerror":
            return await _deserialize_error_throttling_error(
                http_response, config, parsed_body, message
            )

        case _:
            return UnknownApiError(message)


async def _deserialize_update_todo(
    http_response: HTTPResponse, config: Config
) -> UpdateTodoOutput:
    if http_response.status != 200 and http_response.status >= 300:
        raise await _deserialize_error_update_todo(http_response, config)

    kwargs: dict[str, Any] = {}

    for fld in http_response.fields:
        for key, value in fld.as_tuples():
            _key_lowercase = key.lower()
            match _key_lowercase:
                case "x-rows-affected":
                    kwargs["rows_affected"] = int(value)

    return UpdateTodoOutput(**kwargs)


async def _deserialize_error_update_todo(
    http_response: HTTPResponse, config: Config
) -> ApiError[Any]:
    code, message, parsed_body = await parse_rest_json_error_info(http_response)

    match code.lower():
        case "notfounderror":
            return await _deserialize_error_not_found_error(
                http_response, config, parsed_body, message
            )

        case "validationexception":
            return await _deserialize_error_validation_exception(
                http_response, config, parsed_body, message
            )

        case _:
            return UnknownApiError(message)


async def _deserialize_update_todo_status(
    http_response: HTTPResponse, config: Config
) -> UpdateTodoStatusOutput:
    if http_response.status != 200 and http_response.status >= 300:
        raise await _deserialize_error_update_todo_status(http_response, config)

    kwargs: dict[str, Any] = {}

    for fld in http_response.fields:
        for key, value in fld.as_tuples():
            _key_lowercase = key.lower()
            match _key_lowercase:
                case "x-rows-affected":
                    kwargs["rows_affected"] = int(value)

    return UpdateTodoStatusOutput(**kwargs)


async def _deserialize_error_update_todo_status(
    http_response: HTTPResponse, config: Config
) -> ApiError[Any]:
    code, message, parsed_body = await parse_rest_json_error_info(http_response)

    match code.lower():
        case "notfounderror":
            return await _deserialize_error_not_found_error(
                http_response, config, parsed_body, message
            )

        case "validationexception":
            return await _deserialize_error_validation_exception(
                http_response, config, parsed_body, message
            )

        case _:
            return UnknownApiError(message)


async def _deserialize_error_conflict_error(
    http_response: HTTPResponse,
    config: Config,
    parsed_body: dict[str, Document] | None,
    default_message: str,
) -> ConflictError:
    kwargs: dict[str, Any] = {"message": default_message}

    if (parsed_body is None) and (body := await http_response.consume_body()):
        parsed_body = json.loads(body)

    output: dict[str, Document] = parsed_body if parsed_body is not None else {}

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    return ConflictError(**kwargs)


async def _deserialize_error_forbidden_error(
    http_response: HTTPResponse,
    config: Config,
    parsed_body: dict[str, Document] | None,
    default_message: str,
) -> ForbiddenError:
    kwargs: dict[str, Any] = {"message": default_message}

    if (parsed_body is None) and (body := await http_response.consume_body()):
        parsed_body = json.loads(body)

    output: dict[str, Document] = parsed_body if parsed_body is not None else {}

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    return ForbiddenError(**kwargs)


async def _deserialize_error_not_found_error(
    http_response: HTTPResponse,
    config: Config,
    parsed_body: dict[str, Document] | None,
    default_message: str,
) -> NotFoundError:
    kwargs: dict[str, Any] = {"message": default_message}

    if (parsed_body is None) and (body := await http_response.consume_body()):
        parsed_body = json.loads(body)

    output: dict[str, Document] = parsed_body if parsed_body is not None else {}

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    return NotFoundError(**kwargs)


async def _deserialize_error_throttling_error(
    http_response: HTTPResponse,
    config: Config,
    parsed_body: dict[str, Document] | None,
    default_message: str,
) -> ThrottlingError:
    kwargs: dict[str, Any] = {"message": default_message}

    if (parsed_body is None) and (body := await http_response.consume_body()):
        parsed_body = json.loads(body)

    output: dict[str, Document] = parsed_body if parsed_body is not None else {}

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    return ThrottlingError(**kwargs)


async def _deserialize_error_unauthorized_error(
    http_response: HTTPResponse,
    config: Config,
    parsed_body: dict[str, Document] | None,
    default_message: str,
) -> UnauthorizedError:
    kwargs: dict[str, Any] = {"message": default_message}

    if (parsed_body is None) and (body := await http_response.consume_body()):
        parsed_body = json.loads(body)

    output: dict[str, Document] = parsed_body if parsed_body is not None else {}

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    return UnauthorizedError(**kwargs)


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

    if "message" not in output:
        raise ServiceError(
            'Expected to find "message" in the operation output, but it was not present.'
        )
    kwargs["message"] = expect_type(str, output["message"])

    if (_field_list := output.get("fieldList")) is not None:
        kwargs["field_list"] = _deserialize_validation_exception_field_list(
            _field_list, config
        )

    return ValidationException(**kwargs)


def _deserialize_todo_item(output: Document, config: Config) -> TodoItem:
    if not isinstance(output, dict):
        raise ServiceError(f"Expected dict, found {type(output)}")

    kwargs: dict[str, Any] = {}

    if "id" not in output:
        raise ServiceError(
            'Expected to find "id" in the operation output, but it was not present.'
        )
    kwargs["id"] = expect_type(str, output["id"])

    if "title" not in output:
        raise ServiceError(
            'Expected to find "title" in the operation output, but it was not present.'
        )
    kwargs["title"] = expect_type(str, output["title"])

    if "completed" not in output:
        raise ServiceError(
            'Expected to find "completed" in the operation output, but it was not present.'
        )
    kwargs["completed"] = expect_type(bool, output["completed"])

    return TodoItem(**kwargs)


def _deserialize_todo_list(output: Document, config: Config) -> list[TodoItem]:
    if not isinstance(output, list):
        raise ServiceError(f"Expected list, found {type(output)}")
    return [_deserialize_todo_item(e, config) for e in output]


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
