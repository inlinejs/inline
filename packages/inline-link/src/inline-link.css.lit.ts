import { css } from "lit";
export default css`
  /* Apply standardized box sizing to the component. */
  :host {
    box-sizing: border-box;
  }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
  /* Apply proper CSS for accessibly hiding elements to each component. */
  :host([aria-hidden="true"]),
  [aria-hidden="true"],
  .visually-hidden {
    position: absolute !important;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    word-wrap: normal;
  }
  /* Apply component specific CSS */
  :host,
  a,
  ::slotted(a) {
    font-family: var(--ff-body);
    -webkit-text-decoration: var(
      --inline--link-default-color-default-decoration
    );
    text-decoration: var(--inline--link-default-color-default-decoration);
    -webkit-text-decoration: var(
      --inline-link-color-default-decoration,
      var(--inline--link-default-color-default-decoration)
    );
    text-decoration: var(
      --inline-link-color-default-decoration,
      var(--inline--link-default-color-default-decoration)
    );
    color: var(--inline--link-default-color-default);
    color: var(
      --inline-link-color-default,
      var(--inline--link-default-color-default)
    );
    transition-property: var(--inline--link-default-transition-property);
    transition-property: var(
      --inline-link-transition-property,
      var(--inline--link-default-transition-property)
    );
    transition-timing-function: var(
      --inline--link-default-transition-timing-function
    );
    transition-timing-function: var(
      --inline-link-transition-timing-function,
      var(--inline--link-default-transition-timing-function)
    );
    transition-duration: var(--inline--link-default-transition-duration);
    transition-duration: var(
      --inline-link-transition-duration,
      var(--inline--link-default-transition-duration)
    );
  }

  :host(:hover),
  a:hover,
  ::slotted(a:hover) {
    -webkit-text-decoration: var(--inline--link-default-color-hover-decoration);
    text-decoration: var(--inline--link-default-color-hover-decoration);
    -webkit-text-decoration: var(
      --inline-link-color-hover-decoration,
      var(--inline--link-default-color-hover-decoration)
    );
    text-decoration: var(
      --inline-link-color-hover-decoration,
      var(--inline--link-default-color-hover-decoration)
    );
    color: var(--inline--link-default-color-hover);
    color: var(
      --inline-link-color-hover,
      var(--inline--link-default-color-hover)
    );
  }

  :host(:focus),
  a:focus,
  ::slotted(a:focus) {
    -webkit-text-decoration: var(--inline--link-default-color-focus-decoration);
    text-decoration: var(--inline--link-default-color-focus-decoration);
    -webkit-text-decoration: var(
      --inline-link-color-focus-decoration,
      var(--inline--link-default-color-focus-decoration)
    );
    text-decoration: var(
      --inline-link-color-focus-decoration,
      var(--inline--link-default-color-focus-decoration)
    );
    color: var(--inline--link-default-color-focus);
    color: var(
      --inline-link-color-focus,
      var(--inline--link-default-color-focus)
    );
    inline: none;
  }
`;
