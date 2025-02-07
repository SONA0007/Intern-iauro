import './App.css';
import Jokes from './Jokes';

function App() {
  return (
   <main>
    <h1>Inside the Jokes</h1>
    <Jokes 
    Setup= "I got my daughter a fridge for her birthday."
    Punchline= "I can't wait to see her face light up when she opens it."/>
    
    <Jokes 
    Setup="How did the hacker escape the police?"
    Punchline="He just ransomware!"/>

    <Jokes 
    Setup= "Why don't pirates travel on mountain roads?"
    Punchline= "Scurvy."/>

    <Jokes
    Setup= "Why do bees stay in the hive in the winter?"
    Punchline="Because they are afraid of cold blood."/>

    </main>

  );
}

export default App;
