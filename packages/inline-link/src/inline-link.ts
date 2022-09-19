import { html, TemplateResult, CSSResultGroup, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import type { LinkTargetType, LinkRelType } from "./config";
import componentVars from "./css-variables/vars-link.css";
import componentStyles from "./inline-link.css";

/**
 * The Inline  Link component
 *
 * @element inline-link
 * @extends InlineElement
 * @slot - The default slot for this element.
 * @cssprop --inline-link-transition-property: The CSS transition property to use for the link.
 * @cssprop --inline-link-transition-duration: The CSS transition duration to use for the link.
 * @cssprop --inline-link-transition-timing-function: The CSS transition timing function to use for the link.
 * @cssprop --inline-link-color-default: The default link color.
 * @cssprop --inline-link-color-default-decoration: Text decoration for the default link.
 * @cssprop --inline-link-color-hover: The link color when hovering on the link.
 * @cssprop --inline-link-color-hover-decoration: Text decoration for the link when hovering.
 * @cssprop --inline-link-color-focus: The link color when focusing on the link.
 * @todo - Add support for inline/ring on the focus state of the link.
 */
@customElement("inline-link")
export class InlineLink extends LitElement {
  static styles: CSSResultGroup = [componentVars, componentStyles];
  /**
   * Link url
   */
  @property({ type: String, attribute: "link-href" })
  linkHref: string | boolean = false;

  /**
   * Link text
   */
  @property({ type: String, attribute: "link-text" })
  linkText: string | boolean = false;

  /**
   * Link target
   */
  @property({ type: String, attribute: "link-target" })
  linkTarget!: LinkTargetType;

  /**
   * Link rel
   */
  @property({ type: String, attribute: "link-rel" })
  linkRel!: LinkRelType;

  /**
   * This methodology allows us to create a component that can use properties
   * passed into it to generate a link element (<a>). This requires the linkHref
   * attribute is passed, otherwise, anything passed in will override the default
   * content in the slot allowing you to pass a pre-generated link into the
   * inline-link component wrapper.
   */
  render(): TemplateResult {
    return html`${this.linkHref
      ? html` <a
          href=${this.linkHref}
          rel="${ifDefined(this.linkRel)}"
          target="${ifDefined(this.linkTarget)}"
        >
          ${this.linkText ? html`${this.linkText}` : html`<slot></slot>`}
        </a>`
      : html`<slot></slot>`}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "inline-link": InlineLink;
  }
}
