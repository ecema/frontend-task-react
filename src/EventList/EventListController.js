export function isGoFirstButtonDisabled(activePage) {
    return activePage < 2
}

export function isGoLastButtonDisabled(activePage, pageCount) {
    return !(activePage < pageCount - 1) 
}

//module.exports = {isGoFirstButtonDisabled, isGoLastButtonDisabled};