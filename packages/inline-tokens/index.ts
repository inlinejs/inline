import { default as screenSizeTokens } from "./tokens/screens/base.json";
import { default as baseColorTokens } from "./tokens/color/base.json";

/**
 * Takes an object of Style Dictionary formatted tokens and returns
 * a new object without the required "value" key required in
 * standard Style Dictionary formatting of design tokens.
 *
 * @example
 * {
 *   "status": {
 *     "error": { "value": "#c53030" },
 *     "warning": { "value": "#b64301" },
 *     "info": { "value": "#1e3a8a" },
 *     "success": { "value": "#2f855a" }
 *   }
 * }
 *
 * @param {Object} tokens - An object of Style Dictionary formatted tokens
 */
export const simpleTokenMapper = (tokens: Object) => {
  return Object.fromEntries(
    Object.entries(tokens).map(([k, v]) => [k, v["value"]])
  );
};

/**
 * The following exports provide more structured access to the
 * design tokens we know are intended to exist, and are defined
 * as a single level object.
 */
export const screenSizes = screenSizeTokens.screen
  ? simpleTokenMapper(screenSizeTokens.screen)
  : {};
export const brandColors = baseColorTokens.color.brand
  ? simpleTokenMapper(baseColorTokens.color.brand)
  : {};
export const statusColors = baseColorTokens.color.status
  ? simpleTokenMapper(baseColorTokens.color.status)
  : {};
