
import React, {Component} from "react";

import Header from "./Header";
import Map from "./Map";
import Tracker from "./tracker-stats/TrackerStats";

// import {
//   MenuItem,
//   FormControl,
//   Select,
//   Card,
//   CardContent,
// } from "@material-ui/core";

class stats extends Component {
    state = {
      statistics: [],
      global: {},
      loading: true
    }
    componentDidMount() {
        fetch("https://disease.sh/v3/covid-19/countries").then(res => res.json()).then(res => {
        let statistics = [];
        res.forEach(data => {
          statistics.push(data);
        });
  
        this.setState({ statistics: statistics });
      });
      fetch("https://disease.sh/v3/covid-19/all").then(res => res.json()).then(res => {
        this.setState({ global: res, loading: false });
      });
    }
    componentWillUnmount() {
      this.setState({
        statistics: [],
        global: {},
        loading: true
      });
    }
  
    render() {
      return(
        <div className="App">
          {this.state.loading ? <h1>Please wait</h1>:
          <div>
            <Header/>
            <Map data={this.state.statistics}/>
            <Tracker data={this.state.global}/>
          </div>
          }
        </div>
      )
    }
  }
  
  export default stats;
