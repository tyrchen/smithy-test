// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(missing_docs)] // documentation missing in model
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct SigninInput {
    /// Contains username and password. Currently any username and password is accepted.
    pub payload: ::std::option::Option<crate::types::SigninForm>,
}
impl SigninInput {
    /// Contains username and password. Currently any username and password is accepted.
    pub fn payload(&self) -> ::std::option::Option<&crate::types::SigninForm> {
        self.payload.as_ref()
    }
}
impl SigninInput {
    /// Creates a new builder-style object to manufacture [`SigninInput`](crate::operation::signin::SigninInput).
    pub fn builder() -> crate::operation::signin::builders::SigninInputBuilder {
        crate::operation::signin::builders::SigninInputBuilder::default()
    }
}

/// A builder for [`SigninInput`](crate::operation::signin::SigninInput).
#[non_exhaustive]
#[derive(
    ::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug,
)]
pub struct SigninInputBuilder {
    pub(crate) payload: ::std::option::Option<crate::types::SigninForm>,
}
impl SigninInputBuilder {
    /// Contains username and password. Currently any username and password is accepted.
    /// This field is required.
    pub fn payload(mut self, input: crate::types::SigninForm) -> Self {
        self.payload = ::std::option::Option::Some(input);
        self
    }
    /// Contains username and password. Currently any username and password is accepted.
    pub fn set_payload(mut self, input: ::std::option::Option<crate::types::SigninForm>) -> Self {
        self.payload = input;
        self
    }
    /// Contains username and password. Currently any username and password is accepted.
    pub fn get_payload(&self) -> &::std::option::Option<crate::types::SigninForm> {
        &self.payload
    }
    /// Consumes the builder and constructs a [`SigninInput`](crate::operation::signin::SigninInput).
    pub fn build(
        self,
    ) -> ::std::result::Result<
        crate::operation::signin::SigninInput,
        ::aws_smithy_types::error::operation::BuildError,
    > {
        ::std::result::Result::Ok(crate::operation::signin::SigninInput {
            payload: self.payload,
        })
    }
}
