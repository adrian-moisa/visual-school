// Extend HtmlElemnt to recognize bling.js
export interface onHTMLElement extends HTMLElement {
    on: (event:string , callback: (...args: any[]) => any) => void
}