require("file-loader?name=[name].[ext]!../index.html");
import React from "react";
import ReactDOM from "react-dom";
import NbaAutocomplete from "./NbaAutocomplete";

ReactDOM.render(<NbaAutocomplete />, document.getElementById("root"));
