// Code generated by smithy-swift-codegen. DO NOT EDIT!

import ClientRuntime

public struct ListTodosInput: Swift.Equatable {
    public var nextToken: Swift.String?
    public var size: Swift.Int?

    public init(
        nextToken: Swift.String? = nil,
        size: Swift.Int? = nil
    )
    {
        self.nextToken = nextToken
        self.size = size
    }
}
