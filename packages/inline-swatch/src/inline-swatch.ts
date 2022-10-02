import { html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import componentStyles from "./inline-swatch.css.lit";
import { InlineElement } from "@inlinejs/inline-element";
import { colorSets } from "@inlinejs/inline-tokens";

export interface InlineSwatchInterface extends HTMLElement {
  set: string;
  color: string;
}

/**
 * Color swatch
 *
 * @element inline-swatch
 */
@customElement("inline-swatch")
export class InlineSwatch
  extends InlineElement
  implements InlineSwatchInterface
{
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  set = "brand";

  @property({ type: String })
  color = "primary";

  render(): TemplateResult {
    const hex = getComputedStyle(document.body).getPropertyValue(
      `--color-${this.set}-${this.color}`
    );

    return html`
      <div class="color" style="--swatch-color: ${hex}"></div>
      <div class="information">
        <span class="information--label">Color:</span>${this.set}.${this.color}
      </div>
      <div class="information">
        <span class="information--label">CSS Variable:</span
        ><code>${`--color-${this.set}-${this.color}`}</code>
      </div>
      <div class="information">
        <span class="information--label">Hex Code:</span><code>${hex}</code>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "inline-swatch": InlineSwatch;
  }
}
