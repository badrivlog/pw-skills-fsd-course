function download(url, cb) {
  console.log("started downloading: " + url);
  setTimeout(() => {
    console.log("completed downloading after 5s");
    const content = "ABCD";
    cb(content);
  }, 5000);
}

download("xyz.com", (data) => console.log("downloaded data is: " + data));
