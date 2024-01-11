// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
pub fn ser_conflict_error_error(
    value: &crate::error::ConflictError,
) -> Result<String, ::aws_smithy_types::error::operation::SerializationError> {
    let mut out = String::new();
    let mut object = ::aws_smithy_json::serialize::JsonObjectWriter::new(&mut out);
    crate::protocol_serde::shape_conflict_error::ser_conflict_error(&mut object, value)?;
    object.finish();
    Ok(out)
}

pub fn ser_conflict_error(
    object: &mut ::aws_smithy_json::serialize::JsonObjectWriter,
    input: &crate::error::ConflictError,
) -> Result<(), ::aws_smithy_types::error::operation::SerializationError> {
    {
        object.key("message").string(input.message.as_str());
    }
    Ok(())
}
