// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
pub fn ser_create_todo_output_output_output(
    value: &crate::output::CreateTodoOutput,
) -> Result<String, ::aws_smithy_types::error::operation::SerializationError> {
    let mut out = String::new();
    let mut object = ::aws_smithy_json::serialize::JsonObjectWriter::new(&mut out);
    crate::protocol_serde::shape_create_todo_output::ser_create_todo_output_output(
        &mut object,
        value,
    )?;
    object.finish();
    Ok(out)
}

pub fn ser_create_todo_output_output(
    #[allow(unused_variables)] object: &mut ::aws_smithy_json::serialize::JsonObjectWriter,
    #[allow(unused_variables)] input: &crate::output::CreateTodoOutput,
) -> Result<(), ::aws_smithy_types::error::operation::SerializationError> {
    Ok(())
}
