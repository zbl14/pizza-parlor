function Pizza(name, addr, toppings, size){
  this.name = name;
  this.addr = addr;
  this.toppings = toppings;
  this.size = size;
}


Pizza.prototype.cost = function() {
  let cost;
  if (this.size === "small") {
    cost = 5 + 3 * this.toppings.length;
  } else if (this.size === "medium") {
    cost = 6 + 3 * this.toppings.length;
  } else {
    cost = 7 + 3 * this.toppings.length;
  }
  return cost
}


// let myPizza = new Pizza("name", "deliveryAddr", [], "orederedsize");


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
    $(".size").html(myPizza.size);
    $(".toppings").html(myPizza.toppings.join(", "));
  });
});