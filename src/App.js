import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import { Friends } from "./Components/Friends/Friends";
import { Photo } from "./Components/Photo/Photo";
import { Registration } from "./Components/Registration/Registration";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="mainNavigation">
          <h1>Evergloam</h1>
          <Link to="/main">Main</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/photo">Photo</Link>
        </nav>
        <Route path="/main" exact component={() => <Main />}></Route>
        <Route path="/friends" exact component={() => <Friends />}></Route>
        <Route path="/photo" exact component={() => <Photo />}></Route>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
