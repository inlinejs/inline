import { css } from "lit";
/*
Default CSS Variables for `inline-link`.
You can override these using `inline.theme.css`, 
or any css file in your consumer application with
a later loading order than `inline.theme.css`.
The variables used to override the default 
`inline-link` styling can be found in 
`inline-link.ts` delcared with the `@cssprop` annotations.
*/
export default css`
:host {
--inline--link-default-transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;
--inline--link-default-transition-duration:150ms;
--inline--link-default-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
--inline--link-default-color-default:var(--inline-blue-600);
--inline--link-default-color-default-decoration:none;
--inline--link-default-color-hover:var(--inline--gray-600);
--inline--link-default-color-hover-decoration:underline;
--inline--link-default-color-focus:var(--inline--gray-600);
--inline--link-default-color-focus-decoration:underline;
`;
