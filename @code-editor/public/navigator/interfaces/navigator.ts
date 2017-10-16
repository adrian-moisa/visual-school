/** 
 * Nav item defines the properties of links used to render the navigation menu 
 * Nav items connect to other objects such as chapters, lessons, code blocks
 */
export interface NavNode {
    id?: string,
    index?: number, // Added at runtime
    parentId?: string,
    type?: string,
    active?: boolean,
    caption: string, // Title (using title token triggers max callstack)
    description: string,
    icon: string,
    urlSlug?: string,
    url?: string,
    children?: NavNode[],
}