import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
// import { getToken } from './utils/storage';
// import { useLocation, useHistory } from 'react-router-dom';

export default function App() {
  // const location = useLocation();
  // const history = useHistory();

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500  text-gray-600  font-nunito">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/react-tailwind-mycomplaint" component={Home} />
      </Switch>
    </div>
  );
}
