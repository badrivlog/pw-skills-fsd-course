function download(url) {
  console.log("started downloading from: " + url);
  return new Promise(function exec(res, rej) {
    setTimeout(function () {
      console.log("completed downloading data in 5s");
      const content = "This is data";
      res(content);
    }, 5000);
  });
}

download("abcd.com")
  .then((data) => {
    console.log("content downloaded is: " + data);
    return "new promise value";
  })
  .then((value) => console.log(value));
