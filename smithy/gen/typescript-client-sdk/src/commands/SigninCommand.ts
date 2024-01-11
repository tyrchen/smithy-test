// smithy-typescript generated code
import {
  EchoServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoServiceClient";
import {
  SigninInput,
  SigninOutput,
} from "../models/models_0";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

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
 * import { EchoServiceClient, SigninCommand } from "echo"; // ES Modules import
 * // const { EchoServiceClient, SigninCommand } = require("echo"); // CommonJS import
 * const client = new EchoServiceClient(config);
 * const input = { // SigninInput
 *   payload: { // SigninForm
 *     username: "STRING_VALUE", // required
 *     password: "STRING_VALUE", // required
 *   },
 * };
 * const command = new SigninCommand(input);
 * const response = await client.send(command);
 * // { // SigninOutput
 * //   payload: { // SigninToken
 * //     token: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param SigninCommandInput - {@link SigninCommandInput}
 * @returns {@link SigninCommandOutput}
 * @see {@link SigninCommandInput} for command's `input` shape.
 * @see {@link SigninCommandOutput} for command's `response` shape.
 * @see {@link EchoServiceClientResolvedConfig | config} for EchoServiceClient's `config` shape.
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
 * @throws {@link EchoServiceServiceException}
 * <p>Base exception class for all service exceptions from EchoService service.</p>
 *
 */
export class SigninCommand extends $Command.classBuilder<SigninCommandInput, SigninCommandOutput, EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: EchoServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("EchoService", "Signin", {

  })
  .n("EchoServiceClient", "SigninCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
