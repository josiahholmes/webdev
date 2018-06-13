# JavaScript

## Boolean Logic: True, False, & Beyond

### The Different Operators

Assuming a variable _x_ = 5:

| Operators | Name | Example | Result|
|:---------:|:----:|:-------:|:-------:|
| > | Greater Than | x > 10 | false |
| >= | Greater Than or Equal To | x >= 5 | true |
| < | Less Than | x < -50 | false |
| <= | Less Than or Equal To | x <= 100 | true |
| == | Equal To | x == "5" | true |
| != | Not Equal To | x != "b" | true |
| === | Equal Value and Type | x === "5" | false |
| !== | Not Equal Value or Equal Type | x !== "5" | true |

### Equality Operators (== vs. ===)

```javascript
var x = 99;
x == "99" // true
x === "99" // false

var y = null;
y == undefined // true
y === undefined // false
```
"==" performs _type coercion_, whereas "===" does not. In type coercion, JavaScript takes one of the values being compared, and tries to convert it to make the statement true. As a rule of thumb, using the triple equal operator is much safer to use.

### Logical Operators (AND, OR, and NOT)

Assuming the variables _x_ and _y_ are 5 and 9, respectively: 

| Operator | Name | Example | Result |
|:---:|:---:|:---:|:---:|
| && | AND | x < 10 && x !== 5 | false |
| &#124;&#124; | OR | y > 9 &#124;&#124; x === 5 | true |
| ! | NOT | !(x === y) | true |

### Truthy and Falsy Values

Values that aren't actually _true_ or _false_, are still inherently "truthy" or "falsy" when evaluated in a boolean context.

## Conditionals




