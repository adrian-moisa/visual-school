/**
 * Nav item defines the properties of links used to render the navigation menu
 */
export interface NavItem {
    active: boolean, // Indicates that the URL is currently displayed
    title: string,
    description: string,
    icon: string,
    url: string,
}