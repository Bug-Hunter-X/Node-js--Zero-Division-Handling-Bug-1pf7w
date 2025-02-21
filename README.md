# Node.js Zero Division Handling Bug

This repository demonstrates an uncommon bug in Node.js related to the handling of zero values in a division operation. The bug occurs when the function `myFunction` receives 0 as input for either `a` or `b`, which leads to incorrect results or errors.

## Bug Description

The `myFunction` incorrectly handles zero values in the input parameters.  A simple check is made for zero values but instead of throwing an error or returning `Infinity` it incorrectly returns `0`. This can lead to unexpected behavior and errors in the application if the division operation is expected to handle zero correctly.

## Bug Reproduction

1. Clone the repository.
2. Run `node bug.js`.
3. Observe the incorrect output when `myFunction` is called with zero values.

## Solution

The solution involves correctly handling zero values by either throwing an error or returning `Infinity`. The `bugSolution.js` file demonstrates the correct handling.