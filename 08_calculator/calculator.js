const add = (x, y) => (x + y);

const subtract = (x, y) => (x - y);

const sum = (array) => 
{
  return array.reduce((total, current) => total + current, 0);
};


const multiply = (array) =>
{
  return array.reduce((total, current) => total * current, 1);
}

const power = (x,y) => Math.pow(x, y);

const factorial = (x) => {
  let fact = 1;
  while (x != 0)
  {
    fact = fact * x;
    x--;
  }
  return fact;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
