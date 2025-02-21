```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    throw new Error('Division by zero'); // Correct handling of zero values
  }
  return a / b;
}
```