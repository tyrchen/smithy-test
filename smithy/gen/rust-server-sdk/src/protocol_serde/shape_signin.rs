// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(clippy::unnecessary_wraps)]
pub async fn de_signin_http_request<B>(
    #[allow(unused_variables)] request: ::http::Request<B>,
) -> std::result::Result<
    crate::input::SigninInput,
    ::aws_smithy_http_server::protocol::rest_json_1::rejection::RequestRejection,
>
where
    B: ::aws_smithy_http_server::body::HttpBody + Send,
    B::Data: Send,
    ::aws_smithy_http_server::protocol::rest_json_1::rejection::RequestRejection:
        From<<B as ::aws_smithy_http_server::body::HttpBody>::Error>,
{
    Ok({
        #[allow(unused_mut)]
        let mut input = crate::input::signin_input::Builder::default();
        #[allow(unused_variables)]
        let ::aws_smithy_runtime_api::http::RequestParts {
            uri, headers, body, ..
        } = ::aws_smithy_runtime_api::http::Request::try_from(request)?.into_parts();
        let bytes = ::hyper::body::to_bytes(body).await?;
        if !bytes.is_empty() {
            ::aws_smithy_http_server::protocol::content_type_header_classifier_smithy(
                &headers,
                Some("application/json"),
            )?;
            input = crate::protocol_serde::shape_signin::de_signin(bytes.as_ref(), input)?;
        }
        input.build()?
    })
}

#[allow(clippy::unnecessary_wraps)]
pub fn ser_signin_http_response(
    #[allow(unused_variables)] output: crate::output::SigninOutput,
) -> std::result::Result<
    ::aws_smithy_http_server::response::Response,
    ::aws_smithy_http_server::protocol::rest_json_1::rejection::ResponseRejection,
> {
    Ok({
        #[allow(unused_mut)]
        let mut builder = ::http::Response::builder();
        builder = ::aws_smithy_http::header::set_response_header_if_absent(
            builder,
            ::http::header::CONTENT_TYPE,
            "application/json",
        );
        let http_status: u16 = 200;
        builder = builder.status(http_status);
        let payload =
            crate::protocol_serde::shape_signin_output::ser_signin_output_output_output(&output)?;
        let content_length = payload.len();
        builder = ::aws_smithy_http::header::set_response_header_if_absent(
            builder,
            ::http::header::CONTENT_LENGTH,
            content_length,
        );
        let body = ::aws_smithy_http_server::body::to_boxed(payload);
        builder.body(body)?
    })
}

#[allow(clippy::unnecessary_wraps)]
pub fn ser_signin_http_error(
    error: &crate::error::SigninError,
) -> std::result::Result<
    ::aws_smithy_http_server::response::Response,
    ::aws_smithy_http_server::protocol::rest_json_1::rejection::ResponseRejection,
> {
    Ok({
        match error {
            crate::error::SigninError::ValidationException(output) => {
                let payload = crate::protocol_serde::shape_validation_exception::ser_validation_exception_error(output)?;
                #[allow(unused_mut)]
                let mut builder = ::http::Response::builder();
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    ::http::header::CONTENT_TYPE,
                    "application/json",
                );
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    http::header::HeaderName::from_static("x-amzn-errortype"),
                    "ValidationException",
                );
                let content_length = payload.len();
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    ::http::header::CONTENT_LENGTH,
                    content_length,
                );
                builder
                    .status(400)
                    .body(::aws_smithy_http_server::body::to_boxed(payload))?
            }
            crate::error::SigninError::UnauthorizedError(output) => {
                let payload =
                    crate::protocol_serde::shape_unauthorized_error::ser_unauthorized_error_error(
                        output,
                    )?;
                #[allow(unused_mut)]
                let mut builder = ::http::Response::builder();
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    ::http::header::CONTENT_TYPE,
                    "application/json",
                );
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    http::header::HeaderName::from_static("x-amzn-errortype"),
                    "UnauthorizedError",
                );
                let content_length = payload.len();
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    ::http::header::CONTENT_LENGTH,
                    content_length,
                );
                builder
                    .status(401)
                    .body(::aws_smithy_http_server::body::to_boxed(payload))?
            }
            crate::error::SigninError::ForbiddenError(output) => {
                let payload =
                    crate::protocol_serde::shape_forbidden_error::ser_forbidden_error_error(
                        output,
                    )?;
                #[allow(unused_mut)]
                let mut builder = ::http::Response::builder();
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    ::http::header::CONTENT_TYPE,
                    "application/json",
                );
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    http::header::HeaderName::from_static("x-amzn-errortype"),
                    "ForbiddenError",
                );
                let content_length = payload.len();
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    ::http::header::CONTENT_LENGTH,
                    content_length,
                );
                builder
                    .status(403)
                    .body(::aws_smithy_http_server::body::to_boxed(payload))?
            }
            crate::error::SigninError::ThrottlingError(output) => {
                let payload =
                    crate::protocol_serde::shape_throttling_error::ser_throttling_error_error(
                        output,
                    )?;
                #[allow(unused_mut)]
                let mut builder = ::http::Response::builder();
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    ::http::header::CONTENT_TYPE,
                    "application/json",
                );
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    http::header::HeaderName::from_static("x-amzn-errortype"),
                    "ThrottlingError",
                );
                let content_length = payload.len();
                builder = ::aws_smithy_http::header::set_response_header_if_absent(
                    builder,
                    ::http::header::CONTENT_LENGTH,
                    content_length,
                );
                builder
                    .status(429)
                    .body(::aws_smithy_http_server::body::to_boxed(payload))?
            }
        }
    })
}

pub(crate) fn de_signin(
    value: &[u8],
    mut builder: crate::input::signin_input::Builder,
) -> Result<
    crate::input::signin_input::Builder,
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
                    "password" => {
                        if let Some(v) =
                            ::aws_smithy_json::deserialize::token::expect_string_or_null(
                                tokens.next(),
                            )?
                            .map(|s| s.to_unescaped().map(|u| u.into_owned()))
                            .transpose()?
                        {
                            builder = builder.set_password(v);
                        }
                    }
                    "username" => {
                        if let Some(v) =
                            ::aws_smithy_json::deserialize::token::expect_string_or_null(
                                tokens.next(),
                            )?
                            .map(|s| s.to_unescaped().map(|u| u.into_owned()))
                            .transpose()?
                        {
                            builder = builder.set_username(v);
                        }
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
