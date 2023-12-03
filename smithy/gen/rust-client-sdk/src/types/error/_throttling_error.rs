// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.

/// Throttling error.
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct ThrottlingError {
    #[allow(missing_docs)] // documentation missing in model
    pub message: ::std::string::String,
    pub(crate) meta: ::aws_smithy_types::error::ErrorMetadata,
}
impl ThrottlingError {
    /// Returns `Some(ErrorKind)` if the error is retryable. Otherwise, returns `None`.
    pub fn retryable_error_kind(&self) -> ::aws_smithy_types::retry::ErrorKind {
        ::aws_smithy_types::retry::ErrorKind::ClientError
    }
    /// Returns the error message.
    pub fn message(&self) -> &str {
        &self.message
    }
}
impl ::std::fmt::Display for ThrottlingError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        ::std::write!(f, "ThrottlingError")?;
        {
            ::std::write!(f, ": {}", &self.message)?;
        }
        Ok(())
    }
}
impl ::std::error::Error for ThrottlingError {}
impl ::aws_smithy_types::error::metadata::ProvideErrorMetadata for ThrottlingError {
    fn meta(&self) -> &::aws_smithy_types::error::ErrorMetadata {
        &self.meta
    }
}
impl ThrottlingError {
    /// Creates a new builder-style object to manufacture [`ThrottlingError`](crate::types::error::ThrottlingError).
    pub fn builder() -> crate::types::error::builders::ThrottlingErrorBuilder {
        crate::types::error::builders::ThrottlingErrorBuilder::default()
    }
}

/// A builder for [`ThrottlingError`](crate::types::error::ThrottlingError).
#[non_exhaustive]
#[derive(
    ::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug,
)]
pub struct ThrottlingErrorBuilder {
    pub(crate) message: ::std::option::Option<::std::string::String>,
    meta: std::option::Option<::aws_smithy_types::error::ErrorMetadata>,
}
impl ThrottlingErrorBuilder {
    #[allow(missing_docs)] // documentation missing in model
    /// This field is required.
    pub fn message(mut self, input: impl ::std::convert::Into<::std::string::String>) -> Self {
        self.message = ::std::option::Option::Some(input.into());
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn set_message(mut self, input: ::std::option::Option<::std::string::String>) -> Self {
        self.message = input;
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn get_message(&self) -> &::std::option::Option<::std::string::String> {
        &self.message
    }
    /// Sets error metadata
    pub fn meta(mut self, meta: ::aws_smithy_types::error::ErrorMetadata) -> Self {
        self.meta = Some(meta);
        self
    }

    /// Sets error metadata
    pub fn set_meta(
        &mut self,
        meta: std::option::Option<::aws_smithy_types::error::ErrorMetadata>,
    ) -> &mut Self {
        self.meta = meta;
        self
    }
    /// Consumes the builder and constructs a [`ThrottlingError`](crate::types::error::ThrottlingError).
    /// This method will fail if any of the following fields are not set:
    /// - [`message`](crate::types::error::builders::ThrottlingErrorBuilder::message)
    pub fn build(
        self,
    ) -> ::std::result::Result<
        crate::types::error::ThrottlingError,
        ::aws_smithy_types::error::operation::BuildError,
    > {
        ::std::result::Result::Ok(crate::types::error::ThrottlingError {
            message: self.message.ok_or_else(|| {
                ::aws_smithy_types::error::operation::BuildError::missing_field(
                    "message",
                    "message was not specified but it is required when building ThrottlingError",
                )
            })?,
            meta: self.meta.unwrap_or_default(),
        })
    }
}
