import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("inline-element")
export class InlineElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "inline-element": InlineElement;
  }
}
