function Pizza(name, addr, toppings, size){
  this.name = name;
  this.addr = addr;
  this.toppings = toppings;
  this.size = size;
}

let myPizza = new Pizza("Ben", "1 Technology Dr, Irvine, Ca 92780", ["anchovies", "pineapple"], "medium");

Pizza.prototype.cost = function() {
  let cost;
  if (this.size === "small") {
    cost = 5;
  } else if (this.size === "medium") {
    cost = 6;
  } else {
    cost = 7;
  }
  return cost
}
