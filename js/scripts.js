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

Pizza.prototype.cost = function() {
  let cost;
  if (this.size === "Small") {
    cost = 4.99 + 2.99 * this.toppings.length;
  } else if (this.size === "Medium") {
    cost = 5.99 + 2.99 * this.toppings.length;
  } else {
    cost = 6.99 + 2.99 * this.toppings.length;
  }
  return cost;
}

// UI logics
let order = new Order();

function displayOrderDetails(orderToDisplay) {
  let pizzasList = $("ul#order");
  let orderInfo = "";
  let orderTotalCost = 0
  Object.keys(orderToDisplay.pizzas).forEach(function(key) {
    const pizza = orderToDisplay.findPizza(key);
    console.log(pizza);
    orderCost = parseFloat(pizza.cost().toFixed(2));
    orderTotalCost += parseFloat(pizza.cost());
    orderInfo += "<li id=" + pizza.id + ">" + "Size: " + pizza.size + "; " + "Toppings: " + pizza.toppings.join(", ") + "; " + "$ " + orderCost.toFixed(2) + "</li>";
  });
  const tipsPct = parseFloat($("input:radio[name=tipsPct]:checked").val());
  let tax = parseFloat((orderTotalCost * 0.075).toFixed(2));
  let tips = parseFloat(((orderTotalCost + tax) * tipsPct).toFixed(2));
  let total = (orderTotalCost + tax + tips).toFixed(2);
  $(".cost").html("$ " + orderTotalCost.toFixed(2));
  $(".tax").html("$ " + tax);
  $(".tips").html("$ " + tips);
  $(".total").html("$ " + total);
  pizzasList.html(orderInfo)
}


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
    let myPizza = new Pizza(inputtedName, inputtedAddr, selectedToppings, selectedSize);
    $(".name").html(myPizza.name);
    $(".addr").html(myPizza.addr);
    order.addPizza(myPizza);
    displayOrderDetails(order);
    $("#receipt").show();  
  });
});