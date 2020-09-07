import React from "react";
import Header from './components/Molecules/Header/AppHeader'
import DashboardPage from './components/Pages/DashboardPage'
import BlogDetailPage from './components/Pages/BlogDetailPage'
import ClapsPage from './components/Pages/ClapsPage'
import HighlightsPage from './components/Pages/HighlightsPage'
import ResponsesPage from './components/Pages/ResponsesPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        {/* <Grid>
          <Nav />
        </Grid> */}

        {/* <Typography style={{ display: 'block', padding: '5px', zIndex: '10' }} align="center" display="initial" gutterBottom={true}>
          {(window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length)).toUpperCase()}
        </Typography> */}
        <Switch>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/blogdetail/:id" component={BlogDetailPage} />
          <Route path="/claps" component={ClapsPage} />
          <Route path="/highlights" component={HighlightsPage} />
          <Route path="/responses" component={ResponsesPage} />
        </Switch>
      </Router>
    </React.Fragment>



  );
}

export default App;
