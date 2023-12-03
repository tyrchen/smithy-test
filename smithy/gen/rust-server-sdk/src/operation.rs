// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.

const CONTENT_TYPE_SIGNIN: ::mime::Mime = ::mime::APPLICATION_JSON;
::pin_project_lite::pin_project! {
    /// A [`Future`](std::future::Future) aggregating the body bytes of a [`Request`] and constructing the
    /// [`SigninInput`](crate::input::SigninInput) using modelled bindings.
    pub struct SigninInputFuture {
        inner: std::pin::Pin<Box<dyn std::future::Future<Output = Result<crate::input::SigninInput, ::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError>> + Send>>
    }
}

impl std::future::Future for SigninInputFuture {
    type Output = Result<
        crate::input::SigninInput,
        ::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError,
    >;

    fn poll(
        self: std::pin::Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Self::Output> {
        let this = self.project();
        this.inner.as_mut().poll(cx)
    }
}

impl<B>
    ::aws_smithy_http_server::request::FromRequest<
        ::aws_smithy_http_server::protocol::rest_json_1::RestJson1,
        B,
    > for crate::input::SigninInput
where
    B: ::aws_smithy_http_server::body::HttpBody + Send,
    B: 'static,

    B::Data: Send,
    ::aws_smithy_http_server::protocol::rest_json_1::rejection::RequestRejection:
        From<<B as ::aws_smithy_http_server::body::HttpBody>::Error>,
{
    type Rejection = ::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError;
    type Future = SigninInputFuture;

    fn from_request(request: ::http::Request<B>) -> Self::Future {
        let fut = async move {
            if !::aws_smithy_http_server::protocol::accept_header_classifier(
                request.headers(),
                &CONTENT_TYPE_SIGNIN,
            ) {
                return Err(::aws_smithy_http_server::protocol::rest_json_1::rejection::RequestRejection::NotAcceptable);
            }
            ::aws_smithy_http_server::protocol::content_type_header_classifier_http(
                request.headers(),
                Some("application/json"),
            )?;
            crate::protocol_serde::shape_signin::de_signin_http_request(request)
                .await
                .map_err(Into::into)
        };
        use ::futures_util::future::TryFutureExt;
        let fut = fut.map_err(
            |e: ::aws_smithy_http_server::protocol::rest_json_1::rejection::RequestRejection| {
                ::tracing::debug!(error = %e, "failed to deserialize request");
                ::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError::from(
                    e,
                )
            },
        );
        SigninInputFuture {
            inner: Box::pin(fut),
        }
    }
}
impl
    ::aws_smithy_http_server::response::IntoResponse<
        ::aws_smithy_http_server::protocol::rest_json_1::RestJson1,
    > for crate::output::SigninOutput
{
    fn into_response(self) -> ::aws_smithy_http_server::response::Response {
        match crate::protocol_serde::shape_signin::ser_signin_http_response(self) {
            Ok(response) => response,
            Err(e) => {
                ::tracing::error!(error = %e, "failed to serialize response");
                ::aws_smithy_http_server::response::IntoResponse::<::aws_smithy_http_server::protocol::rest_json_1::RestJson1>::into_response(::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError::from(e))
            }
        }
    }
}
impl
    ::aws_smithy_http_server::response::IntoResponse<
        ::aws_smithy_http_server::protocol::rest_json_1::RestJson1,
    > for crate::error::SigninError
{
    fn into_response(self) -> ::aws_smithy_http_server::response::Response {
        match crate::protocol_serde::shape_signin::ser_signin_http_error(&self) {
            Ok(mut response) => {
                response.extensions_mut().insert(
                    ::aws_smithy_http_server::extension::ModeledErrorExtension::new(self.name()),
                );
                response
            }
            Err(e) => {
                ::tracing::error!(error = %e, "failed to serialize response");
                ::aws_smithy_http_server::response::IntoResponse::<::aws_smithy_http_server::protocol::rest_json_1::RestJson1>::into_response(::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError::from(e))
            }
        }
    }
}

const CONTENT_TYPE_ECHOMESSAGE: ::mime::Mime = ::mime::APPLICATION_JSON;
::pin_project_lite::pin_project! {
    /// A [`Future`](std::future::Future) aggregating the body bytes of a [`Request`] and constructing the
    /// [`EchoMessageInput`](crate::input::EchoMessageInput) using modelled bindings.
    pub struct EchoMessageInputFuture {
        inner: std::pin::Pin<Box<dyn std::future::Future<Output = Result<crate::input::EchoMessageInput, ::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError>> + Send>>
    }
}

impl std::future::Future for EchoMessageInputFuture {
    type Output = Result<
        crate::input::EchoMessageInput,
        ::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError,
    >;

