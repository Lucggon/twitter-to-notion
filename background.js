// browser.contextMenus.create({
//     id: "eat-page",
//     title: "Eat this page"
//   });

//   browser.contextMenus.onClicked.addListener(function(info, tab) {
//     if (info.menuItemId == "eat-page") {
//       browser.tabs.executeScript({
//         file: "page-eater.js"
//       });
//     }
//   });

browser.browserAction.onClicked.addListener(function(){
  console.log('CLICKING')
  browser.browserAction.openPopup()
})
browser.webNavigation.onCompleted.addListener(function (details) {
  
  browser.tabs.executeScript({
    file: "page-eater.js"
  });
})
