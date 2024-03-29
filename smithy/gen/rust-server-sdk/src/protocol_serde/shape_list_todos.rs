// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(clippy::unnecessary_wraps)]
pub async fn de_list_todos_http_request<B>(
    #[allow(unused_variables)] request: ::http::Request<B>,
) -> std::result::Result<
    crate::input::ListTodosInput,
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
        let mut input = crate::input::list_todos_input::Builder::default();
        #[allow(unused_variables)]
        let ::aws_smithy_runtime_api::http::RequestParts {
            uri, headers, body, ..
        } = ::aws_smithy_runtime_api::http::Request::try_from(request)?.into_parts();
        let query_string = uri.query().unwrap_or("");
        let pairs = ::form_urlencoded::parse(query_string.as_bytes());
        let mut next_token_seen = false;
        let mut size_seen = false;
        for (k, v) in pairs {
            if !next_token_seen && k == "nextToken" {
                input = input.set_next_token(
                    crate::protocol_serde::shape_list_todos_input::de_next_token(&v)?,
                );
                next_token_seen = true;
            }
            if !size_seen && k == "size" {
                input = input.set_size(crate::protocol_serde::shape_list_todos_input::de_size(&v)?);
                size_seen = true;
            }
        }
        input.build()
    })
}

#[allow(clippy::unnecessary_wraps)]
pub fn ser_list_todos_http_response(
    #[allow(unused_variables)] output: crate::output::ListTodosOutput,
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
            crate::protocol_serde::shape_list_todos_output::ser_list_todos_output_output_output(
                &output,
            )?;
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
pub fn ser_list_todos_http_error(
    error: &crate::error::ListTodosError,
) -> std::result::Result<
    ::aws_smithy_http_server::response::Response,
    ::aws_smithy_http_server::protocol::rest_json_1::rejection::ResponseRejection,
> {
    Ok({
        match error {
            crate::error::ListTodosError::ValidationException(output) => {
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
        }
    })
}
