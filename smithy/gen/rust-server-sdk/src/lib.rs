#![allow(deprecated)]
#![allow(clippy::module_inception)]
#![allow(clippy::upper_case_acronyms)]
#![allow(clippy::large_enum_variant)]
#![allow(clippy::wrong_self_convention)]
#![allow(clippy::should_implement_trait)]
#![allow(clippy::disallowed_names)]
#![allow(clippy::vec_init_then_push)]
#![allow(clippy::type_complexity)]
#![allow(clippy::needless_return)]
#![allow(clippy::derive_partial_eq_without_eq)]
#![allow(clippy::result_large_err)]
#![allow(rustdoc::bare_urls)]

//! Echoes input

// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
//! A fast and customizable Rust implementation of the EchoService Smithy service.
//!
//! # Using EchoService
//!
//! The primary entrypoint is [`EchoService`]: it satisfies the [`Service<http::Request, Response = http::Response>`](::tower::Service)
//! trait and therefore can be handed to a [`hyper` server](https://github.com/hyperium/hyper) via [`EchoService::into_make_service`] or used in Lambda via [`LambdaHandler`](::aws_smithy_http_server::routing::LambdaHandler).
//! The [`crate::input`], [`crate::output`], and [`crate::error`]
//! modules provide the types used in each operation.
//!
//! ### Running on Hyper
//!
//! ```rust,no_run
//! # use std::net::SocketAddr;
//! # async fn dummy() {
//! use echo_server_sdk::{EchoService, EchoServiceConfig};
//!
//! # let app = EchoService::builder(
//! #     EchoServiceConfig::builder()
//! #         .build()
//! # ).build_unchecked();
//! let server = app.into_make_service();
//! let bind: SocketAddr = "127.0.0.1:6969".parse()
//!     .expect("unable to parse the server bind address and port");
//! ::hyper::Server::bind(&bind).serve(server).await.unwrap();
//! # }
//! ```
//!
//! ### Running on Lambda
//!
//! This requires the `aws-lambda` feature flag to be passed to the [`::aws_smithy_http_server`] crate.
//!
//! ```rust,ignore
//! use ::aws_smithy_http_server::routing::LambdaHandler;
//! use echo_server_sdk::EchoService;
//!
//! # async fn dummy() {
//! # let app = EchoService::builder(
//! #     EchoServiceConfig::builder()
//! #         .build()
//! # ).build_unchecked();
//! let handler = LambdaHandler::new(app);
//! lambda_http::run(handler).await.unwrap();
//! # }
//! ```
//!
//! # Building the EchoService
//!
//! To construct [`EchoService`] we use [`EchoServiceBuilder`] returned by [`EchoService::builder`].
//!
//! ## Plugins
//!
//! The [`EchoService::builder`] method, returning [`EchoServiceBuilder`],
//! accepts a config object on which plugins can be registered.
//! Plugins allow you to build middleware which is aware of the operation it is being applied to.
//!
//! ```rust,no_run
//! # use ::aws_smithy_http_server::plugin::IdentityPlugin as LoggingPlugin;
//! # use ::aws_smithy_http_server::plugin::IdentityPlugin as MetricsPlugin;
//! # use ::hyper::Body;
//! use ::aws_smithy_http_server::plugin::HttpPlugins;
//! use echo_server_sdk::{EchoService, EchoServiceConfig, EchoServiceBuilder};
//!
//! let http_plugins = HttpPlugins::new()
//!         .push(LoggingPlugin)
//!         .push(MetricsPlugin);
//! let config = EchoServiceConfig::builder().build();
//! let builder: EchoServiceBuilder<Body, _, _, _> = EchoService::builder(config);
//! ```
//!
//! Check out [`::aws_smithy_http_server::plugin`] to learn more about plugins.
//!
//! ## Handlers
//!
//! [`EchoServiceBuilder`] provides a setter method for each operation in your Smithy model. The setter methods expect an async function as input, matching the signature for the corresponding operation in your Smithy model.
//! We call these async functions **handlers**. This is where your application business logic lives.
//!
//! Every handler must take an `Input`, and optional [`extractor arguments`](::aws_smithy_http_server::request), while returning:
//!
//! * A `Result<Output, Error>` if your operation has modeled errors, or
//! * An `Output` otherwise.
//!
//! ```rust,no_run
//! # struct Input;
//! # struct Output;
//! # struct Error;
//! async fn infallible_handler(input: Input) -> Output { todo!() }
//!
//! async fn fallible_handler(input: Input) -> Result<Output, Error> { todo!() }
//! ```
//!
//! Handlers can accept up to 8 extractors:
//!
//! ```rust,no_run
//! # struct Input;
//! # struct Output;
//! # struct Error;
//! # struct State;
//! # use std::net::SocketAddr;
//! use ::aws_smithy_http_server::request::{extension::Extension, connect_info::ConnectInfo};
//!
//! async fn handler_with_no_extensions(input: Input) -> Output {
//!     todo!()
//! }
//!
//! async fn handler_with_one_extractor(input: Input, ext: Extension<State>) -> Output {
//!     todo!()
//! }
//!
//! async fn handler_with_two_extractors(
//!     input: Input,
//!     ext0: Extension<State>,
//!     ext1: ConnectInfo<SocketAddr>,
//! ) -> Output {
//!     todo!()
//! }
//! ```
//!
//! See the [`operation module`](::aws_smithy_http_server::operation) for information on precisely what constitutes a handler.
//!
//! ## Build
//!
//! You can convert [`EchoServiceBuilder`] into [`EchoService`] using either [`EchoServiceBuilder::build`] or [`EchoServiceBuilder::build_unchecked`].
//!
//! [`EchoServiceBuilder::build`] requires you to provide a handler for every single operation in your Smithy model. It will return an error if that is not the case.
//!
//! [`EchoServiceBuilder::build_unchecked`], instead, does not require exhaustiveness. The server will automatically return 500 Internal Server Error to all requests for operations that do not have a registered handler.
//! [`EchoServiceBuilder::build_unchecked`] is particularly useful if you are deploying your Smithy service as a collection of Lambda functions, where each Lambda is only responsible for a subset of the operations in the Smithy service (or even a single one!).
//!
//! # Example
//!
//! ```rust,no_run
//! # use std::net::SocketAddr;
//! use echo_server_sdk::{EchoService, EchoServiceConfig};
//!
//! #[::tokio::main]
//! pub async fn main() {
//!    let config = EchoServiceConfig::builder().build();
//!    let app = EchoService::builder(config)
//!        .echo_message(echo_message)
//!        .signin(signin)
//!        .build()
//!        .expect("failed to build an instance of EchoService");
//!
//!    let bind: SocketAddr = "127.0.0.1:6969".parse()
//!        .expect("unable to parse the server bind address and port");
//!    let server = ::hyper::Server::bind(&bind).serve(app.into_make_service());
//!    # let server = async { Ok::<_, ()>(()) };
//!
//!    // Run your service!
//!    if let Err(err) = server.await {
//!        eprintln!("server error: {:?}", err);
//!    }
//! }
//!
//! use echo_server_sdk::{input, output, error};
//!
//! async fn echo_message(input: input::EchoMessageInput) -> Result<output::EchoMessageOutput, error::EchoMessageError> {
//!     todo!()
//! }
//!
//! async fn signin(input: input::SigninInput) -> Result<output::SigninOutput, error::SigninError> {
//!     todo!()
//! }
//!
//! ```
//!
//! [`serve`]: https://docs.rs/hyper/0.14.16/hyper/server/struct.Builder.html#method.serve
//! [`tower::make::MakeService`]: https://docs.rs/tower/latest/tower/make/trait.MakeService.html
//! [HTTP binding traits]: https://smithy.io/2.0/spec/http-bindings.html
//! [operations]: https://smithy.io/2.0/spec/service-types.html#operation
//! [hyper server]: https://docs.rs/hyper/latest/hyper/server/index.html
//! [Service]: https://docs.rs/tower-service/latest/tower_service/trait.Service.html
pub use crate::service::{
    EchoService, EchoServiceBuilder, EchoServiceConfig, EchoServiceConfigBuilder,
    MissingOperationsError,
};

