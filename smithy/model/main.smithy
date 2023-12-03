$version: "2.0"

namespace com.example

use aws.protocols#restJson1
use smithy.framework#ValidationException

/// Echoes input
@restJson1
@httpBearerAuth
service EchoService {
    version: "2023-12-03"
    operations: [EchoMessage, Signin]
}

@http(uri: "/echo", method: "POST")
operation EchoMessage {
    input := {
        @required
        @httpHeader("x-echo-message")
        message: String
    }
    output := {
        @required
        message: String
    }
    errors: [ValidationException]
}


/// Signin to get a token.
@http(uri: "/signin", method: "POST")
@auth([])
operation Signin {
    input := {
        @required
        @httpPayload
        payload: SigninForm
    }
    output := {
        @required
        @httpPayload
        payload: SigninToken
    }
    errors: [ValidationException, UnauthorizedError, ForbiddenError, ThrottlingError]
}

/// Contains username and password. Currently any username and password is accepted.
structure SigninForm {
    @required
    username: String
    @required
    password: String
}

/// Contains a bearer token for authentication.
structure SigninToken {
    @required
    token: String
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
