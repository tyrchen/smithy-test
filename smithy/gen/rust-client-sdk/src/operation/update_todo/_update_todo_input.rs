// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(missing_docs)] // documentation missing in model
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct UpdateTodoInput {
    #[allow(missing_docs)] // documentation missing in model
    pub id: ::std::option::Option<::std::string::String>,
    #[allow(missing_docs)] // documentation missing in model
    pub title: ::std::option::Option<::std::string::String>,
}
impl UpdateTodoInput {
    #[allow(missing_docs)] // documentation missing in model
    pub fn id(&self) -> ::std::option::Option<&str> {
        self.id.as_deref()
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn title(&self) -> ::std::option::Option<&str> {
        self.title.as_deref()
    }
}
impl UpdateTodoInput {
    /// Creates a new builder-style object to manufacture [`UpdateTodoInput`](crate::operation::update_todo::UpdateTodoInput).
    pub fn builder() -> crate::operation::update_todo::builders::UpdateTodoInputBuilder {
        crate::operation::update_todo::builders::UpdateTodoInputBuilder::default()
    }
}

/// A builder for [`UpdateTodoInput`](crate::operation::update_todo::UpdateTodoInput).
#[non_exhaustive]
#[derive(
    ::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug,
)]
pub struct UpdateTodoInputBuilder {
    pub(crate) id: ::std::option::Option<::std::string::String>,
    pub(crate) title: ::std::option::Option<::std::string::String>,
}
impl UpdateTodoInputBuilder {
    #[allow(missing_docs)] // documentation missing in model
    /// This field is required.
    pub fn id(mut self, input: impl ::std::convert::Into<::std::string::String>) -> Self {
        self.id = ::std::option::Option::Some(input.into());
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn set_id(mut self, input: ::std::option::Option<::std::string::String>) -> Self {
        self.id = input;
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn get_id(&self) -> &::std::option::Option<::std::string::String> {
        &self.id
    }
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
    /// Consumes the builder and constructs a [`UpdateTodoInput`](crate::operation::update_todo::UpdateTodoInput).
    pub fn build(
        self,
    ) -> ::std::result::Result<
        crate::operation::update_todo::UpdateTodoInput,
        ::aws_smithy_types::error::operation::BuildError,
    > {
        ::std::result::Result::Ok(crate::operation::update_todo::UpdateTodoInput {
            id: self.id,
            title: self.title,
        })
    }
}
