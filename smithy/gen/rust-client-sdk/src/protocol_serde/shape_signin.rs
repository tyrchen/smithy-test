// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
#[allow(clippy::unnecessary_wraps)]
pub fn de_signin_http_error(
    _response_status: u16,
    _response_headers: &::aws_smithy_runtime_api::http::Headers,
    _response_body: &[u8],
) -> std::result::Result<
    crate::operation::signin::SigninOutput,
    crate::operation::signin::SigninError,
> {
    #[allow(unused_mut)]
    let mut generic_builder = crate::protocol_serde::parse_http_error_metadata(
        _response_status,
        _response_headers,
        _response_body,
    )
    .map_err(crate::operation::signin::SigninError::unhandled)?;
    let generic = generic_builder.build();
    let error_code = match generic.code() {
        Some(code) => code,
        None => return Err(crate::operation::signin::SigninError::unhandled(generic)),
    };

    let _error_message = generic.message().map(|msg| msg.to_owned());
    Err(match error_code {
        "ValidationException" => crate::operation::signin::SigninError::ValidationError({
            #[allow(unused_mut)]
            let mut tmp = {
                #[allow(unused_mut)]
                let mut output = crate::types::error::builders::ValidationErrorBuilder::default();
                output = crate::protocol_serde::shape_validation_exception::de_validation_exception_json_err(_response_body, output).map_err(crate::operation::signin::SigninError::unhandled)?;
                let output = output.meta(generic);
                crate::serde_util::validation_exception_correct_errors(output)
                    .build()
                    .map_err(crate::operation::signin::SigninError::unhandled)?
            };
            tmp
        }),
        "UnauthorizedError" => crate::operation::signin::SigninError::UnauthorizedError({
            #[allow(unused_mut)]
            let mut tmp = {
                #[allow(unused_mut)]
                let mut output = crate::types::error::builders::UnauthorizedErrorBuilder::default();
                output = crate::protocol_serde::shape_unauthorized_error::de_unauthorized_error_json_err(_response_body, output).map_err(crate::operation::signin::SigninError::unhandled)?;
                let output = output.meta(generic);
                crate::serde_util::unauthorized_error_correct_errors(output)
                    .build()
                    .map_err(crate::operation::signin::SigninError::unhandled)?
            };
            tmp
        }),
        "ForbiddenError" => crate::operation::signin::SigninError::ForbiddenError({
            #[allow(unused_mut)]
            let mut tmp = {
                #[allow(unused_mut)]
                let mut output = crate::types::error::builders::ForbiddenErrorBuilder::default();
                output = crate::protocol_serde::shape_forbidden_error::de_forbidden_error_json_err(
                    _response_body,
                    output,
                )
                .map_err(crate::operation::signin::SigninError::unhandled)?;
                let output = output.meta(generic);
                crate::serde_util::forbidden_error_correct_errors(output)
                    .build()
                    .map_err(crate::operation::signin::SigninError::unhandled)?
            };
            tmp
        }),
        "ThrottlingError" => {
            crate::operation::signin::SigninError::ThrottlingError({
                #[allow(unused_mut)]
                let mut tmp = {
                    #[allow(unused_mut)]
                    let mut output =
                        crate::types::error::builders::ThrottlingErrorBuilder::default();
                    output = crate::protocol_serde::shape_throttling_error::de_throttling_error_json_err(_response_body, output).map_err(crate::operation::signin::SigninError::unhandled)?;
                    let output = output.meta(generic);
                    crate::serde_util::throttling_error_correct_errors(output)
                        .build()
                        .map_err(crate::operation::signin::SigninError::unhandled)?
                };
                tmp
            })
        }
        _ => crate::operation::signin::SigninError::generic(generic),
    })
}

#[allow(clippy::unnecessary_wraps)]
pub fn de_signin_http_response(
    _response_status: u16,
    _response_headers: &::aws_smithy_runtime_api::http::Headers,
    _response_body: &[u8],
) -> std::result::Result<
    crate::operation::signin::SigninOutput,
    crate::operation::signin::SigninError,
> {
    Ok({
        #[allow(unused_mut)]
        let mut output = crate::operation::signin::builders::SigninOutputBuilder::default();
        output = output.set_payload(
            crate::protocol_serde::shape_signin_output::de_payload_payload(_response_body)?,
        );
        crate::serde_util::signin_output_output_correct_errors(output)
            .build()
            .map_err(crate::operation::signin::SigninError::unhandled)?
    })
}