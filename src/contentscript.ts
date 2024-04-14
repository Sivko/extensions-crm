import { initCombineDublication } from "./combineDuplicates";

chrome.runtime.onMessage.addListener((msg, sender, callback) => {
  // document.write("123")
  // callback(`Price: ${getPriceText()}\nRent: ${getRentText()}`);

});


const init = async () => {
  const item =  document.createElement("div");
  item.innerHTML = `<div id="raidDublication"></div>`;
  document.querySelector("body")?.append(item);
  initCombineDublication()
}

chrome.runtime.sendMessage('test', (response) => {
  console.log("Response Woker in UI", response);
});

init()




