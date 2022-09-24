import type {
  ReactiveController,
  ReactiveControllerHost,
  ReactiveElement,
} from "lit";

/**
 * The SlotController ReactiveController.
 *
 * This controller is a mix of the Shoelace controller linked below,
 * as well as much custom code from our original SlottedController.
 *
 * This updated controller handles:
 * - Default
 *   - Ability to test if a named slot is present/populated
 *   - Ability to test if the default slot is present/populated
 *   - Get a list of all available slots
 * - Optional
 *   - ShadowShift
 *     - Moving all named slots to ShadowDOM
 *     - Moving all default slots to ShadowDOM
 *
 * @todo: Make the ShadowShift functionality able to target specific slots only.
 * @see https://github.com/shoelace-style/shoelace/blob/next/src/internal/slot.ts
 * @example
 * // Do NOT move LightDOM elements.
 * slots = new SlotController(
 *   this, // The host element.
 *   false // To shift or not to shift LightDom nodes to ShadowDOM.
 * );
 * @example
 * // Move LightDOM elements to the ShadowDOM.
 * slots = new SlotController(
 *   this, // The host element.
 *   true // To shift or not to shift LightDom nodes to ShadowDOM.
 * );
 */
export class SlotController implements ReactiveController {
  host: ReactiveControllerHost & Element;
  hostEl: ReactiveElement;
  shadowShift: boolean;
  slotNames: string[] = [];
  defaultSlot: boolean = false;
  namedSlots: boolean = false;

  constructor(host: ReactiveControllerHost & Element, shadowShift?: boolean) {
    (this.host = host).addController(this);
    this.hostEl = this.host as unknown as ReactiveElement;
    this.shadowShift =
      shadowShift && typeof shadowShift === "boolean" ? shadowShift : false;
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  private hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== "") {
        return (this.defaultSlot = true);
      }

      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (!el.hasAttribute("slot")) {
          return (this.defaultSlot = true);
        }
      }

      return (this.defaultSlot = false);
    });
  }

  private hasNamedSlot(name: string) {
    return (this.namedSlots =
      this.host.querySelector(`:scope > [slot="${name}"]`) !== null);
  }

  test(slotName?: string | undefined) {
    return slotName === undefined
      ? this.hasDefaultSlot()
      : this.hasNamedSlot(slotName);
  }

  hostConnected() {
    this.host.shadowRoot!.addEventListener("slotchange", this.handleSlotChange);
    this.slotNames = this.getSlots();
    setTimeout(() => this.moveSlots(), 0);
  }

  hostDisconnected() {
    this.host.shadowRoot!.removeEventListener(
      "slotchange",
      this.handleSlotChange
    );
  }

  handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;

    if (
      (this.defaultSlot && !slot.name) ||
      (slot.name && this.slotNames.includes(slot.name))
    ) {
      this.host.requestUpdate();
    }
    this.moveSlots();
  }

  /**
   * Function to return an array of slots on an element.
   *
   * @returns string[]
   * @todo: only query for 'slot' attributes, and not '[slot]'
   */
  getSlots() {
    const slots: string[] = [];
    // Only adding named slots to our string array.
    // We have the actual presence of the unnamed slot known
    // via this.hasDefaultSlot.
    const namedSlots: NodeListOf<HTMLElement> =
      this.host.querySelectorAll("[slot]");
    namedSlots.length ? (this.namedSlots = true) : (this.namedSlots = false);

    namedSlots.forEach((slot: HTMLElement) => {
      const name: string = slot.getAttribute("slot") as string;
      // Add the slot name to the array of strings.
      this.test(name) ? slots.push(name) : false;
    });

    return slots;
  }

  /**
   * Method to move a named slot's content into the ShadowDOM.
   *
   * @todo: Continue improvement and performance in this method.
   * @todo: Observe slot changes and adding new elements to the slot.
   *
   * @param slotName string The name of the named slot.
   * @param slotShadowDom The named slot to be moved.
   */
  private moveNamedSlots(slotShadowDom: HTMLSlotElement) {
    const slotLightDomArray = slotShadowDom
      .assignedNodes({ flatten: true })
      .filter((node) => node instanceof HTMLElement) as HTMLElement[];

    slotLightDomArray.forEach((slotLightDom) => {
      const clonedSlot = slotLightDom.cloneNode(true) as HTMLElement;
      clonedSlot.setAttribute("cloned-slot-type", "named-slot");
      clonedSlot.setAttribute("cloned-slot-name", slotShadowDom.name);
      clonedSlot.removeAttribute("slot");
      slotShadowDom.before(clonedSlot);

      const newComment = document.createComment(
        `Original named-slot '${slotShadowDom.name}' was moved into shadow DOM by slotController`
      );
      slotLightDom.before(newComment);
    });
  }

  /**
   * Method to move all content in the default slot into ShadowDOM.
   */
  private moveDefaultSlots(slot: HTMLSlotElement) {
    const slotLightDomArray = slot.assignedNodes({
      flatten: true,
    }) as HTMLElement[];

    slotLightDomArray.forEach((node) => {
      // default slot - content only without an element
      if (node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== "") {
        const newSlot = document.createElement("cloned-slot");
        newSlot.setAttribute("cloned-slot-type", "default-slot--content");
        newSlot.setAttribute("cloned-slot-name", "default");
        newSlot.appendChild(node.cloneNode(true));
        slot.before(newSlot);

        const newComment = document.createComment(
          "Original default slot content was moved into shadow DOM by slotController"
        );
        node.before(newComment);
      }

      // element default slot
      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (!el.hasAttribute("slot")) {
          const clonedSlot = node.cloneNode(true) as HTMLElement;
          clonedSlot.setAttribute("cloned-slot-type", "default-slot--element");
          clonedSlot.setAttribute("cloned-slot-name", "default");
          slot.before(clonedSlot);

          const newComment = document.createComment(
            "Original default slot element was moved into shadow DOM by slotController"
          );
          node.before(newComment);
        }
      }
    });
  }

  /**
   * Function to move all named or unnamed slots to the ShadowDOM.
   */
  private moveSlots() {
    if (this.shadowShift) {
      const slotsArray: NodeListOf<HTMLSlotElement> =
        this.hostEl.renderRoot.querySelectorAll("slot");
      slotsArray.forEach((slot) => {
        if (slot.name) {
          this.moveNamedSlots(slot);
        } else {
          this.moveDefaultSlots(slot);
        }
        slot.remove();
      });
    }
  }
}
