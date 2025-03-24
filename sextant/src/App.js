import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Exhibit 1"></Exhibit>
                <Exhibit name="Exhibit 2"></Exhibit>
                <Exhibit name="Exhibit 3"></Exhibit>
            </div>
        );
    }
 
    IPAddress() {
      return (
        <div className="min-h-screen bg-white">
      <Banner />
      <div className="p-4">
        <Exhibit heading="Public IP Addresses">
          <IPAddress type="ipv4" />
          <IPAddress type="ipv6" />
        </Exhibit>
      </div>
    </div>
      );
    }
    
}

export default App;