import ReactDOM from "react-dom/client";
// @ts-ignore
import RemoteButton from "remote1/RemoteButton";

import React, {Suspense} from "react";
import "./index.css";

// Import the remote Header (Now TypeScript won’t complain),
// we have to tell typescript that it is a React component
// But how do we do that? 
// using the remote1.d.ts file

const Header = React.lazy(
  ()=> import("remote1/Header") 
);
const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react-19</div>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>

    <RemoteButton />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);