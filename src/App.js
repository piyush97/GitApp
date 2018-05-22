import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';//ReactiveBase Search Thingy added
import theme from './theme';
import Results from './components/Results'; //result component added
import Footer from './components/Footer';
import './App.css';
class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="PiyushApp"
          credentials="QLZRFlbxX:299ef607-115d-49a9-840a-481be326118f"
          type="gitxplore-latest" 
          theme={theme}
        >      {/*taking data from gitxplore dataset appbase*/}

          <nav className="navbar">
            <div className="title">gitApp</div>
          </nav>
         { /*Adding the DataSearch here*/}
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
           <Results/>

        </div>
    </div>
           <Footer></Footer>

        </ReactiveBase>
        

      </section>
    );
  }
}
export default App;