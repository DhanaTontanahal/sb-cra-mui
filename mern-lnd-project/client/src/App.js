import React, { useState } from "react";
import Header from './components/Molecules/Header/AppHeader'
import DashboardPage from './components/Pages/DashboardPage'
import BlogDetailPage from './components/Pages/BlogDetailPage'
import ClapsPage from './components/Pages/ClapsPage'
import HighlightsPage from './components/Pages/HighlightsPage'
import ResponsesPage from './components/Pages/ResponsesPage'
import LandingPage from './components/Pages/LandingPage'
import NewBlogPage from './components/Pages/NewBlogPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <React.Fragment>
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        {
          !isAuthenticated ?
            <LandingPage /> :
            <Switch>
              <Route path="/" exact component={DashboardPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/blogdetail/:postId" component={BlogDetailPage} />
              <Route path="/claps" component={ClapsPage} />
              <Route path="/highlights" component={HighlightsPage} />
              <Route path="/responses" component={ResponsesPage} />
              <Route path="/new" component={NewBlogPage} />
            </Switch>
        }

      </Router>
    </React.Fragment>
  );
}

export default App;
