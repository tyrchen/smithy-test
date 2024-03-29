$version: "2.0"

namespace com.example

/// Contains a todo item.
structure TodoItem {
    @required
    id: String
    @required
    title: String
    @required
    completed: Boolean
}

/// Contains a list of todo items.
list TodoList {
    member: TodoItem
}

/// Throttling error.
@error("client")
@retryable
@httpError(429)
structure ThrottlingError {
    @required
    message: String
}

/// Not found error.
@error("client")
@httpError(404)
structure NotFoundError {
    @required
    message: String
}

/// Conflict error.
@error("client")
@httpError(409)
structure ConflictError {
    @required
    message: String
}

/// Unauthorized error.
@error("client")
@httpError(401)
structure UnauthorizedError {
    @required
    message: String
}

/// Forbidden error.
@error("client")
@httpError(403)
structure ForbiddenError {
    @required
    message: String
}

/// Server error.
@error("server")
@httpError(500)
structure ServerError {
    @required
    code: ErrorCode
    @required
    message: String
}

enum ErrorCode {
    INFER = "infer",
    NETWORK = "network",
    DATABASE = "database",
    UNKNOWN = "unknown",
}
