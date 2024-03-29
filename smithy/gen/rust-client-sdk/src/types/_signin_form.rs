// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.

/// Contains username and password. Currently any username and password is accepted.
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct SigninForm  {
    #[allow(missing_docs)] // documentation missing in model
    pub username: ::std::string::String,
    #[allow(missing_docs)] // documentation missing in model
    pub password: ::std::string::String,
}
impl  SigninForm  {
    #[allow(missing_docs)] // documentation missing in model
    pub fn username(&self) -> & str {
        use std::ops::Deref; self.username.deref()
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn password(&self) -> & str {
        use std::ops::Deref; self.password.deref()
    }
}
impl SigninForm {
    /// Creates a new builder-style object to manufacture [`SigninForm`](crate::types::SigninForm).
    pub fn builder() -> crate::types::builders::SigninFormBuilder {
        crate::types::builders::SigninFormBuilder::default()
    }
}

/// A builder for [`SigninForm`](crate::types::SigninForm).
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug)]
pub struct SigninFormBuilder {
    pub(crate) username: ::std::option::Option<::std::string::String>,
    pub(crate) password: ::std::option::Option<::std::string::String>,
}
impl SigninFormBuilder {
    #[allow(missing_docs)] // documentation missing in model
    /// This field is required.
    pub fn username(mut self, input: impl ::std::convert::Into<::std::string::String>) -> Self {
        self.username = ::std::option::Option::Some(input.into());
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn set_username(mut self, input: ::std::option::Option<::std::string::String>) -> Self {
        self.username = input; self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn get_username(&self) -> &::std::option::Option<::std::string::String> {
        &self.username
    }
    #[allow(missing_docs)] // documentation missing in model
    /// This field is required.
    pub fn password(mut self, input: impl ::std::convert::Into<::std::string::String>) -> Self {
        self.password = ::std::option::Option::Some(input.into());
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn set_password(mut self, input: ::std::option::Option<::std::string::String>) -> Self {
        self.password = input; self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn get_password(&self) -> &::std::option::Option<::std::string::String> {
        &self.password
    }
    /// Consumes the builder and constructs a [`SigninForm`](crate::types::SigninForm).
    /// This method will fail if any of the following fields are not set:
    /// - [`username`](crate::types::builders::SigninFormBuilder::username)
    /// - [`password`](crate::types::builders::SigninFormBuilder::password)
    pub fn build(self) -> ::std::result::Result<crate::types::SigninForm, ::aws_smithy_types::error::operation::BuildError> {
        ::std::result::Result::Ok(
            crate::types::SigninForm {
                username: self.username
                    .ok_or_else(||
                        ::aws_smithy_types::error::operation::BuildError::missing_field("username", "username was not specified but it is required when building SigninForm")
                    )?
                ,
                password: self.password
                    .ok_or_else(||
                        ::aws_smithy_types::error::operation::BuildError::missing_field("password", "password was not specified but it is required when building SigninForm")
                    )?
                ,
            }
        )
    }
}

