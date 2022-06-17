## TDD
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
Expected Output:6
