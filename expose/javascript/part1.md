# Expose - Part 1
## 1. Answer: 20
 The `var` keyword is function scope, it can be accessed anywhere insider the function block it is defined in, so 10+10=20.
## 2. Answer: 20
 Same as question 1 above, the `var` keyword is function scope, so 10+10=20.
## 3. Answer: 20
 The `let` keyword is block scope, it can only be accessed within the block it is defined in, and the code is indeed in the valid scope, so 10+10=20.
## 4. Answer: Error
 As I mentioned in question 3, the `let` keyword is block scope, it can only be accessed within the block it is defined in, and line 13 is outside the `if` block. That is, the variable does not in that scope.
## 5. Answer: Error
 While `const` keyword is also block scope as `let` keyword but it can not reassigned after it is assigned for the first time(this program reassigned it at line 7). So this will give us error.
## 6. Answer: Error
 Same reason as question 5, it is `const` keyword and it can not reassigned after it is assigned for the first time. So this will give us error.