
import React, {Component} from "react";

import Header from "./Header";
import Map from "./Map";


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
            {/* <Tracker data={this.state.global}/> */}
          </div>
          }
        </div>
      )
    }
  }
  
  export default stats;
//  render() {
//     return (
//       <React.Fragment>
//         <div className="account-home-btn d-none d-sm-block">
//         <Link to="/" className="text-primary"><i className="mdi mdi-home h1"></i></Link>
//         </div>

//         <div className="app">
//             <div className="app__left">
//                 <div className="app__header">
//                     <p className="text-muted  f-20 mt-3">COVID-19 Statistics</p>
//                     <FormControl className="app__dropdown">
//                       <Select
//                         variant="outlined"
//                         value="abc"
//                       >
//                        <MenuItem value="worldwide">Worldwide</MenuItem>
//                        <MenuItem value="worldwide">World</MenuItem>
//                        <MenuItem value="worldwide">Woooo</MenuItem>
//                        <MenuItem value="worldwide">Wore</MenuItem>
//                        {/* {countries.map((country) => (
//                        <MenuItem value={country.value}>{country.name}</MenuItem>
//                        ))} */}
//                        </Select>
//                     </FormControl>
//                 </div>
//             </div>
//         </div>

//       </React.Fragment>
//     );
//    }
//  }
