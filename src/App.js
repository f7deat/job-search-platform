import React, {useState} from 'react';
import './app.scss';
import Header from './header';
import Search from './search';
import Job from './job';
import Details from './details';

function App() {
  const [keyword, setKeyword] = useState('')
  return (
    <div className="app">
      <Header />
      <div className="row mt-4">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="container-fluid">
            <Search setKeyword={setKeyword}/>
            <div className="row mt-4">
              <div className="col-md-5">
                <Job keyword={keyword}/>
              </div>
              <div className="col-md-7">
                <Details />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default App;
