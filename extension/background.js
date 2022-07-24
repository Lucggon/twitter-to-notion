browser.webNavigation.onCompleted.addListener(function () {
  browser.tabs.executeScript({
    file: "page-eater.js"
  });
})

