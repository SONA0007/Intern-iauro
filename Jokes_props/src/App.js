import './App.css';
import Jokes from './Jokes';

function App() {
  // Array of jokes
  const jokesArray = [
    {
      Setup: 'I got my daughter a fridge for her birthday.',
      Punchline: "I can't wait to see her face light up when she opens it.",
    },
    {
      Setup: 'How did the hacker escape the police?',
      Punchline: 'He just ransomware!',
    },
    {
      Setup: "Why don't pirates travel on mountain roads?",
      Punchline: 'Scurvy.',
    },
    {
      Setup: 'Why do bees stay in the hive in the winter?',
      Punchline: 'Because they are afraid of cold blood.',
    },
  ];

  return (
    <main>
      <h1>Inside the Jokes</h1>
      {/* Use .map() to render jokes dynamically */}
      {jokesArray.map((joke, index) => (
        <Jokes key={index} Setup={joke.Setup} Punchline={joke.Punchline} />
      ))}
    </main>
  );
}

export default App;
