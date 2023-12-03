use crate::{forbidden, AppState};
use aws_smithy_http_server::Extension;
use echo_server_sdk::{error, input, model::SigninToken, output};
use std::sync::Arc;
use tracing::info;

pub async fn echo_message(
    input: input::EchoMessageInput,
    Extension(state): Extension<Arc<AppState>>,
) -> Result<output::EchoMessageOutput, error::EchoMessageError> {
    info!("state: {:?}", state);
    let message = input.message;
    let output = output::EchoMessageOutput { message };
    Ok(output)
}

pub async fn signin(
    input: input::SigninInput,
    Extension(state): Extension<Arc<AppState>>,
) -> Result<output::SigninOutput, error::SigninError> {
    info!("input: {:?}", input);
    let signer = &state.signer;
    let username = input.payload.username;
    if input.payload.password.len() < 8 {
        forbidden!("invalid password");
    }
    let token = signer.sign(username)?;
    Ok(output::SigninOutput {
        payload: SigninToken { token },
    })
}
