import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./index.css";
import RemoteButton from "./RemoteButton";
const App = () => (
  <div className="container">
    <Header />
    <RemoteButton />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);