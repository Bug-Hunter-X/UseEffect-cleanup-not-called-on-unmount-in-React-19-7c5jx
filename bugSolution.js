```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanup = () => {
      console.log('Component unmounting');
    };
    console.log('Component mounted');
    return cleanup; // Ensure the cleanup function is returned 
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```