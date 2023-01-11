import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <User name="Ghulam" age="22" email="ghulam@ghulam.com" />
//       <User name="Ammar" age="23" email="ammar@ammar.com" />
//       <User name="Yanuar" age="24" email="yanuar@yanuar.com" />
//     </div>
//   );
// }

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

function App() {
  const age = 19;

  return (
    <div className="App">
      {/* Ternary Operator in React */}
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
    </div>
  );

  // Normal Operator with if else
  // if (age >= 18) {
  //   return <h1>OVER AGE</h1>;
  // } else {
  //   return <h1>UNDER AGE</h1>;
  // };
}

export default App;
