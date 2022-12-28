const APIKey = "AIzaSyBxDbO-NVh8u8s721yc35ymVFB0YSCvuHk";
const Userid = "UCD5ze2EU_ueDAaA4at6G8yg";
const subscriberCount = document.getElementById("subscriberCount");
const viewCount = document.getElementById("viewCount");
const videoCount = document.getElementById("videoCount");

let getdata = () => {
  let subs = 0;
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const counters = document.querySelectorAll(".counter");
      const vids = document.querySelector(".videos");
      const subs = document.querySelector(".youtube");
      const views = document.querySelector(".views");

      views.innerText = data["items"][0].statistics.viewCount;
      subs.innerText = data["items"][0].statistics.subscriberCount;
      vids.innerText = data["items"][0].statistics.videoCount;

      //   counters.forEach((counter) => {
      //     counter.innerText = "0";

      //     const updateCounter = (put) => {
      //       const target = data["items"][0].statistics.subscriberCount;
      //       const c = +counter.innerText;

      //       const increment = target / 2000;

      //       if (c < target) {
      //         counter.innerText = `${Math.ceil(c + increment)}`;
      //         setTimeout(updateCounter, 1);
      //       }
      //     };

      //     updateCounter();
      //   });
    });
};
getdata();
