// smithy-typescript generated code
import {
  EchoClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoClient";
import {
  SigninInput,
  SigninOutput,
} from "../models/models_0";
import {
  de_SigninCommand,
  se_SigninCommand,
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
 * The input for {@link SigninCommand}.
 */
export interface SigninCommandInput extends SigninInput {}
/**
 * @public
 *
 * The output of {@link SigninCommand}.
 */
export interface SigninCommandOutput extends SigninOutput, __MetadataBearer {}

/**
 * @public
 * Signin to get a token.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoClient, SigninCommand } from "echo"; // ES Modules import
 * // const { EchoClient, SigninCommand } = require("echo"); // CommonJS import
 * const client = new EchoClient(config);
 * const input = { // SigninInput
 *   username: "STRING_VALUE", // required
 *   password: "STRING_VALUE", // required
 * };
 * const command = new SigninCommand(input);
 * const response = await client.send(command);
 * // { // SigninOutput
 * //   token: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SigninCommandInput - {@link SigninCommandInput}
 * @returns {@link SigninCommandOutput}
 * @see {@link SigninCommandInput} for command's `input` shape.
 * @see {@link SigninCommandOutput} for command's `response` shape.
 * @see {@link EchoClientResolvedConfig | config} for EchoClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link UnauthorizedError} (client fault)
 *  Unauthorized error.
 *
 * @throws {@link ForbiddenError} (client fault)
 *  Forbidden error.
 *
 * @throws {@link ThrottlingError} (client fault)
 *  Throttling error.
 *
 * @throws {@link EchoServiceException}
 * <p>Base exception class for all service exceptions from Echo service.</p>
 *
 */
export class SigninCommand extends $Command<SigninCommandInput, SigninCommandOutput, EchoClientResolvedConfig> {

  /**
   * @public
   */
  constructor(readonly input: SigninCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SigninCommandInput, SigninCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoClient";
    const commandName = "SigninCommand";
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
        operation: "Signin",
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
    input: SigninCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SigninCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SigninCommandOutput> {
    return de_SigninCommand(output, context);
  }

}
