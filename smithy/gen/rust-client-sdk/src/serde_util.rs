// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
pub(crate) fn conflict_error_correct_errors(
    mut builder: crate::types::error::builders::ConflictErrorBuilder,
) -> crate::types::error::builders::ConflictErrorBuilder {
    if builder.message.is_none() {
        builder.message = Some(Default::default())
    }
    builder
}

pub(crate) fn validation_exception_correct_errors(
    mut builder: crate::types::error::builders::ValidationErrorBuilder,
) -> crate::types::error::builders::ValidationErrorBuilder {
    if builder.message.is_none() {
        builder.message = Some(Default::default())
    }
    builder
}

pub(crate) fn create_todo_output_output_correct_errors(
    mut builder: crate::operation::create_todo::builders::CreateTodoOutputBuilder,
) -> crate::operation::create_todo::builders::CreateTodoOutputBuilder {
    if builder.id.is_none() {
        builder.id = Some(Default::default())
    }
    builder
}

pub(crate) fn not_found_error_correct_errors(
    mut builder: crate::types::error::builders::NotFoundErrorBuilder,
) -> crate::types::error::builders::NotFoundErrorBuilder {
    if builder.message.is_none() {
        builder.message = Some(Default::default())
    }
    builder
}

pub(crate) fn delete_todo_output_output_correct_errors(
    mut builder: crate::operation::delete_todo::builders::DeleteTodoOutputBuilder,
) -> crate::operation::delete_todo::builders::DeleteTodoOutputBuilder {
    if builder.rows_affected.is_none() {
        builder.rows_affected = Some(Default::default())
    }
    builder
}

pub(crate) fn echo_message_output_output_correct_errors(
    mut builder: crate::operation::echo_message::builders::EchoMessageOutputBuilder,
) -> crate::operation::echo_message::builders::EchoMessageOutputBuilder {
    if builder.message.is_none() {
        builder.message = Some(Default::default())
    }
    builder
}

pub(crate) fn get_todo_output_output_correct_errors(
    mut builder: crate::operation::get_todo::builders::GetTodoOutputBuilder,
) -> crate::operation::get_todo::builders::GetTodoOutputBuilder {
    if builder.todo.is_none() {
        builder.todo = {
            let builder = crate::types::builders::TodoItemBuilder::default();
            crate::serde_util::todo_item_correct_errors(builder)
                .build()
                .ok()
        }
    }
    builder
}

pub(crate) fn list_todos_output_output_correct_errors(
    mut builder: crate::operation::list_todos::builders::ListTodosOutputBuilder,
) -> crate::operation::list_todos::builders::ListTodosOutputBuilder {
    if builder.todos.is_none() {
        builder.todos = Some(Default::default())
    }
    builder
}

pub(crate) fn unauthorized_error_correct_errors(
    mut builder: crate::types::error::builders::UnauthorizedErrorBuilder,
) -> crate::types::error::builders::UnauthorizedErrorBuilder {
    if builder.message.is_none() {
        builder.message = Some(Default::default())
    }
    builder
}

pub(crate) fn forbidden_error_correct_errors(
    mut builder: crate::types::error::builders::ForbiddenErrorBuilder,
) -> crate::types::error::builders::ForbiddenErrorBuilder {
    if builder.message.is_none() {
        builder.message = Some(Default::default())
    }
    builder
}

pub(crate) fn throttling_error_correct_errors(
    mut builder: crate::types::error::builders::ThrottlingErrorBuilder,
) -> crate::types::error::builders::ThrottlingErrorBuilder {
    if builder.message.is_none() {
        builder.message = Some(Default::default())
    }
    builder
}

pub(crate) fn signin_output_output_correct_errors(
    mut builder: crate::operation::signin::builders::SigninOutputBuilder,
) -> crate::operation::signin::builders::SigninOutputBuilder {
    if builder.token.is_none() {
        builder.token = Some(Default::default())
    }
    builder
}

pub(crate) fn update_todo_output_output_correct_errors(
    mut builder: crate::operation::update_todo::builders::UpdateTodoOutputBuilder,
) -> crate::operation::update_todo::builders::UpdateTodoOutputBuilder {
    if builder.rows_affected.is_none() {
        builder.rows_affected = Some(Default::default())
    }
    builder
}

pub(crate) fn update_todo_status_output_output_correct_errors(
    mut builder: crate::operation::update_todo_status::builders::UpdateTodoStatusOutputBuilder,
) -> crate::operation::update_todo_status::builders::UpdateTodoStatusOutputBuilder {
    if builder.rows_affected.is_none() {
        builder.rows_affected = Some(Default::default())
    }
    builder
}

pub(crate) fn todo_item_correct_errors(
    mut builder: crate::types::builders::TodoItemBuilder,
) -> crate::types::builders::TodoItemBuilder {
    if builder.id.is_none() {
        builder.id = Some(Default::default())
    }
    if builder.title.is_none() {
        builder.title = Some(Default::default())
    }
    if builder.completed.is_none() {
        builder.completed = Some(Default::default())
    }
    builder
}

pub(crate) fn validation_exception_field_correct_errors(
    mut builder: crate::types::builders::ValidationExceptionFieldBuilder,
) -> crate::types::builders::ValidationExceptionFieldBuilder {
    if builder.path.is_none() {
        builder.path = Some(Default::default())
    }
    if builder.message.is_none() {
        builder.message = Some(Default::default())
    }
    builder
}
