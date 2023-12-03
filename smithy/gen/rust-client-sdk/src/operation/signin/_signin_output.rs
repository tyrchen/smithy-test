// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(missing_docs)] // documentation missing in model
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct SigninOutput {
    /// Contains a bearer token for authentication.
    pub payload: crate::types::SigninToken,
}
impl SigninOutput {
    /// Contains a bearer token for authentication.
    pub fn payload(&self) -> &crate::types::SigninToken {
        &self.payload
    }
}
impl SigninOutput {
    /// Creates a new builder-style object to manufacture [`SigninOutput`](crate::operation::signin::SigninOutput).
    pub fn builder() -> crate::operation::signin::builders::SigninOutputBuilder {
        crate::operation::signin::builders::SigninOutputBuilder::default()
    }
}

/// A builder for [`SigninOutput`](crate::operation::signin::SigninOutput).
#[non_exhaustive]
#[derive(
    ::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug,
)]
pub struct SigninOutputBuilder {
    pub(crate) payload: ::std::option::Option<crate::types::SigninToken>,
}
impl SigninOutputBuilder {
    /// Contains a bearer token for authentication.
    /// This field is required.
    pub fn payload(mut self, input: crate::types::SigninToken) -> Self {
        self.payload = ::std::option::Option::Some(input);
        self
    }
    /// Contains a bearer token for authentication.
    pub fn set_payload(mut self, input: ::std::option::Option<crate::types::SigninToken>) -> Self {
        self.payload = input;
        self
    }
    /// Contains a bearer token for authentication.
    pub fn get_payload(&self) -> &::std::option::Option<crate::types::SigninToken> {
        &self.payload
    }
    /// Consumes the builder and constructs a [`SigninOutput`](crate::operation::signin::SigninOutput).
    /// This method will fail if any of the following fields are not set:
    /// - [`payload`](crate::operation::signin::builders::SigninOutputBuilder::payload)
    pub fn build(
        self,
    ) -> ::std::result::Result<
        crate::operation::signin::SigninOutput,
        ::aws_smithy_types::error::operation::BuildError,
    > {
        ::std::result::Result::Ok(crate::operation::signin::SigninOutput {
            payload: self.payload.ok_or_else(|| {
                ::aws_smithy_types::error::operation::BuildError::missing_field(
                    "payload",
                    "payload was not specified but it is required when building SigninOutput",
                )
            })?,
        })
    }
}
