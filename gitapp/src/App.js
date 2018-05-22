import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';//ReactiveBase Search Thingy added
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
          // Adding the DataSearch here
    <div className="flex row-reverse app-container">
        <div className="results-container">
            <DataSearch
                componentId="repo"
                filterLabel="Search"
                dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
                placeholder="Search Repos"
                autosuggest={false}
                iconPosition="left"
                URLParams
                className="data-search-container results-container"
                innerClass={{
                    input: 'search-input',
                }}
            />
        </div>
    </div>
        </ReactiveBase>
      </section>
    );
  }
}
export default App;