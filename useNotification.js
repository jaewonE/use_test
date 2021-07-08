import React from 'react';

function useNotification(title, url) {
  if (!("Notification" in window)) {
    return;
  }
  function fireNoti() {
    const sendURL = (noti) => {
      noti.onclick = function(event) {
        event.preventDefault(); 
        window.open(url, '_blank');
      }
    }
    console.log("click!");
    if (Notification.permission === "granted") {
      let noti = new Notification(title);
      sendURL(noti);
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          let noti = new Notification(title);
          sendURL(noti);
        }
        else return;
      });
    }
  };
  return fireNoti;
}

export default useNotification;

/*
function App() {
  const noti = useNotification("travel to mozilla", "http://www.mozilla.org");
  return (
    <div className="wrapper">
      <h1>hello world</h1>
      <button onClick={noti}>click me!</button>
    </div>
  )
}
*/