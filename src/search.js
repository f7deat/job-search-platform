import React, { useState } from 'react';

function Search(props) {
  const [isShowContract, setIsShowContract] = useState(false)
  const [contract, setContract] = useState('Contract')
  const [isShowKeyword, setIsShowKeyword] = useState(false)
  const [isShowMoney, setIsShowMoney] = useState(false)
  return (
    <div className="search shadow-sm">
      <div className="search-keyword w-100">
        <div className="search-icon" onClick={() => setIsShowKeyword(!isShowKeyword)}>
          <i className="fas fa-search"></i>
        </div>
        <Keyword isShowKeyword={isShowKeyword} setKeyword={props.setKeyword} />
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
          <div className="search-icon" onClick={() => setIsShowMoney(!isShowMoney)}>
            <i className="fas fa-tag"></i>
          </div>
          <div className="seach-text">
            500$ - 800$
        </div>
          <Money isShowMoney={isShowMoney} />
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

function Money(props) {
  return (
    <div className={props.isShowMoney ? "" : "d-none"}>
      <div className="shadow-sm money-wrapper">
        <input type="range" className="custom-range" />
      </div>
    </div>
  )
}

function Keyword(props) {
  return (
    <div className={props.isShowKeyword ? "" : "d-none"}>
      <div className="result">
        <input type="text" className="result-input" placeholder="input keyword" onChange={(e) => {
          props.setKeyword(e.currentTarget.value)
        }} />
        <div className="result-wrapper">
          <div className="result-item">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
