/** Nav item defines the properties of links used to render the navigation menu */
export interface NavItem {
    active?: boolean, // Indicates that the URL is currently displayed
    caption: string, // title triggers max callstack
    description: string,
    icon: string,
    urlSlug?: string,
    url?: string,
    id?: string, // Original object
    parentId?: string, // Parent of the original object
    type?: string, // Default: LINK_TYPE.Anchor
    children?: NavItem[],
}