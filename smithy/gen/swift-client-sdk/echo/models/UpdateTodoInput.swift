// Code generated by smithy-swift-codegen. DO NOT EDIT!

import ClientRuntime

public struct UpdateTodoInput: Swift.Equatable {
    /// This member is required.
    public var id: Swift.String?
    /// This member is required.
    public var title: Swift.String?

    public init(
        id: Swift.String? = nil,
        title: Swift.String? = nil
    )
    {
        self.id = id
        self.title = title
    }
}
