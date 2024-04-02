import React from 'react';
import './App.css'; // Import CSS file
import logo from './logo.svg'; // Import logo

function App() {
  const checkLinkedInConnection = () => {
    // Logic to check if user is connected on LinkedIn
    var connected = Math.random() < 0.00; // 5% chance of being connected
    var resultMessage = connected ? "Yes, you are connected with me on LinkedIn!" : "No, you are not connected with me on LinkedIn. Connect now: <a href='https://www.linkedin.com/in/muhammad-rashid-daha/' target='_blank'>Follow me on LinkedIn</a>";
    document.getElementById("result").innerHTML = resultMessage;
  }

  const subscribeToChannel = () => {
    // Redirect users to subscribe to the YouTube channel
    window.open('https://youtube.com/@codewithmuh?sub_confirmation=1', '_blank');
  }

  const toGithubRepo = () => {
    // Redirect users to subscribe to the YouTube channel
    window.open('https://github.com/codewithmuh/react-aws-ec2-nginx.git', '_blank');
  }

  return (
    <div className="App"> {/* Add class to center content */}
      <header>
        <h1>Welcome to <span>CodeWithMuh</span> Youtube Channel!</h1>
      </header>
      <main>
        <img src={logo} className="App-logo" alt="logo" /> {/* Use imported logo */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Xn3Xj9Trepc?si=3ObvKIX4iKU-nHbf" frameBorder="0" allowFullScreen title="YouTube video"></iframe>
        <p>You are watching my latest video on <span>AWS EC2</span>.</p>
        <h2>LinkedIn Connection Game</h2>
        <p>Are you connected with me on LinkedIn?</p>
        <button onClick={checkLinkedInConnection}>Check Connection</button>
        <p id="result"></p>
        <button onClick={subscribeToChannel}>Subscribe to my channel</button>
        <button onClick={toGithubRepo}>Github Repo</button>
      </main>
      <footer>
        <p>&copy; 2024 <span>CodeWithMuh</span></p>
      </footer>
    </div>
  );
}

export default App;
