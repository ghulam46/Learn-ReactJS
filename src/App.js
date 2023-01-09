import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Ghulam" age="22" email="ghulam@ghulam.com" />
      <User name="Ammar" age="23" email="ammar@ammar.com" />
      <User name="Yanuar" age="24" email="yanuar@yanuar.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
