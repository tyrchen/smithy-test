// Code generated by smithy-swift-codegen. DO NOT EDIT!

import ClientRuntime

/// A standard error for input validation failures. This should be thrown by services when a member of the input structure falls outside of the modeled or documented constraints.
public struct ValidationException: ClientRuntime.ModeledError, ClientRuntime.ServiceError, ClientRuntime.HTTPError, Swift.Error {

    public struct Properties {
        /// A list of specific failures encountered while validating the input. A member can appear in this list more than once if it failed to satisfy multiple constraints.
        public internal(set) var fieldList: [EchoServiceClientTypes.ValidationExceptionField]? = nil
        /// A summary of the validation failure.
        /// This member is required.
        public internal(set) var message: Swift.String? = nil
    }

    public internal(set) var properties = Properties()
    public static var typeName: Swift.String { "ValidationException" }
    public static var fault: ErrorFault { .client }
    public static var isRetryable: Swift.Bool { false }
    public static var isThrottling: Swift.Bool { false }
    public internal(set) var httpResponse = HttpResponse()
    public internal(set) var message: Swift.String?
    public internal(set) var requestID: Swift.String?

    public init(
        fieldList: [EchoServiceClientTypes.ValidationExceptionField]? = nil,
        message: Swift.String? = nil
    )
    {
        self.properties.fieldList = fieldList
        self.properties.message = message
    }
}