/// Crate version number.
pub static PKG_VERSION: &str = env!("CARGO_PKG_VERSION");

/// All error types that operations can return. Documentation on these types is copied from the model.
pub mod error;

/// Input structures for operations. Documentation on these types is copied from the model.
pub mod input;

/// Data structures used by operation inputs/outputs. Documentation on these types is copied from the model.
pub mod model;

/// All operations that this crate can perform.
pub mod operation;

/// A collection of types representing each operation defined in the service closure.
///
/// The [plugin system](::aws_smithy_http_server::plugin) makes use of these
/// [zero-sized types](https://doc.rust-lang.org/nomicon/exotic-sizes.html#zero-sized-types-zsts) (ZSTs) to
/// parameterize [`Plugin`](::aws_smithy_http_server::plugin::Plugin) implementations. Their traits, such as
/// [`OperationShape`](::aws_smithy_http_server::operation::OperationShape), can be used to provide
/// operation specific information to the [`Layer`](::tower::Layer) being applied.
pub mod operation_shape;

/// Output structures for operations. Documentation on these types is copied from the model.
pub mod output;

/// Contains the types that are re-exported from the `aws-smithy-http-server` crate.
pub mod server;

mod service;

/// Data primitives referenced by other data types.
pub mod types;

/// Constrained types for constrained shapes.
mod constrained;

pub(crate) mod protocol_serde;
