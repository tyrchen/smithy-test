// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
pub(crate) fn validation_exception_correct_errors(
    mut builder: crate::types::error::builders::ValidationErrorBuilder,
) -> crate::types::error::builders::ValidationErrorBuilder {
    if builder.message.is_none() {
        builder.message = Some(Default::default())
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
    if builder.payload.is_none() {
        builder.payload = {
            let builder = crate::types::builders::SigninTokenBuilder::default();
            crate::serde_util::signin_token_correct_errors(builder)
                .build()
                .ok()
        }
    }
    builder
}

pub(crate) fn signin_token_correct_errors(
    mut builder: crate::types::builders::SigninTokenBuilder,
) -> crate::types::builders::SigninTokenBuilder {
    if builder.token.is_none() {
        builder.token = Some(Default::default())
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
