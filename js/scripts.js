//Business Logics
function Order() {
  this.pizzas = {};
  this.itemId = 0;
}

Order.prototype.assignId = function() {
  this.itemId += 1;
  return this.itemId;
};

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

function Pizza(name, addr, toppings, size){
  this.name = name;
  this.addr = addr;
  this.toppings = toppings;
  this.size = size;
}

let myPizza = new Pizza();

Pizza.prototype.cost = function() {
  let cost;
  if (this.size === "Small") {
    cost = 5 + 3 * this.toppings.length;
  } else if (this.size === "Medium") {
    cost = 6 + 3 * this.toppings.length;
  } else {
    cost = 7 + 3 * this.toppings.length;
  }
  return cost;
}

// UI logics
let order = new Order();

function displayOrderDetails(orderToDisplay) {
  let pizzasList = $("ul#order");
  let orderInfo = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key) {
    const pizza = orderToDisplay.findPizza(key);
    orderInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + ": " + pizza.toppings.join(", ") + " " + "</li>";
  });
  pizzasList.html(orderInfo);
}

// function totalCost(orderCost) {
//   let pizzasTotalCost = $(".cost")
//   Object.keys(orderCost.pizzas).forEach(function(key) {
//     const pizza = orderCost.findPizza(key);
//     const orderTotalCost = pizza.cost();
//   });
//   pizzasTotalCost.html(orderTotalCost)
// }

$(document).ready(function() {
  $("form#orderInfo").submit(function(event) {
    event.preventDefault();
    const inputtedName = $("input#inputtedName").val(); 
    const inputtedAddr = $("input#inputtedAddr").val(); 
    const selectedSize = $("input:radio[name=sizeSurvey]:checked").val();
    let selectedToppings = [];
    $("input:checkbox[name=toppingsList]:checked").each(function() {
      selectedToppings.push($(this).val());
    });
    const tipsPct = parseFloat($("input:radio[name=tipsPct]:checked").val());
    let myPizza = new Pizza(inputtedName, inputtedAddr, selectedToppings, selectedSize);
    let cost = parseFloat(myPizza.cost().toFixed(2));
    let tax = parseFloat((cost * 0.075).toFixed(2));
    let tips = parseFloat(((cost + tax) * tipsPct).toFixed(2));
    let total = (cost + tax + tips).toFixed(2);
    $(".name").html(myPizza.name);
    $(".addr").html(myPizza.addr);
    $(".cost").html("$ " + cost);
    $(".tax").html("$ " + tax);
    $(".tips").html("$ " + tips);
    $(".total").html("$ " + total);
    $("#receipt").show();
    
    order.addPizza(myPizza);
    displayOrderDetails(order);
  });
});