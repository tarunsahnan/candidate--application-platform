import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  console.log(store.default);
  return (
    <>
      <Provider store={store.default}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
