import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import "./index.css";
import BeatBox from "./BeatBox";
import AWS from 'aws-sdk';


ReactDOM.render(
    <Router>
        <BeatBox />
    </Router>,
    document.getElementById("root")
);
