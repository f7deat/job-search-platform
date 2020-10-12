import React, { useState } from 'react';

function Search() {
  const [isShowContract, setIsShowContract] = useState(false)
  const [contract, setContract] = useState('Contract')
  return (
    <div className="search shadow-sm">
      <div className="search-title w-100">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="d-none d-md-block w-100">
        <div className="search-location">
          <div className="search-icon">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="seach-text">
            USA, Florida
        </div>
        </div>
      </div>
      <div className="d-none d-md-block w-100">
        <div className="search-contract" onClick={() => setIsShowContract(!isShowContract)}>
          <div className="search-icon">
            <i className="fas fa-suitcase"></i>
          </div>
          <div className="seach-text">
            {contract}
          </div>
          <Contract isShowContract={isShowContract} setContract={setContract} />
        </div>
      </div>
      <div className="d-none d-md-block w-100">
        <div className="search-money">
          <div className="search-icon">
            <i className="fas fa-tag"></i>
          </div>
          <div className="seach-text">
            500$ - 800$
        </div>
          <Money />
        </div>
      </div>
      <div className="search-button">
        Search
        </div>
    </div>
  );
}

function Contract(props) {
  return (
    <div className="shadow-sm dropdown-contract">
      <div className={props.isShowContract ? "" : "d-none"}>
        <div className="dropdown-contract-item" onClick={() => props.setContract("Full-Time")}>
          Full-Time
      </div>
        <div className="dropdown-contract-item" onClick={() => props.setContract("Part-Time")}>
          Part-Time
      </div>
      </div>
    </div>
  )
}

function Money() {
  return (
    <div className="d-none">

    </div>
  )
}

export default Search;
