import React from 'react';
import './app.scss';
import Header from './header';
import Search from './search';
import Job from './job';
import Details from './details';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mt-4">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Search />
          <div className="row mt-4">
            <div className="col-md-5">
              <Job />
            </div>
            <div className="col-md-7">
              <Details />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default App;
