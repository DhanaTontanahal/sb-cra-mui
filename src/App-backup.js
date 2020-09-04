import React from "react";
import Header from './components/Molecules/Header/AppHeader'
import Home from './components/Pages/HomePage'
import DashboardPage from './components/Pages/DashboardPage'
import BlogDetailPage from './components/Pages/BlogDetailPage'
import ClapsPage from './components/Pages/ClapsPage'
import HighlightsPage from './components/Pages/HighlightsPage'
import ResponsesPage from './components/Pages/ResponsesPage'
import Nav from './components/Molecules/Navigation/Navigation'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Typography from './components/Atoms/Typography/Typography'

function App() {
  return (
    <React.Fragment>
      <BlogDetailPage />
    </React.Fragment>



  );
}

export default App;
