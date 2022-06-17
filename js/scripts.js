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
  return cost
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
    const tipsPct = parseFloat($("input:radio[name=tipsPct]:checked").val());
    let myPizza = new Pizza(inputtedName, inputtedAddr, selectedToppings, selectedSize);
    let cost = parseFloat(myPizza.cost().toFixed(2));
    let tax = parseFloat((cost * 0.075).toFixed(2));
    let tips = parseFloat(((cost + tax) * tipsPct).toFixed(2));
    let total = cost + tax + tips
  
    
  
    
  
    // $("#tips").click(function(){

    // });



    $(".name").html(myPizza.name);
    $(".addr").html(myPizza.addr);
    $(".size").html(myPizza.size);
    $(".toppings").html(myPizza.toppings.join(", "));
    $(".cost").html("$ " + cost);
    $(".tax").html("$ " + tax);
    $(".tips").html("$ " + tips);
    $(".total").html("$ " + total);
  });
});