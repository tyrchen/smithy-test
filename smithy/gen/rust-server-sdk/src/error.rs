// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
/// Error type for the `EchoMessage` operation.
/// Each variant represents an error that can occur for the `EchoMessage` operation.
#[derive(::std::fmt::Debug)]
pub enum EchoMessageError {
    /// A standard error for input validation failures. This should be thrown by services when a member of the input structure falls outside of the modeled or documented constraints.
    ValidationException(crate::error::ValidationException),
}
impl ::std::fmt::Display for EchoMessageError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match &self {
            EchoMessageError::ValidationException(_inner) => _inner.fmt(f),
        }
    }
}
impl EchoMessageError {
    /// Returns `true` if the error kind is `EchoMessageError::ValidationException`.
    pub fn is_validation_exception(&self) -> bool {
        matches!(&self, EchoMessageError::ValidationException(_))
    }
    /// Returns the error name string by matching the correct variant.
    pub fn name(&self) -> &'static str {
        match &self {
            EchoMessageError::ValidationException(_inner) => _inner.name(),
        }
    }
}
impl ::std::error::Error for EchoMessageError {
    fn source(&self) -> std::option::Option<&(dyn ::std::error::Error + 'static)> {
        match &self {
            EchoMessageError::ValidationException(_inner) => Some(_inner),
        }
    }
}
impl ::std::convert::From<crate::error::ValidationException> for crate::error::EchoMessageError {
    fn from(variant: crate::error::ValidationException) -> crate::error::EchoMessageError {
        Self::ValidationException(variant)
    }
}

/// A standard error for input validation failures. This should be thrown by services when a member of the input structure falls outside of the modeled or documented constraints.
#[derive(
    ::std::clone::Clone, ::std::cmp::Eq, ::std::cmp::PartialEq, ::std::fmt::Debug, ::std::hash::Hash,
)]
pub struct ValidationException {
    /// A summary of the validation failure.
    pub message: ::std::string::String,
    /// A list of specific failures encountered while validating the input. A member can appear in this list more than once if it failed to satisfy multiple constraints.
    pub field_list: ::std::option::Option<::std::vec::Vec<crate::model::ValidationExceptionField>>,
}
impl ValidationException {
    /// A list of specific failures encountered while validating the input. A member can appear in this list more than once if it failed to satisfy multiple constraints.
    pub fn field_list(&self) -> ::std::option::Option<&[crate::model::ValidationExceptionField]> {
        self.field_list.as_deref()
    }
}
impl ValidationException {
    /// Returns the error message.
    pub fn message(&self) -> &str {
        &self.message
    }
    #[doc(hidden)]
    /// Returns the error name.
    pub fn name(&self) -> &'static str {
        "ValidationException"
    }
}
impl ::std::fmt::Display for ValidationException {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        ::std::write!(f, "ValidationException")?;
        {
            ::std::write!(f, ": {}", &self.message)?;
        }
        Ok(())
    }
}
impl ::std::error::Error for ValidationException {}
impl ValidationException {
    /// Creates a new builder-style object to manufacture [`ValidationException`](crate::error::ValidationException).
    pub fn builder() -> crate::error::validation_exception::Builder {
        crate::error::validation_exception::Builder::default()
    }
}
/// See [`ValidationException`](crate::error::ValidationException).
///
pub mod validation_exception {

    #[derive(::std::cmp::PartialEq, ::std::fmt::Debug)]
    /// Holds one variant for each of the ways the builder can fail.
    #[non_exhaustive]
    #[allow(clippy::enum_variant_names)]
    pub enum ConstraintViolation {
        /// `message` was not provided but it is required when building `ValidationException`.
        MissingMessage,
    }
    impl ::std::fmt::Display for ConstraintViolation {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            match self {
                ConstraintViolation::MissingMessage => write!(f, "`message` was not provided but it is required when building `ValidationException`"),
            }
        }
    }
    impl ::std::error::Error for ConstraintViolation {}
    impl ::std::convert::TryFrom<Builder> for crate::error::ValidationException {
        type Error = ConstraintViolation;

        fn try_from(builder: Builder) -> Result<Self, Self::Error> {
            builder.build()
        }
    }
    /// A builder for [`ValidationException`](crate::error::ValidationException).
    #[derive(::std::clone::Clone, ::std::default::Default, ::std::fmt::Debug)]
    pub struct Builder {
        pub(crate) message: ::std::option::Option<::std::string::String>,
        pub(crate) field_list:
            ::std::option::Option<::std::vec::Vec<crate::model::ValidationExceptionField>>,
    }
    impl Builder {
        /// A summary of the validation failure.
        pub fn message(mut self, input: ::std::string::String) -> Self {
            self.message = Some(input);
            self
        }
        /// A list of specific failures encountered while validating the input. A member can appear in this list more than once if it failed to satisfy multiple constraints.
        pub fn field_list(
            mut self,
            input: ::std::option::Option<::std::vec::Vec<crate::model::ValidationExceptionField>>,
        ) -> Self {
            self.field_list = input;
            self
        }
        /// Consumes the builder and constructs a [`ValidationException`](crate::error::ValidationException).
        ///
        /// The builder fails to construct a [`ValidationException`](crate::error::ValidationException) if a [`ConstraintViolation`] occurs.
        ///
        pub fn build(self) -> Result<crate::error::ValidationException, ConstraintViolation> {
            self.build_enforcing_all_constraints()
        }
        fn build_enforcing_all_constraints(
            self,
        ) -> Result<crate::error::ValidationException, ConstraintViolation> {
            Ok(crate::error::ValidationException {
                message: self.message.ok_or(ConstraintViolation::MissingMessage)?,
                field_list: self.field_list,
            })
        }
    }
}