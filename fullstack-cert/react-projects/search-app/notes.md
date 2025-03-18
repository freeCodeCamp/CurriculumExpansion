### When to use useMemo

- When you have a function that is computationally expensive and you want to memoize / cache the result
- You want to cut down on the number of re-renders, and only want to recompute the value when certain dependencies / props change
- For referential integrity / equality (when returning an object or array)

### When to use useCallback

- For referential integrity / equality (when returning a function)

(Points below from https://blog.logrocket.com/react-usememo-vs-usecallback/)

### Wrap functions with useCallback when:

- React.memo()-wrapped component accepts a callback function as a prop
- Passing a callback function as a dependency to other Hooks (i.e., useEffect)

### Use useMemo when:

- For expensive calculations that should be cached when unrelated re-renders happen
- Memoizing a dependency of another Hook
