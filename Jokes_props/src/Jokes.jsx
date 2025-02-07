import React from 'react'
export default function Jokes(props) {
  console.log(props);
  return (
    <div className="jokes">
      <div id="jokes-info">
        {/* Correctly access props without `this` */}
        <h2 style={{ display: props.Setup ? 'block' : 'none' }}>{props.Setup}</h2>
        <h3>{props.Punchline}</h3>
        <hr />
      </div>
    </div>
  );
}

// const person = [{firstname: "Bob"}]
//     return (
//         <main>
//             {person}
//         </main>
//   )
//Error: Objects are not valid as a React child (found: object with keys {firstname}). If you meant to render a collection of children, use an array instead.
//An error occurred in the <main> component. Consider adding an error boundary to your tree to customize error handling behavior. Visit https://react.dev/link/error-boundaries to learn more about error boundaries