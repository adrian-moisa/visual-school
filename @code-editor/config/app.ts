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

/**
 * Debug sorted by type of code
 */
export const DEBUG = {
    constr: false,
    init: false,
    destroy: false,
    render: true,
    dom: false,
    input: false, // Inputs and write values
    cmp: false,
    guard: false,
    resolve: false,
    reduce: false,
    epic: false,
    select: false,
    map: false,
    util: false,
    logic: false,
    data: false,
    webapi: false, // Json stringified version of the objects
}
