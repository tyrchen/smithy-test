// smithy-typescript generated code
import {
  EchoClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoClient";
import {
  CreateTodoInput,
  CreateTodoOutput,
} from "../models/models_0";
import {
  de_CreateTodoCommand,
  se_CreateTodoCommand,
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
 * The input for {@link CreateTodoCommand}.
 */
export interface CreateTodoCommandInput extends CreateTodoInput {}
/**
 * @public
 *
 * The output of {@link CreateTodoCommand}.
 */
export interface CreateTodoCommandOutput extends CreateTodoOutput, __MetadataBearer {}

/**
 * @public
 * Create a todo item.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoClient, CreateTodoCommand } from "echo"; // ES Modules import
 * // const { EchoClient, CreateTodoCommand } = require("echo"); // CommonJS import
 * const client = new EchoClient(config);
 * const input = { // CreateTodoInput
 *   title: "STRING_VALUE", // required
 * };
 * const command = new CreateTodoCommand(input);
 * const response = await client.send(command);
 * // { // CreateTodoOutput
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTodoCommandInput - {@link CreateTodoCommandInput}
 * @returns {@link CreateTodoCommandOutput}
 * @see {@link CreateTodoCommandInput} for command's `input` shape.
 * @see {@link CreateTodoCommandOutput} for command's `response` shape.
 * @see {@link EchoClientResolvedConfig | config} for EchoClient's `config` shape.
 *
 * @throws {@link ConflictError} (client fault)
 *  Conflict error.
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
export class CreateTodoCommand extends $Command<CreateTodoCommandInput, CreateTodoCommandOutput, EchoClientResolvedConfig> {

  /**
   * @public
   */
  constructor(readonly input: CreateTodoCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTodoCommandInput, CreateTodoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoClient";
    const commandName = "CreateTodoCommand";
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
        operation: "CreateTodo",
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
    input: CreateTodoCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateTodoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTodoCommandOutput> {
    return de_CreateTodoCommand(output, context);
  }

}
