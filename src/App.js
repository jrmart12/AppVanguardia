import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import ListProjects from './ListProjects';
import Details from './Details';
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={({ history }) => (
          <Search
            onSubmitUsername={username => {
              history.push(`/${username}/projects`);
            }}
          />
        )}
      />
      <Route exact path="/:username/projects" component={ListProjects}/>
      <Route exact path="/:username/project/:id/:name" component={Details}/>
    </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));