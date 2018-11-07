import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import ListProjects from './ListProjects';
import Details from './Details';
const App = () => {
  const onBackHandle = (history, username) => {
    if(username){
      console.log(`Username: ${username}`); //eslint-disable-line
      history.push(`/${username}/projects`);
    }
    else
      history.push("/");
  }

  const onClickProject = (history, username, id, name) => {
    if(username && id){
      console.log(`Username: ${username} - Id: ${id} - ProjectName: ${name}`); //eslint-disable-line
      history.push(`/${username}/project/${id}/${name}`);
    }
  }
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" render={({ history }) => (
          <Search
            onSubmitUsername = {(username => (
              history.push(`/${username}/projects`))
            )}
          />
        )}/>
        <Route exact path="/:username/projects" render={({ history, match }) => (
          <ListProjects
            match = {match}
            history = {history}
            onBackHandle = {onBackHandle}
            onClickProject = {onClickProject}
          />
        )}/>
        <Route exact path="/:username/project/:id/:name" render={({history, match}) => (
          <Details
            match = {match}
            history = {history}
            onBackHandle = {onBackHandle}
          />
        )}/>

    </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));