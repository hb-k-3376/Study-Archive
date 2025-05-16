const test = () => {
  return function (args) {
    console.log(args);
  };
};

const fn = test();
fn(1, 2, 3, 4);
