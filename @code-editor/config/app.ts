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
    constr: true,
    init: true,
    destroy: true,
    render: true,
    dom: true,
    input: true, // Inputs and write values
    cmp: true,
    guard: true,
    resolve: true,
    reduce: true,
    epic: true,
    select: true,
    map: true,
    util: true,
    logic: true,
    data: true,
    webapi: true, // Json stringified version of the objects
}
