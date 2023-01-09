import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Ghulam" umur="22" email="ghulam@ghulam.com" />
      <User name="Ammar" umur="23" email="ammar@ammar.com" />
      <User name="Yanuar" umur="24" email="yanuar@yanuar.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.umur}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
