// Code generated by smithy-swift-codegen. DO NOT EDIT!

import ClientRuntime

/// Echoes input
public protocol EchoServiceClientProtocol {
    /// Performs the `EchoMessage` operation on the `EchoService` service.
    ///
    ///
    /// - Parameter EchoMessageInput : [no documentation found]
    ///
    /// - Returns: `EchoMessageOutput` : [no documentation found]
    ///
    /// - Throws: One of the exceptions listed below __Possible Exceptions__.
    ///
    /// __Possible Exceptions:__
    /// - `ValidationException` : A standard error for input validation failures. This should be thrown by services when a member of the input structure falls outside of the modeled or documented constraints.
    func echoMessage(input: EchoMessageInput) async throws -> EchoMessageOutput
    /// Performs the `Signin` operation on the `EchoService` service.
    ///
    /// Signin to get a token.
    ///
    /// - Parameter SigninInput : [no documentation found]
    ///
    /// - Returns: `SigninOutput` : [no documentation found]
    ///
    /// - Throws: One of the exceptions listed below __Possible Exceptions__.
    ///
    /// __Possible Exceptions:__
    /// - `ValidationException` : A standard error for input validation failures. This should be thrown by services when a member of the input structure falls outside of the modeled or documented constraints.
    /// - `UnauthorizedError` : Unauthorized error.
    /// - `ForbiddenError` : Forbidden error.
    /// - `ThrottlingError` : Throttling error.
    func signin(input: SigninInput) async throws -> SigninOutput
}

public enum EchoServiceClientTypes {}
