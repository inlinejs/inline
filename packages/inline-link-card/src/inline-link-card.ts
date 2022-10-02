import { html, TemplateResult, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import { SlotController } from "@inlinejs/inline-core";
import { InlineElement } from "@inlinejs/inline-element";

import componentStyles from "./inline-link-card.css.lit";

/**
 * The Inline Section Link component
 * @element inline-section-link
 * @extends InlineElement
 * @slot link - Slot for link.
 * @slot badge - Slot for badge.
 * @todo: Ensure this component is more mobile friendly.
 */
@customElement("inline-link-card")
export class InlineLinkCard extends InlineElement {
  static styles: CSSResultGroup = [componentStyles];
  slots = new SlotController(
    this, // This, the host element.
    false // To shift or not to shift LightDom nodes to ShadowDOM.
  );

  render(): TemplateResult {
    return html`
      <div class="inline-section-link">
        <slot name="badge"></slot>
        <slot name="link"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "inline-link-card": InlineLinkCard;
  }
}
