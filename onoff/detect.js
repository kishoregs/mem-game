/*  ********** Online / Offline Detection **********  */

const checkOnlineStatus = async () => {
  try {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://png.pngtree.com/element_pic/17/03/26/cc471efd3a9cb9e7a8980eb20a346efc.jpg";
    const online = await fetch(proxyurl + url);
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (err) {
    return false; // definitely Offline
  }
};

// temp commented to avoid unnecessary polling
// setInterval(async () => {
//   const result = await checkOnlineStatus();
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = result ? "Online" : "Offline";
// }, 10000);

// include async load event listener in the video!
window.addEventListener("load", async () => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = (await checkOnlineStatus())
    ? "Online"
    : "Offline";
});
