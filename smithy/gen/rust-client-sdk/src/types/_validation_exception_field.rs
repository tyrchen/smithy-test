// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.

/// Describes one specific validation failure for an input member.
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct ValidationExceptionField {
    /// A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
    pub path: ::std::string::String,
    /// A detailed description of the validation failure.
    pub message: ::std::string::String,
}
impl ValidationExceptionField {
    /// A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
    pub fn path(&self) -> &str {
        use std::ops::Deref;
        self.path.deref()
    }
    /// A detailed description of the validation failure.
    pub fn message(&self) -> &str {
        use std::ops::Deref;
        self.message.deref()
    }
}
impl ValidationExceptionField {
    /// Creates a new builder-style object to manufacture [`ValidationExceptionField`](crate::types::ValidationExceptionField).
    pub fn builder() -> crate::types::builders::ValidationExceptionFieldBuilder {
        crate::types::builders::ValidationExceptionFieldBuilder::default()
    }
}

/// A builder for [`ValidationExceptionField`](crate::types::ValidationExceptionField).
#[non_exhaustive]
#[derive(
    ::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug,
)]
pub struct ValidationExceptionFieldBuilder {
    pub(crate) path: ::std::option::Option<::std::string::String>,
    pub(crate) message: ::std::option::Option<::std::string::String>,
}
impl ValidationExceptionFieldBuilder {
    /// A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
    /// This field is required.
    pub fn path(mut self, input: impl ::std::convert::Into<::std::string::String>) -> Self {
        self.path = ::std::option::Option::Some(input.into());
        self
    }
    /// A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
    pub fn set_path(mut self, input: ::std::option::Option<::std::string::String>) -> Self {
        self.path = input;
        self
    }
    /// A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
    pub fn get_path(&self) -> &::std::option::Option<::std::string::String> {
        &self.path
    }
    /// A detailed description of the validation failure.
    /// This field is required.
    pub fn message(mut self, input: impl ::std::convert::Into<::std::string::String>) -> Self {
        self.message = ::std::option::Option::Some(input.into());
        self
    }
    /// A detailed description of the validation failure.
    pub fn set_message(mut self, input: ::std::option::Option<::std::string::String>) -> Self {
        self.message = input;
        self
    }
    /// A detailed description of the validation failure.
    pub fn get_message(&self) -> &::std::option::Option<::std::string::String> {
        &self.message
    }
    /// Consumes the builder and constructs a [`ValidationExceptionField`](crate::types::ValidationExceptionField).
    /// This method will fail if any of the following fields are not set:
    /// - [`path`](crate::types::builders::ValidationExceptionFieldBuilder::path)
    /// - [`message`](crate::types::builders::ValidationExceptionFieldBuilder::message)
    pub fn build(
        self,
    ) -> ::std::result::Result<
        crate::types::ValidationExceptionField,
        ::aws_smithy_types::error::operation::BuildError,
    > {
        ::std::result::Result::Ok(
            crate::types::ValidationExceptionField {
                path: self.path
                    .ok_or_else(||
                        ::aws_smithy_types::error::operation::BuildError::missing_field("path", "path was not specified but it is required when building ValidationExceptionField")
                    )?
                ,
                message: self.message
                    .ok_or_else(||
                        ::aws_smithy_types::error::operation::BuildError::missing_field("message", "message was not specified but it is required when building ValidationExceptionField")
                    )?
                ,
            }
        )
    }
}
