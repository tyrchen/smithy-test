// Code generated by smithy-swift-codegen. DO NOT EDIT!

import ClientRuntime

/// Unauthorized error.
public struct UnauthorizedError: ClientRuntime.ModeledError, ClientRuntime.ServiceError, ClientRuntime.HTTPError, Swift.Error {

    public struct Properties {
        /// This member is required.
        public internal(set) var message: Swift.String? = nil
    }

    public internal(set) var properties = Properties()
    public static var typeName: Swift.String { "UnauthorizedError" }
    public static var fault: ErrorFault { .client }
    public static var isRetryable: Swift.Bool { false }
    public static var isThrottling: Swift.Bool { false }
    public internal(set) var httpResponse = HttpResponse()
    public internal(set) var message: Swift.String?
    public internal(set) var requestID: Swift.String?

    public init(
        message: Swift.String? = nil
    )
    {
        self.properties.message = message
    }
}
