console.log(this);

const calcAge = function (birthYear) {
  console.log(this);
};

// calcAge(2002);

const badri = {
  name: "badri",
  calcAge() {
    console.log(this);
  },
};

const hi = badri.calcAge;
hi();
