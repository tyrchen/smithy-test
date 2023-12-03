// Code generated by smithy-swift-codegen. DO NOT EDIT!

import ClientRuntime

extension EchoServiceClientTypes {
    /// Describes one specific validation failure for an input member.
    public struct ValidationExceptionField: Swift.Equatable {
        /// A detailed description of the validation failure.
        /// This member is required.
        public var message: Swift.String?
        /// A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
        /// This member is required.
        public var path: Swift.String?

        public init(
            message: Swift.String? = nil,
            path: Swift.String? = nil
        )
        {
            self.message = message
            self.path = path
        }
    }

}