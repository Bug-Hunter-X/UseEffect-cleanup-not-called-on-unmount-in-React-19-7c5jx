# React 19 useEffect Cleanup Issue

This repository demonstrates a bug where the cleanup function in `useEffect` is not consistently called when a component unmounts in React 19.  The issue is particularly noticeable with certain component lifecycle events or interactions.  This example provides a minimal reproducible example and its solution.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs.  You might need to mount and unmount the component several times (e.g. by rapidly switching between different routes in a routing scenario) to reliably reproduce the problem.