/** 
 * Public app configuration
 */
export const APP = {
	host: new URL(window.location.href).host,

	// Used in development to avoid
	// . Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https 
	hostFiles: 'http://localhost:8080', 
	
	apiVersion: '1'
};