// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(clippy::unnecessary_wraps)]
pub fn de_get_todo_http_error(
    _response_status: u16,
    _response_headers: &::aws_smithy_runtime_api::http::Headers,
    _response_body: &[u8],
) -> std::result::Result<
    crate::operation::get_todo::GetTodoOutput,
    crate::operation::get_todo::GetTodoError,
> {
    #[allow(unused_mut)]
    let mut generic_builder = crate::protocol_serde::parse_http_error_metadata(
        _response_status,
        _response_headers,
        _response_body,
    )
    .map_err(crate::operation::get_todo::GetTodoError::unhandled)?;
    let generic = generic_builder.build();
    let error_code = match generic.code() {
        Some(code) => code,
        None => return Err(crate::operation::get_todo::GetTodoError::unhandled(generic)),
    };

    let _error_message = generic.message().map(|msg| msg.to_owned());
    Err(match error_code {
        "NotFoundError" => crate::operation::get_todo::GetTodoError::NotFoundError({
            #[allow(unused_mut)]
            let mut tmp = {
                #[allow(unused_mut)]
                let mut output = crate::types::error::builders::NotFoundErrorBuilder::default();
                output = crate::protocol_serde::shape_not_found_error::de_not_found_error_json_err(
                    _response_body,
                    output,
                )
                .map_err(crate::operation::get_todo::GetTodoError::unhandled)?;
                let output = output.meta(generic);
                crate::serde_util::not_found_error_correct_errors(output)
                    .build()
                    .map_err(crate::operation::get_todo::GetTodoError::unhandled)?
            };
            tmp
        }),
        "ValidationException" => crate::operation::get_todo::GetTodoError::ValidationError({
            #[allow(unused_mut)]
            let mut tmp = {
                #[allow(unused_mut)]
                let mut output = crate::types::error::builders::ValidationErrorBuilder::default();
                output = crate::protocol_serde::shape_validation_exception::de_validation_exception_json_err(_response_body, output).map_err(crate::operation::get_todo::GetTodoError::unhandled)?;
                let output = output.meta(generic);
                crate::serde_util::validation_exception_correct_errors(output)
                    .build()
                    .map_err(crate::operation::get_todo::GetTodoError::unhandled)?
            };
            tmp
        }),
        _ => crate::operation::get_todo::GetTodoError::generic(generic),
    })
}

#[allow(clippy::unnecessary_wraps)]
pub fn de_get_todo_http_response(
    _response_status: u16,
    _response_headers: &::aws_smithy_runtime_api::http::Headers,
    _response_body: &[u8],
) -> std::result::Result<
    crate::operation::get_todo::GetTodoOutput,
    crate::operation::get_todo::GetTodoError,
> {
    Ok({
        #[allow(unused_mut)]
        let mut output = crate::operation::get_todo::builders::GetTodoOutputBuilder::default();
        output = crate::protocol_serde::shape_get_todo::de_get_todo(_response_body, output)
            .map_err(crate::operation::get_todo::GetTodoError::unhandled)?;
        crate::serde_util::get_todo_output_output_correct_errors(output)
            .build()
            .map_err(crate::operation::get_todo::GetTodoError::unhandled)?
    })
}

pub(crate) fn de_get_todo(
    value: &[u8],
    mut builder: crate::operation::get_todo::builders::GetTodoOutputBuilder,
) -> Result<
    crate::operation::get_todo::builders::GetTodoOutputBuilder,
    ::aws_smithy_json::deserialize::error::DeserializeError,
> {
    let mut tokens_owned =
        ::aws_smithy_json::deserialize::json_token_iter(crate::protocol_serde::or_empty_doc(value))
            .peekable();
    let tokens = &mut tokens_owned;
    ::aws_smithy_json::deserialize::token::expect_start_object(tokens.next())?;
    loop {
        match tokens.next().transpose()? {
            Some(::aws_smithy_json::deserialize::Token::EndObject { .. }) => break,
            Some(::aws_smithy_json::deserialize::Token::ObjectKey { key, .. }) => {
                match key.to_unescaped()?.as_ref() {
                    "todo" => {
                        builder = builder.set_todo(
                            crate::protocol_serde::shape_todo_item::de_todo_item(tokens)?,
                        );
                    }
                    _ => ::aws_smithy_json::deserialize::token::skip_value(tokens)?,
                }
            }
            other => {
                return Err(
                    ::aws_smithy_json::deserialize::error::DeserializeError::custom(format!(
                        "expected object key or end object, found: {:?}",
                        other
                    )),
                )
            }
        }
    }
    if tokens.next().is_some() {
        return Err(
            ::aws_smithy_json::deserialize::error::DeserializeError::custom(
                "found more JSON tokens after completing parsing",
            ),
        );
    }
    Ok(builder)
}
