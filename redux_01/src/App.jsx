import Counter from "./components/Counter.jsx/Counter";
import CounterContext from "./context/CounterContext";

function App() {
  return (
    <>
      <CounterContext>
        <Counter />
      </CounterContext>
    </>
  );
}

export default App;
