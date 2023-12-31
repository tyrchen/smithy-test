// Code generated by smithy-swift-codegen. DO NOT EDIT!

import ClientRuntime

extension EchoServiceClientTypes {
    /// Contains username and password. Currently any username and password is accepted.
    public struct SigninForm: Swift.Equatable {
        /// This member is required.
        public var password: Swift.String?
        /// This member is required.
        public var username: Swift.String?

        public init(
            password: Swift.String? = nil,
            username: Swift.String? = nil
        )
        {
            self.password = password
            self.username = username
        }
    }

}
