// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
pub fn ser_todo_item(
    object: &mut ::aws_smithy_json::serialize::JsonObjectWriter,
    input: &crate::model::TodoItem,
) -> Result<(), ::aws_smithy_types::error::operation::SerializationError> {
    {
        object.key("id").string(input.id.as_str());
    }
    {
        object.key("title").string(input.title.as_str());
    }
    {
        object.key("completed").boolean(input.completed);
    }
    Ok(())
}
