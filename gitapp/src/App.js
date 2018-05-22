import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import theme from './theme';
import './App.css';
class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="gitapp-Piyush"
          credentials="oNNmd9afg:22b783fd-7ed2-46fc-85bc-7ddb976e7897"
          type="gitapp-Piyush"
          theme={theme}
        >
          <nav className="navbar">
            <div className="title">gitApp</div>
          </nav>
        </ReactiveBase>
      </section>
    );
  }
}
export default App;