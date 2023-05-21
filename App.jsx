import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Contextfun } from "./Components/Contextbox";

export default function App() {
  return (
    <BrowserRouter>
      <Contextfun>
        <Router />
      </Contextfun>
    </BrowserRouter>
  );
}
