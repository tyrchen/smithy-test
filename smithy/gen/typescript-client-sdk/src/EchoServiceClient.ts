// smithy-typescript generated code
import {
  EchoMessageCommandInput,
  EchoMessageCommandOutput,
} from "./commands/EchoMessageCommand";
import {
  SigninCommandInput,
  SigninCommandOutput,
} from "./commands/SigninCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  RuntimeExtension,
  RuntimeExtensionsConfig,
  resolveRuntimeExtensions,
} from "./runtimeExtensions";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@smithy/types";

export { __Client }

/**
 * @public
 */
export type ServiceInputTypes =
  | EchoMessageCommandInput
  | SigninCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | EchoMessageCommandOutput
  | SigninCommandOutput;

/**
 * @public
 */
export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

}

/**
 * @public
 */
export type EchoServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
/**
 * @public
 *
 *  The configuration interface of EchoServiceClient class constructor that set the region, credentials and other options.
 */
export interface EchoServiceClientConfig extends EchoServiceClientConfigType {}

/**
 * @public
 */
export type EchoServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RuntimeExtensionsConfig
/**
 * @public
 *
 *  The resolved configuration interface of EchoServiceClient class. This is resolved and normalized from the {@link EchoServiceClientConfig | constructor configuration interface}.
 */
export interface EchoServiceClientResolvedConfig extends EchoServiceClientResolvedConfigType {}

/**
 * @public
 * Echoes input
 */
export class EchoServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EchoServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of EchoServiceClient class. This is resolved and normalized from the {@link EchoServiceClientConfig | constructor configuration interface}.
   */
  readonly config: EchoServiceClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<EchoServiceClientConfig>) {
    let _config_0 = __getRuntimeConfig(configuration || {});
    let _config_1 = resolveRuntimeExtensions(_config_0, configuration?.extensions || []);
    super(_config_1);
    this.config = _config_1;
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
