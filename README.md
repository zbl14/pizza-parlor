# Pizza Parlor

#### By Zhibin Liang

#### A webpage app for online ordering pizza

## Technologies Used

* HTML
* CSS
* JavaScript

## Setup/Installation Requirements

1. Clone the repo
    ```sh
    git clone (https://github.com/zbl14/pizza-parlor.git)
    ```
2. Open index.html file
3. Enter Name and Address, select the size and toppings for your customized pizza
4. Submit your oder to recieve a dynamic receipt
5. Choose other toppings and size to get a second pizza by clicking the submit to update your receipt

## Specs
```sh
Describe: Pizza()
```
Test: "It should return a Pizza object with four properties for name, address, toppings and size"\
Code: let myPizza = new Pizza("Ben", "1 Technology Dr, Irvine, Ca 92780", ["anchovies", "pineapple"], "medium");\
Expected Output:\
Pizza {name: 'Ben', addr: '1 Technology Dr, Irvine, Ca 92780', toppings: Array(2), size: 'medium'}\
addr: "1 Technology Dr, Irvine, Ca 92780"\
name: "Ben"\
size: "medium"\
toppings: (2) ['anchovies', 'pineapple']

```sh
Describe: cost()
```
Test: "It should return the cost of a pizza based on the selected size"\
Code: 
let myPizza = new Pizza("Ben", "1 Technology Dr, Irvine, Ca 92780", ["anchovies", "pineapple"], "medium");\
myPizza.cost();\
Expected Output: 6

Test: "It should return the cost of a pizza based on the selected size and the servisings of toppings"\
Code: 
let myPizza = new Pizza("Ben", "1 Technology Dr, Irvine, Ca 92780", ["anchovies", "pineapple"], "medium");\
myPizza.cost();\
Expected Output: 12

```sh
Describe: Order()
```
Test: "It should return a Order object with a property of itemId and a Pizza object"\
Code: let myOrder = new Order();\
Expected Output: Order {pizzas: {…}, itemId: 0} 

```sh
Describe: assignId()
```
Test: "It should return a new ID"\
Code:\
let myOrder = new Order();\
myOrder.assignId();\
Expected Output: 1

```sh
Describe: addPizza()
```
Test: "It should return a Order object with id 1 and a Pizza object"\
Code:\
let myPizza = new Pizza("Ben", "address", ["apple" , "cheese"], "Medium")\
myOrder.addPizza(myPizza);\
Expected Output:\
Order {pizzas: {…}, itemId: 1}\
itemId: 1\
pizzas:\
1: Pizza {name: 'Ben', addr: 'address', toppings: Array(2), size: 'Medium', id: 1}

```sh
Describe: findPizza()
```
Test: "It should return the pizza object according its assigned ID"\
Code:\
let myPizza = new Pizza("Ben", "address", ["apple" , "cheese"], "Medium")\
myOrder.addPizza(myPizza);\
findPizza(1);\
Expected Output:\
Order {pizzas: {…}, itemId: 1}\
itemId: 1\
pizzas:\
1: Pizza {name: 'Ben', addr: 'address', toppings: Array(2), size: 'Medium', id: 1}

## Known Bugs

* Can submit order without entering name and address

## License

MIT

Copyright &copy; 2022 Zhibin Liang 