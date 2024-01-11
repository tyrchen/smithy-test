use crate::{forbidden, AppState};
use aws_smithy_http_server::Extension;
use echo_server_sdk::{error, input, model::TodoItem, output};
use std::sync::Arc;
use tracing::info;

pub async fn echo_message(
    input: input::EchoMessageInput,
    Extension(_state): Extension<Arc<AppState>>,
) -> Result<output::EchoMessageOutput, error::EchoMessageError> {
    info!("echo: {:?}", input);
    let message = input.message;
    let output = output::EchoMessageOutput { message };
    Ok(output)
}

pub async fn signin(
    input: input::SigninInput,
    Extension(state): Extension<Arc<AppState>>,
) -> Result<output::SigninOutput, error::SigninError> {
    info!("signin: {:?}", input);
    let signer = &state.signer;
    let username = input.username;
    if input.password.len() < 8 {
        forbidden!("invalid password");
    }
    let token = signer.sign(username)?;
    Ok(output::SigninOutput { token })
}

pub async fn get_todo(
    input: input::GetTodoInput,
    Extension(_state): Extension<Arc<AppState>>,
) -> Result<output::GetTodoOutput, error::GetTodoError> {
    info!("get todo: {:?}", input);
    let todo = TodoItem {
        id: get_id(),
        title: "todo".to_string(),
        completed: false,
    };
    Ok(output::GetTodoOutput { todo })
}

pub async fn list_todos(
    input: input::ListTodosInput,
    Extension(_state): Extension<Arc<AppState>>,
) -> Result<output::ListTodosOutput, error::ListTodosError> {
    info!("list todos: {:?}", input);
    let todos = vec![
        TodoItem {
            id: get_id(),
            title: "todo 1".to_string(),
            completed: false,
        },
        TodoItem {
            id: get_id(),
            title: "todo 2".to_string(),
            completed: false,
        },
        TodoItem {
            id: get_id(),
            title: "todo 3".to_string(),
            completed: true,
        },
    ];
    Ok(output::ListTodosOutput {
        todos,
        next_token: None,
    })
}

pub async fn create_todo(
    input: input::CreateTodoInput,
    Extension(_state): Extension<Arc<AppState>>,
) -> Result<output::CreateTodoOutput, error::CreateTodoError> {
    info!("create todo: {:?}", input);

    Ok(output::CreateTodoOutput { id: get_id() })
}

pub async fn update_todo(
    input: input::UpdateTodoInput,
    Extension(_state): Extension<Arc<AppState>>,
) -> Result<output::UpdateTodoOutput, error::UpdateTodoError> {
    info!("update todo: {:?}", input);

    Ok(output::UpdateTodoOutput { rows_affected: 1 })
}

pub async fn delete_todo(
    input: input::DeleteTodoInput,
    Extension(_state): Extension<Arc<AppState>>,
) -> Result<output::DeleteTodoOutput, error::DeleteTodoError> {
    info!("delete todo: {:?}", input);

    Ok(output::DeleteTodoOutput { rows_affected: 1 })
}

pub async fn update_todo_status(
    input: input::UpdateTodoStatusInput,
    Extension(_state): Extension<Arc<AppState>>,
) -> Result<output::UpdateTodoStatusOutput, error::UpdateTodoStatusError> {
    info!("update todo status: {:?}", input);

    Ok(output::UpdateTodoStatusOutput { rows_affected: 1 })
}

fn get_id() -> String {
    uuid7::uuid7().to_string()
}