    fn poll(
        self: std::pin::Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Self::Output> {
        let this = self.project();
        this.inner.as_mut().poll(cx)
    }
}

impl<B>
    ::aws_smithy_http_server::request::FromRequest<
        ::aws_smithy_http_server::protocol::rest_json_1::RestJson1,
        B,
    > for crate::input::EchoMessageInput
where
    B: ::aws_smithy_http_server::body::HttpBody + Send,
    B: 'static,

    B::Data: Send,
    ::aws_smithy_http_server::protocol::rest_json_1::rejection::RequestRejection:
        From<<B as ::aws_smithy_http_server::body::HttpBody>::Error>,
{
    type Rejection = ::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError;
    type Future = EchoMessageInputFuture;

    fn from_request(request: ::http::Request<B>) -> Self::Future {
        let fut = async move {
            if !::aws_smithy_http_server::protocol::accept_header_classifier(
                request.headers(),
                &CONTENT_TYPE_ECHOMESSAGE,
            ) {
                return Err(::aws_smithy_http_server::protocol::rest_json_1::rejection::RequestRejection::NotAcceptable);
            }

            crate::protocol_serde::shape_echo_message::de_echo_message_http_request(request)
                .await
                .map_err(Into::into)
        };
        use ::futures_util::future::TryFutureExt;
        let fut = fut.map_err(
            |e: ::aws_smithy_http_server::protocol::rest_json_1::rejection::RequestRejection| {
                ::tracing::debug!(error = %e, "failed to deserialize request");
                ::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError::from(
                    e,
                )
            },
        );
        EchoMessageInputFuture {
            inner: Box::pin(fut),
        }
    }
}
impl
    ::aws_smithy_http_server::response::IntoResponse<
        ::aws_smithy_http_server::protocol::rest_json_1::RestJson1,
    > for crate::output::EchoMessageOutput
{
    fn into_response(self) -> ::aws_smithy_http_server::response::Response {
        match crate::protocol_serde::shape_echo_message::ser_echo_message_http_response(self) {
            Ok(response) => response,
            Err(e) => {
                ::tracing::error!(error = %e, "failed to serialize response");
                ::aws_smithy_http_server::response::IntoResponse::<::aws_smithy_http_server::protocol::rest_json_1::RestJson1>::into_response(::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError::from(e))
            }
        }
    }
}
impl
    ::aws_smithy_http_server::response::IntoResponse<
        ::aws_smithy_http_server::protocol::rest_json_1::RestJson1,
    > for crate::error::EchoMessageError
{
    fn into_response(self) -> ::aws_smithy_http_server::response::Response {
        match crate::protocol_serde::shape_echo_message::ser_echo_message_http_error(&self) {
            Ok(mut response) => {
                response.extensions_mut().insert(
                    ::aws_smithy_http_server::extension::ModeledErrorExtension::new(self.name()),
                );
                response
            }
            Err(e) => {
                ::tracing::error!(error = %e, "failed to serialize response");
                ::aws_smithy_http_server::response::IntoResponse::<::aws_smithy_http_server::protocol::rest_json_1::RestJson1>::into_response(::aws_smithy_http_server::protocol::rest_json_1::runtime_error::RuntimeError::from(e))
            }
        }
    }
}
