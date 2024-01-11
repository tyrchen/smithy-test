// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
impl super::Client {
    /// Constructs a fluent builder for the [`CreateTodo`](crate::operation::create_todo::builders::CreateTodoFluentBuilder) operation.
    ///
    /// - The fluent builder is configurable:
    ///   - [`title(impl Into<String>)`](crate::operation::create_todo::builders::CreateTodoFluentBuilder::title) / [`set_title(Option<String>)`](crate::operation::create_todo::builders::CreateTodoFluentBuilder::set_title):<br>required: **true**<br>(undocumented)<br>
    /// - On success, responds with [`CreateTodoOutput`](crate::operation::create_todo::CreateTodoOutput) with field(s):
    ///   - [`id(String)`](crate::operation::create_todo::CreateTodoOutput::id): (undocumented)
    /// - On failure, responds with [`SdkError<CreateTodoError>`](crate::operation::create_todo::CreateTodoError)
    pub fn create_todo(&self) -> crate::operation::create_todo::builders::CreateTodoFluentBuilder {
        crate::operation::create_todo::builders::CreateTodoFluentBuilder::new(self.handle.clone())
    }
}
