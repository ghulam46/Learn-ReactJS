import "./App.css";

function App() {
  const name = <h1>Ghulam</h1>;
  const age = <h2>22</h2>;
  const email = <h2>ghulam.yanuar01@gmail.com</h2>;
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );

  return (
    <div className="App">
      {user}
      {user}
      {user}
    </div>
  );
}

export default App;
