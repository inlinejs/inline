import { TemplateResult, html, CSSResultGroup } from "lit";
import { InlineElement } from "@inlinejs/inline-element";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import componentStyles from "./inline-grid.css.lit";
import { SlotController } from "@inlinejs/inline-core";

/**
 * The inline-grid component.
 * @element inline-grid
 * @extends InlineElement
 *
 * @example
 * <inline-grid grid-template-columns="1fr 1fr 1fr 1fr">
 *   <div></div>
 *   <div></div>
 *   <div></div>
 *   <div></div>
 * </inline-grid>
 *
 * @slot - The default slot.
 */

@customElement("inline-grid")
export class InlineGrid extends InlineElement {
  static styles: CSSResultGroup = [componentStyles];
  slots = new SlotController(
    this, // This, the host element.
    false // To shift or not to shift LightDom nodes to ShadowDOM.
  );

  /**
   * Grid Template Columns.
   */
  @property({ type: String, attribute: "grid-template-columns" })
  gridTemplateColumns!: string;

  /**
   * Grid Template Rows.
   */
  @property({ type: String, attribute: "grid-template-rows" })
  gridTemplateRows = "1fr";

  /**
   * Vertical gap between items.
   */
  @property({ type: String, reflect: true, attribute: "grid-row-gap" })
  gridRowGap = "1rem";

  /**
   * Horizontal gap between items.
   */
  @property({ type: String, reflect: true, attribute: "grid-column-gap" })
  gridColumnGap = "1rem";

  /**
   * Defines how the items will be aligned vertically in each row.
   */
  @property({ type: String, reflect: true, attribute: "align-items" })
  alignItems!: string;

  /**
   * Defines how the items will be aligned horizontally in each column.
   */
  @property({ type: String, reflect: true, attribute: "justify-items" })
  justifyItems!: string;

  /**
   * Minimum width of each item.
   */
  @property({ type: String, reflect: true, attribute: "item-min-width" })
  itemMinWidth = "320px";

  /**
   * Maximum amount of columns.
   */
  @property({ type: String, reflect: true, attribute: "columns" })
  columns = "4";

  render(): TemplateResult {
    const gridStyles = {
      "--grid-template-columns": this.gridTemplateColumns,
      "--grid-template-rows": this.gridTemplateRows,
      "--grid-column-gap": this.gridColumnGap,
      "--grid-column--max-count": this.columns,
      "--grid-row-gap": this.gridRowGap,
      "--align-items": this.alignItems || "auto",
      "--grid-item--min-width": this.itemMinWidth,
      "--justify-items": this.justifyItems || "auto",
    };
    return html`
      <section style="${styleMap(gridStyles)}"><slot></slot></section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "inline-grid": InlineGrid;
  }
}
