// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(missing_docs)] // documentation missing in model
#[non_exhaustive]
#[derive(::std::clone::Clone, ::std::cmp::PartialEq, ::std::fmt::Debug)]
pub struct UpdateTodoOutput {
    #[allow(missing_docs)] // documentation missing in model
    pub rows_affected: i32,
}
impl UpdateTodoOutput {
    #[allow(missing_docs)] // documentation missing in model
    pub fn rows_affected(&self) -> i32 {
        self.rows_affected
    }
}
impl UpdateTodoOutput {
    /// Creates a new builder-style object to manufacture [`UpdateTodoOutput`](crate::operation::update_todo::UpdateTodoOutput).
    pub fn builder() -> crate::operation::update_todo::builders::UpdateTodoOutputBuilder {
        crate::operation::update_todo::builders::UpdateTodoOutputBuilder::default()
    }
}

/// A builder for [`UpdateTodoOutput`](crate::operation::update_todo::UpdateTodoOutput).
#[non_exhaustive]
#[derive(
    ::std::clone::Clone, ::std::cmp::PartialEq, ::std::default::Default, ::std::fmt::Debug,
)]
pub struct UpdateTodoOutputBuilder {
    pub(crate) rows_affected: ::std::option::Option<i32>,
}
impl UpdateTodoOutputBuilder {
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
    /// Consumes the builder and constructs a [`UpdateTodoOutput`](crate::operation::update_todo::UpdateTodoOutput).
    /// This method will fail if any of the following fields are not set:
    /// - [`rows_affected`](crate::operation::update_todo::builders::UpdateTodoOutputBuilder::rows_affected)
    pub fn build(
        self,
    ) -> ::std::result::Result<
        crate::operation::update_todo::UpdateTodoOutput,
        ::aws_smithy_types::error::operation::BuildError,
    > {
        ::std::result::Result::Ok(
            crate::operation::update_todo::UpdateTodoOutput {
                rows_affected: self.rows_affected
                    .ok_or_else(||
                        ::aws_smithy_types::error::operation::BuildError::missing_field("rows_affected", "rows_affected was not specified but it is required when building UpdateTodoOutput")
                    )?
                ,
            }
        )
    }
}
