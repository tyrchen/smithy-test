$version: "2.0"

namespace com.example

use aws.protocols#restJson1
use smithy.framework#ValidationException

/// Echoes input
@restJson1
@httpBearerAuth
service EchoService {
    version: "2023-12-03"
    resources: [Todo]
    operations: [EchoMessage, Signin]
}

@http(uri: "/echo", method: "POST")
@auth([])
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
