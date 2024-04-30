# Expose - Part 2
## 1. Answer: It would print `3` in the console
 The `var` keyword is function scope, it can be accessed anywhere insider the function block it is defined in, and we can see the variable `i` is being modified as `3` in the `for` loop(`prices.legth` would be 3 as we pass `[100, 200, 300]` in our function `discountPrices`), so line 12 would print out `3`.
## 2. Answer: It would print `150` in the console
 The `var` keyword is function scope, it can be accessed anywhere insider the function block it is defined in, and we can see the variable `discountedPrice` is being modified as `150` in the `for` loop. That is, this line of code `prices[i] * (1 - discount)`, the last iteration would be `i=2`, so `prices[2] * (1 - discount)` would be `300*(1-0.5)`, and the answer is `150`.
## 3. Answer: It would print `150` in the console
 The `var` keyword is function scope, it can be accessed anywhere insider the function block it is defined in, and we can see the variable `finalPrice` is being modified as `150` in the `for` loop. We take the value `discountedPrice` from question 2, the `finalPrice` would be assign the value `Math.round(150 * 100) / 100`, and it would be `150`.
## 4. Answer: It would return `[50, 100, 150]`
 The `var` keyword is function scope, it can be accessed anywhere insider the function block it is defined in, and we can see that we keep pushin variable `finalPrice` in to `discounted` set. So after the `for` loop, the `discounted` would have three value `[50, 100, 150]` (`prices[i] * 0.5`, where `i = 0, 1, 2`, `100*0.5, 200*0.5 and 300*0.5` would be push into the set var `discounted`).
## 5. Answer: It would causes an Error
 The `let` keyword is block scope, it can only be accessed within the block it is defined in, the `console.log(i)` in line 12 access `i` outside of the block where `i` lives in, so it would causes an error.
## 6. Answer: It would causes an Error
 The `let` keyword is block scope, it can only be accessed within the block it is defined in, the `console.log(discountedPrice)` in line 12 access `discountedPrice` outside of the block where `discountedPrice` lives in, so it would causes an error.
## 7. Answer: It would print `150` in the console
 The `let` keyword is block scope, it can only be accessed within the block it is defined in, and the `finalPrice` was declared at line 4, which is in the same scope as line 14(they live in the same block), so it is accessable within this function. And for the same reason as the answer for latter part of question 3, the `finalPrice` would be `150` after the `for` loop is done.
## 8. Answer: It would return `[50, 100, 150]`
 The `let` keyword is block scope, it can only be accessed within the block it is defined in, and the `discounted` was declared at line 5, which is in the same scope as line 14(they live in the same block), so it is accessable within this function And for the same reason as the answer for latter part of question 4, the `discounted` would be `[50, 100, 150]` after the `for` loop is done.
## 9. Answer: It would causes an Error
 The `let` keyword is block scope, it can only be accessed within the block it is defined in, the `i` lives in the `for` loop block but line 11 lives outside of the `for` loop block, so we would have an error.
## 10. Answer: It would print `3` in the console
 The `const` keyword is also block scope, it can only be accessed within the block it is defined in, however it can not reassigned after it is assigned for the first time. So line 11 lives in the same scope as `length` and we did not reassigned after it is assigned, the `length` have the value `prices.length`, which is the length of the set `[100, 200, 300]`, which is 3.
## 11. Answer: It would return `[50, 100, 150]`
 The `const` keyword is also block scope, it can only be accessed within the block it is defined in, however it can not reassigned after it is assigned for the first time. Although we can not reassigned it(in here mean, we can not assigned it to the other different array) but it can be pushed. We are in the same scope. So, `discounted` would be the set `[50, 100, 150]` with the same reason of the answer for quetion 8.
## 12. 
 ### A: `student.name` or `student["name"]`
 ### B: `student["Grad Year"]`
 ### C: `student.greeting()`
 ### D: `student["Favorite Teacher"].name`
 ### E: `student.courseLoad[0]`
## 13. Answer: 
 ### A: A string `'32'`. Because it convert number `2` into a string `'2'` then concatenate with the string `'3'`.
 ### B: A number `1`. Because it convert the string `'3'` into a number `3` then subtract the number `2`, the output would be `3-2=1`. So it would be `1`.
 ### C: A number `3`. Because `null` is `0` in number. So `3+0=3`, the output would be `0`
 ### D: A string `'3null'`. Because `null` is `'null'` in string. So the string `3` concatenate with the string `'null'` would be `'3null'`.
 ### E: A number `4`. Because the boolean `true` is `1` in number. So the number `1` plus `3` would be `4`.
 ### F: A number `0`. Because the boolean `false` and `null` are both `0` in number. So `0+0` would still be `0`.
 ### G: A string `'3undefined'`. Because `undefined` is `'undefined'` in string. So the string `3` concatenate with the string `'undefined'` would be `'3undefined'`.
 ### H: `NaN`. Because `undefined` can not be converted to a number, the result would be `NaN`.
## 14. Answer: 
 ### A: `true`. Because the string `'2'` can convert to a number `2`, `2 > 1` is true.
 ### B: `false`. Because the string `'2'` and `'12'` can convert to a number `2` and `12`, `2 < 12` is false.
 ### C: `true`. Because the string `'2'` can convert to a number `2`, `2 == 2` is true.
 ### D: `false`. Because the string `'2'` can convert to a number `2`. However, `===` is comparing both value and type, `2` and `'2'` are having the same value but are not the same type (first one is number, second one is string). So `2 === 2` is false.
 ### E: `false`. Because the boolean `true` can convert to number `1`, `1 == 2` would be `false`
 ### F: `true`. Because `===` is comparing both value and type, left hand side(`true`) has the value `true` and `boolean` type, right hand side(`Boolean`) has value `true` and `boolean` type as it cast `2` to `boolean` by `Boolean(2)`, and `Boolean(2)` has value `true`. So it is true.
## 15. Answer: 
 ### `==` only compare value, and it would cast the type if needed. `===` compare both value and type, and it would not cast the type.
## 17. Answer: The result would be `[2,4,6]`.
 ### The function `modifyArray` takes the array `[1,2,3]` and the function `doSomething` as parameter. In the function `modifyArray`, it declared a const array variable `newArr`, and in the `for` loop, we loop through the array `array` which has the value `[1,2,3]`. Then push the result that the function `doSomething` returned to the variable `newArr`. Since `doSomething` would return `num * 2`, and the for loop do that every iteration, so every element in the array `newArray` `[1,2,3]` would be `[2,4,6]`. Then return `newArr`. The result would be `[2,4,6]`.
## 19. Answer: The output would be `1, 4, 3, 2`
### As the `setTimeout()` function is applied to the code for print the `2` and `3`, the `1` and `4` would output first. Then since `3` has 0 delay(second parameter of `setTimeout()` at line 4), `3` would output first, then output `2`.


