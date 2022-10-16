# Write a function that determines whether the online shopping we purchased qualifies for free shipping

**If our purchase is greater than $100 we get free shipping**

## User Story

As a shopper, when I order items in total over $100, then I get free shipping

## Test scenarios

- If $50 expect false
- If $150 expect true
- If $100 expect false
- If $99 expect false
- If $101 expect true
- If input isn't a number return error
- If -$100 expect an error
- If $0 expect false
- If undefined error
- If $100.01 true
