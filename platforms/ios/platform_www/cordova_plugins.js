cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-purchase.InAppPurchase",
    "file": "plugins/cordova-plugin-purchase/www/store-ios.js",
    "pluginId": "cordova-plugin-purchase",
    "clobbers": [
      "store"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-purchase": "7.2.8",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});