import logo from './logo.png';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="badge"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeLN667vywLsdvD6U6lsVpWlpdorvwVwxGtnHyh9Q6YCpLSGg/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class = "App-Fade">
          <div class="square">
               <p class="text">Interested? <br></br>
              CLICK HERE TO SIGN UP</p>

          </div>
          </div>

        </a>
        
        <p class="App-FadeI">
          <SocialIcon url="https://github.com/ksthakkar/rb-game-dev"  className="badge" target="_blank" rel="noopener noreferrer" />&nbsp;
          <SocialIcon url="mailto:ksthakkar52@gmail.com" target="_blank"  className="badge"rel="noopener noreferrer" />&nbsp;
          <SocialIcon url="https://www.instagram.com/rbhs.gamedev/"   className="badge" target="_blank" rel="noopener noreferrer" />&nbsp;

        </p>


      </header>
    </div>
  );
}

export default App;
