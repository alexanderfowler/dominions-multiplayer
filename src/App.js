import './App.css';
import WelcomeBar from "./WelcomeBar/WelcomeBar";
import AppContent from "./AppContent/AppContent";

function App() {
  return (
    <div className="App">
        <div className="App-body">
            <WelcomeBar/>
            <AppContent/>
      </div>
    </div>
  );
}

// TODO 1 put on github with a private repo
// TODO 2 figure out how to host a game from some sort of cloud server
// TODO 3 c++ backend with a "create game" API call (should make a record of the game in a file)
// TODO 3b wire frontend so it can create games
// TODO 4 monitoring which listens for connections, checks the port, and starts up a server for the correct game when some user tries to connect on that port
// TODO 5 c++ backend on the cloud server with a "list maps" API call
// TODO 6 modify create games API call so that it has all needed parameters; this should include the map
// TODO 7 modify the monitoring job so that it also periodically starts games so that they can do the host thing
// TODO 8 modify the monitoring job so that it also kills games older than 1 year
// TODO 9 c++ backend list games (active, open) API call

export default App;
