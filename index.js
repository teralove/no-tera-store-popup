module.exports = function NoTeraStorePopup(mod) {
    mod.hook('C_REQUEST_SERVER_ADMINTOOL_AWESOMIUM_URL', 'raw', event => { 
        return false
    })
}