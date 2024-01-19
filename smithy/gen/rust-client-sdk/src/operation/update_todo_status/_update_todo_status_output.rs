// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(missing_docs)] // documentation missing in model
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct UpdateTodoStatusOutput {
    #[allow(missing_docs)] // documentation missing in model
    pub rows_affected: i32,
}
impl UpdateTodoStatusOutput {
    #[allow(missing_docs)] // documentation missing in model
    pub fn rows_affected(&self) -> i32 {
        self.rows_affected
    }
}
impl UpdateTodoStatusOutput {
    /// Creates a new builder-style object to manufacture [`UpdateTodoStatusOutput`](crate::operation::update_todo_status::UpdateTodoStatusOutput).
    pub fn builder() -> crate::operation::update_todo_status::builders::UpdateTodoStatusOutputBuilder
    {
        crate::operation::update_todo_status::builders::UpdateTodoStatusOutputBuilder::default()
    }
}

/// A builder for [`UpdateTodoStatusOutput`](crate::operation::update_todo_status::UpdateTodoStatusOutput).
#[non_exhaustive]
#[derive(
    ::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug,
)]
pub struct UpdateTodoStatusOutputBuilder {
    pub(crate) rows_affected: ::std::option::Option<i32>,
}
impl UpdateTodoStatusOutputBuilder {
    #[allow(missing_docs)] // documentation missing in model
    /// This field is required.
    pub fn rows_affected(mut self, input: i32) -> Self {
        self.rows_affected = ::std::option::Option::Some(input);
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn set_rows_affected(mut self, input: ::std::option::Option<i32>) -> Self {
        self.rows_affected = input;
        self
    }
    #[allow(missing_docs)] // documentation missing in model
    pub fn get_rows_affected(&self) -> &::std::option::Option<i32> {
        &self.rows_affected
    }
    /// Consumes the builder and constructs a [`UpdateTodoStatusOutput`](crate::operation::update_todo_status::UpdateTodoStatusOutput).
    /// This method will fail if any of the following fields are not set:
    /// - [`rows_affected`](crate::operation::update_todo_status::builders::UpdateTodoStatusOutputBuilder::rows_affected)
    pub fn build(
        self,
    ) -> ::std::result::Result<
        crate::operation::update_todo_status::UpdateTodoStatusOutput,
        ::aws_smithy_types::error::operation::BuildError,
    > {
        ::std::result::Result::Ok(
            crate::operation::update_todo_status::UpdateTodoStatusOutput {
                rows_affected: self.rows_affected
                    .ok_or_else(||
                        ::aws_smithy_types::error::operation::BuildError::missing_field("rows_affected", "rows_affected was not specified but it is required when building UpdateTodoStatusOutput")
                    )?
                ,
            }
        )
    }
}