// interface are mostly used for objects but type alias are you for everything
interface val {
  x: number;
  y: number;
  func?: (message: string) => number;
}

function add(numbers: val) {
  console.log(numbers.x + numbers.y);
}

let numbers: val = {
  x: 2,
  y: 4,
  func: (requirement: string) => {
    if (requirement == "I want a number bigger then x") {
      return 5;
    } else {
      return 1;
    }
  },
};

console.log(numbers.func?.("I want a number bigger then x"));
