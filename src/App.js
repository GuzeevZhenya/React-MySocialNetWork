import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { Main } from './Components/Main/Main';
import { Friends } from './Components/Friends/Friends';
import { Photo } from './Components/Photo/Photo';
import { Registration } from './Components/Registration/Registration';
import { useDate } from './Components/Clock/Clock';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const { date, time } = useDate();
  const dispatch = useDispatch();
  const registrationReducer = useSelector((state) => state.registrationReducer);

  const navigation = (
    <div>
      <nav className="mainNavigation">
        <h1>Evergloam</h1>
        <NavLink activeClassName="active-link" to="/main">
          Main
        </NavLink>
        <NavLink activeClassName="active-link" name="friends" to="/friends">
          Friends
        </NavLink>
        <NavLink activeClassName="active-link" to="/photo">
          Photo
        </NavLink>
      </nav>
      <Route path="/main" exact component={() => <Main />}></Route>
      <Route path="/friends" exact component={() => <Friends />}></Route>
      <Route path="/photo" exact component={() => <Photo />}></Route>
    </div>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {date}: {time}
        </div>
       {registrationReducer.exces ? <div>{navigation}</div> : <Registration />}
      </div>
    </BrowserRouter>
  );
}

export default App;
