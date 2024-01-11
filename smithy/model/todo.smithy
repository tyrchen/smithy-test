
$version: "2.0"

namespace com.example

use smithy.framework#ValidationException

resource Todo {
    identifiers: { id: String }
    read: GetTodo
    list: ListTodos
    create: CreateTodo
    update: UpdateTodo
    delete: DeleteTodo
    operations: [UpdateTodoStatus]
}

/// Get a todo item.
@readonly
@http(uri: "/todos/{id}", method: "GET")
operation GetTodo {
    input := {
        @required
        @httpLabel
        id: String
    }
    output := {
        @required
        todo: TodoItem
    }
    errors: [NotFoundError, ValidationException]
}

/// list todo items.
@readonly
@paginated(inputToken: "nextToken", outputToken: "nextToken",
           pageSize: "size", items: "todos")
@http(uri: "/todos", method: "GET")
operation ListTodos {
    input := {
        @httpQuery("nextToken")
        nextToken: String
        @httpQuery("size")
        size: Integer = 50
    }
    output := {
        @required
        todos: TodoList
        nextToken: String
    }
    errors: [ValidationException]
}


/// Create a todo item.
@http(uri: "/todos", method: "POST", code: 201)
operation CreateTodo {
    input := {
        @required
        title: String
    }
    output := {
      @required
        @httpHeader("X-Todo-Id")
        id: String
    }
    errors: [ConflictError, ValidationException]
}

/// Update a todo item.
@idempotent
@http(uri: "/todos/{id}", method: "PUT")
operation UpdateTodo {
    input := {
        @required
        @httpLabel
        id: String
        @required
        title: String
    }
    output := {
        @required
        @httpHeader("X-Rows-Affected")
        rowsAffected: Integer
    }
    errors: [NotFoundError, ValidationException]
}

/// Delete a todo item.
@idempotent
@http(uri: "/todos/{id}", method: "DELETE", code: 204)
operation DeleteTodo {
    input := {
        @required
        @httpLabel
        id: String
    }
    output := {
        @required
        @httpHeader("X-Rows-Affected")
        rowsAffected: Integer
    }
    errors: [NotFoundError, ValidationException]
}

/// Update the status of a todo item.
@idempotent
@http(uri: "/todos/{id}/status", method: "PUT")
operation UpdateTodoStatus {
    input := {
        @required
        @httpLabel
        id: String
        @required
        @httpHeader("X-Todo-Status")
        status: Boolean
    }
    output := {
        @required
        @httpHeader("X-Rows-Affected")
        rowsAffected: Integer
    }
    errors: [NotFoundError, ValidationException]
}
