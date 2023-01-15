
import './App.css';


function App() {
  
    

  return (
    <div className="App">
      <a href='Home'>Home1</a>|
      <a href='Exercise1'>Exercise1</a>|
      <a href='Exercise2'>Exercise2</a>|
      <a href='Exercise3'>Exercise3</a>|
      <button className = "button" onClick={handleSubmit}>Submit</button>
    </div>
      
  );
  function handleSubmit(){
   console.log("You")
    alert("You clicked me")
}
}

export default App;
