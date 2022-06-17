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
4. Submit your oder to recieve a receipt

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
Expected Output: Order {pizzas: {…}, itemid: 0} 

## Known Bugs

* Can submit order without entering name and address

## License

MIT

Copyright &copy; 2022 Zhibin Liang 