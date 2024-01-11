// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
impl super::Client {
    /// Constructs a fluent builder for the [`Signin`](crate::operation::signin::builders::SigninFluentBuilder) operation.
    ///
    /// - The fluent builder is configurable:
    ///   - [`username(impl Into<String>)`](crate::operation::signin::builders::SigninFluentBuilder::username) / [`set_username(Option<String>)`](crate::operation::signin::builders::SigninFluentBuilder::set_username):<br>required: **true**<br>(undocumented)<br>
    ///   - [`password(impl Into<String>)`](crate::operation::signin::builders::SigninFluentBuilder::password) / [`set_password(Option<String>)`](crate::operation::signin::builders::SigninFluentBuilder::set_password):<br>required: **true**<br>(undocumented)<br>
    /// - On success, responds with [`SigninOutput`](crate::operation::signin::SigninOutput) with field(s):
    ///   - [`token(String)`](crate::operation::signin::SigninOutput::token): (undocumented)
    /// - On failure, responds with [`SdkError<SigninError>`](crate::operation::signin::SigninError)
    pub fn signin(&self) -> crate::operation::signin::builders::SigninFluentBuilder {
        crate::operation::signin::builders::SigninFluentBuilder::new(self.handle.clone())
    }
}
