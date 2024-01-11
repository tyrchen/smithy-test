// smithy-typescript generated code
import {
  EchoClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoClient";
import {
  ListTodosInput,
  ListTodosOutput,
} from "../models/models_0";
import {
  de_ListTodosCommand,
  se_ListTodosCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SMITHY_CONTEXT_KEY,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTodosCommand}.
 */
export interface ListTodosCommandInput extends ListTodosInput {}
/**
 * @public
 *
 * The output of {@link ListTodosCommand}.
 */
export interface ListTodosCommandOutput extends ListTodosOutput, __MetadataBearer {}

/**
 * @public
 * list todo items.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoClient, ListTodosCommand } from "echo"; // ES Modules import
 * // const { EchoClient, ListTodosCommand } = require("echo"); // CommonJS import
 * const client = new EchoClient(config);
 * const input = { // ListTodosInput
 *   nextToken: "STRING_VALUE",
 *   size: Number("int"),
 * };
 * const command = new ListTodosCommand(input);
 * const response = await client.send(command);
 * // { // ListTodosOutput
 * //   todos: [ // TodoList // required
 * //     { // TodoItem
 * //       id: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       completed: true || false, // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTodosCommandInput - {@link ListTodosCommandInput}
 * @returns {@link ListTodosCommandOutput}
 * @see {@link ListTodosCommandInput} for command's `input` shape.
 * @see {@link ListTodosCommandOutput} for command's `response` shape.
 * @see {@link EchoClientResolvedConfig | config} for EchoClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EchoServiceException}
 * <p>Base exception class for all service exceptions from Echo service.</p>
 *
 */
export class ListTodosCommand extends $Command<ListTodosCommandInput, ListTodosCommandOutput, EchoClientResolvedConfig> {

  /**
   * @public
   */
  constructor(readonly input: ListTodosCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTodosCommandInput, ListTodosCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoClient";
    const commandName = "ListTodosCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        (_: any) => _,
      outputFilterSensitiveLog:
        (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EchoService",
        operation: "ListTodos",
      },
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: ListTodosCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListTodosCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTodosCommandOutput> {
    return de_ListTodosCommand(output, context);
  }

}
