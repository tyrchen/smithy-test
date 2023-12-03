// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
impl super::Client {
    /// Constructs a fluent builder for the [`Signin`](crate::operation::signin::builders::SigninFluentBuilder) operation.
    ///
    /// - The fluent builder is configurable:
    ///   - [`payload(SigninForm)`](crate::operation::signin::builders::SigninFluentBuilder::payload) / [`set_payload(Option<SigninForm>)`](crate::operation::signin::builders::SigninFluentBuilder::set_payload):<br>required: **true**<br>Contains username and password. Currently any username and password is accepted.<br>
    /// - On success, responds with [`SigninOutput`](crate::operation::signin::SigninOutput) with field(s):
    ///   - [`payload(SigninToken)`](crate::operation::signin::SigninOutput::payload): Contains a bearer token for authentication.
    /// - On failure, responds with [`SdkError<SigninError>`](crate::operation::signin::SigninError)
    pub fn signin(&self) -> crate::operation::signin::builders::SigninFluentBuilder {
        crate::operation::signin::builders::SigninFluentBuilder::new(self.handle.clone())
    }
}
