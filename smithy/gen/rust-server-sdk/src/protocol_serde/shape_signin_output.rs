// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
pub fn ser_payload_http_payload(
    payload: &crate::model::SigninToken,
) -> Result<::std::vec::Vec<u8>, ::aws_smithy_types::error::operation::BuildError> {
    Ok(crate::protocol_serde::shape_signin_output::ser_payload_payload(payload)?)
}

pub fn ser_payload_payload(
    input: &crate::model::SigninToken,
) -> std::result::Result<
    ::std::vec::Vec<u8>,
    ::aws_smithy_types::error::operation::SerializationError,
> {
    let mut out = String::new();
    let mut object = ::aws_smithy_json::serialize::JsonObjectWriter::new(&mut out);
    crate::protocol_serde::shape_signin_token::ser_signin_token(&mut object, input)?;
    object.finish();
    Ok(out.into_bytes())
}