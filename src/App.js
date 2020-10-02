import React from "react";
import Header from './components/Molecules/Header/AppHeader'
import DashboardPage from './Pages/DashboardPage'
import MyStoriesPage from './Pages/MyStoriesPage'
import BlogDetailPage from './Pages/BlogDetailPage'
import LandingPage from './Pages/LandingPage'
import NewBlogPage from './Pages/NewBlogPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  return (
    <React.Fragment>
      <Router>
        <Header isAuthenticated={isAuthenticated}  currentUserName={user}/>
        {
          !isAuthenticated ?
            <LandingPage /> :
            <Switch>
              <Route path="/" exact component={DashboardPage} />
              <Route path="/dashboard" exact component={DashboardPage} />
              <Route path="/dashboard/:email" exact component={DashboardPage} />
              <Route path="/blogdetail/:postId" exact component={BlogDetailPage} />
              <Route path="/new" exact component={NewBlogPage} />
              <Route path="/mystories"  exact component={MyStoriesPage} />
            </Switch>
        }

      </Router>
    </React.Fragment>
  );
}

export default App;
