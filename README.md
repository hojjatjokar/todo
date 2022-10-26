# Todo

## Scripts

- start: start the dev server
- build: bundle the production build

## Improvements

### Initial Clean up

For more info please read the PR description [Link to PR](https://github.com/hojjatjokar/todo/pull/2)

### Fix Sort

Problems:

1. When user changes the sort option for the first time, 40 modals will be opend. This is not expected.
2. Sort is not respect. When user changes the sort option nothing happens

Solutions:

1. By removing an extra hook in Todo component. I don't see why we need this logic
2. mutation on todos should be avoided. also the logic is not right

[Link to PR](https://github.com/hojjatjokar/todo/pull/3)

### LoadMore

Adding a button to keep loading more items.

[Lint to PR](https://github.com/hojjatjokar/todo/pull/4)

### Refactore Todo

This still need a heavy reound of refactoring. But for that we need to have tests to prevent breaking stuffs
