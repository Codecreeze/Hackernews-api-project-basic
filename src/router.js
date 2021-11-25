import React from "react";
import { connect } from 'react-redux';
//Setup routers
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import MainAppBar from "./components/MainAppBar";
import Loader from "./components/loader";

//Include router pages
import Home from "./pages/home";    

const App = (props) => {
    return (
        <div>
            <MainAppBar />
            {props.loading ? <Loader /> : null }
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.general.loading
    }
}

export default connect(mapStateToProps)(App)