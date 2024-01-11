// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(missing_docs)] // documentation missing in model
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct CreateTodoInput {
    #[allow(missing_docs)] // documentation missing in model
    pub title: ::std::option::Option<::std::string::String>,
}
impl CreateTodoInput {
    #[allow(missing_docs)] // documentation missing in model
    pub fn title(&self) -> ::std::option::Option<&str> {
        self.title.as_deref()
    }
}
impl CreateTodoInput {
    /// Creates a new builder-style object to manufacture [`CreateTodoInput`](crate::operation::create_todo::CreateTodoInput).
    pub fn builder() -> crate::operation::create_todo::builders::CreateTodoInputBuilder {
        crate::operation::create_todo::builders::CreateTodoInputBuilder::default()
    }
}

/// A builder for [`CreateTodoInput`](crate::operation::create_todo::CreateTodoInput).
#[non_exhaustive]
#[derive(
    ::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug,
)]
pub struct CreateTodoInputBuilder {
    pub(crate) title: ::std::option::Option<::std::string::String>,
}
impl CreateTodoInputBuilder {
    #[allow(missing_docs)] // documentation missing in model
    /// This field is required.
    pub fn title(mut self, input: impl ::std::convert::Into<::std::string::String>) -> Self {
        self.title = ::std::option::Option::Some(input.into());
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn set_title(mut self, input: ::std::option::Option<::std::string::String>) -> Self {
        self.title = input;
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn get_title(&self) -> &::std::option::Option<::std::string::String> {
        &self.title
    }
    /// Consumes the builder and constructs a [`CreateTodoInput`](crate::operation::create_todo::CreateTodoInput).
    pub fn build(
        self,
    ) -> ::std::result::Result<
        crate::operation::create_todo::CreateTodoInput,
        ::aws_smithy_types::error::operation::BuildError,
    > {
        ::std::result::Result::Ok(crate::operation::create_todo::CreateTodoInput {
            title: self.title,
        })
    }
}