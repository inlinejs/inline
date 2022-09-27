import { html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { InlineElement } from "@inlinejs/inline-element";
import componentVars from "./css-variables/vars-alert.css.lit";
import componentStyles from "./inline-alert.css.lit";

export const alertSizes = ["small", "large"] as const;
export type AlertSize = typeof alertSizes[number];

export const alertStatusTypes = [
  "info",
  "warning",
  "error",
  "success",
] as const;

export type AlertStatusType = typeof alertStatusTypes[number];

// This can be useful for testing.
export interface InlineAlertInterface extends HTMLElement {
  alertType: AlertStatusType;
  alertSize: AlertSize;
  isInteractive: boolean;
}

export const tagName = "inline-alert";

/**
 * The Inline Alert component
 *
 * @element inline-alert
 * @extends InlineElement
 * @slot default - The alert contents.
 * @slot header - The header in the alert.
 * @cssprop --inline-alert-info-background: The background color for the info alert.
 * @cssprop --inline-alert-info-text: The text color for the info alert.
 * @cssprop --inline-alert-info-border: The border color for the info alert.
 * @cssprop --inline-alert-success-background: The background color for the success alert.
 * @cssprop --inline-alert-success-text: The text color for the success alert.
 * @cssprop --inline-alert-success-border: The border color for the success alert.
 * @cssprop --inline-alert-warning-background: The background color for the warning alert.
 * @cssprop --inline-alert-warning-text: The text color for the warning alert.
 * @cssprop --inline-alert-warning-border: The border color for the warning alert.
 * @cssprop --inline-alert-error-background: The background color for the error alert.
 * @cssprop --inline-alert-error-text: The text color for the error alert.
 * @cssprop --inline-alert-error-border: The border color for the error alert.
 * @todo: Make the alert styling more flexible.
 */
@customElement("inline-alert")
export class InlineAlert extends InlineElement implements InlineAlertInterface {
  static styles: CSSResultGroup = [componentVars, componentStyles];

  @property({ type: String, attribute: "alert-type" })
  alertType: AlertStatusType = "info";

  @property({ type: Boolean, attribute: "is-interactive" })
  isInteractive = false;

  @property({ type: String, attribute: "alert-size" })
  alertSize: AlertSize = "large";

  render(): TemplateResult {
    // The `body` wrapper is used to avoid styles (like border) that are preventing us from styling `:host`.
    return html`
      <div
        class="alert-body"
        role="${this.isInteractive ? "alertdialog" : "alert"}"
        aria-labelledby=${ifDefined(this.isInteractive ? "message" : undefined)}
      >
        ${this.alertSize === "large"
          ? html`
              <div class="alert-header">
                <slot name="header">${this.alertType}</slot>
              </div>
            `
          : null}
        <div class="message" id="message">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "inline-alert": InlineAlert;
  }
}
