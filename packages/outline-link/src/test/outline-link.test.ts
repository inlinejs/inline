import { InlineLink } from "@phase2/inline-link";
import { assert, fixture } from "@open-wc/testing";
import { html } from "lit/static-html.js";

describe("inline-link", () => {
  it("is defined", () => {
    const el = document.createElement("inline-link");
    assert.instanceOf(el, InlineLink);
  });

  it("renders with default values", async () => {
    const el = await fixture(html`<inline-link></inline-link>`);
    assert.shadowDom.equal(
      el,
      `
      <slot></slot>
    `
    );
  });

  it("renders with link-href attribute", async () => {
    const el = await fixture(
      html`<inline-link
        link-href="http://inline.phase2tech.com/"
      ></inline-link>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a href="http://inline.phase2tech.com/"><slot></slot></a>
    `
    );
  });

  it("renders with link-href attribute and slotted text", async () => {
    const el = await fixture(
      html`<inline-link link-href="http://inline.phase2tech.com/"
        >link</inline-link
      >`
    );
    assert.shadowDom.equal(
      el,
      `
      <a href="http://inline.phase2tech.com/"><slot></slot></a>
    `
    );
    assert.lightDom.equal(el, `link`);
  });

  it("renders with link-href and link-text attributes", async () => {
    const el = await fixture(
      html`<inline-link
        link-href="http://inline.phase2tech.com/"
        link-text="link"
      ></inline-link>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a href="http://inline.phase2tech.com/">link</a>
    `
    );
  });

  it("renders with fully slotted link", async () => {
    const el = await fixture(
      html`<inline-link
        ><a href="http://inline.phase2tech.com/">link</a></inline-link
      >`
    );
    assert.lightDom.equal(
      el,
      `<a href="http://inline.phase2tech.com/">link</a>`
    );
  });
});
