import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store.default}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
