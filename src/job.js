import React, { useState } from 'react';

function Item(props) {
  const [like, setLike] = useState(false)
  return (
    <div className="job-item shadow-sm">
      <div className="company-logo">
        <div className="logo-wrapper">
          <div className="logo-image shadow-sm">
            <i className="fab fa-microsoft fa-2x"></i>
          </div>
          <div className="company-size">
            14/150
        </div>
        </div>
      </div>
      <div className="company-details">
        <div className={like ? "liked" : "like"} onClick={() => setLike(!like)}>
          <i className="fas fa-heart"></i>
        </div>
        <div className="company-name">
          {props.company}
        </div>
        <div className="job-name">
          {props.title}
        </div>
        <div className="job-location">
          USA, Florida
        </div>
        <div className="job-footer d-md-flex">
          <div className="job-skill">
            <div className="skill-name">
              C#
          </div>
            <div className="skill-name">
              C++
          </div>
            <div className="skill-name">
              Python
          </div>
          </div>
          <div className="date-create mt-2">
            10/08/2020
        </div>
        </div>
      </div>
    </div>
  )
}

function Job(props) {
  return (
    <div className="job">
      {
        data.filter(x=>x.title.toLowerCase().includes(props.keyword.toLowerCase())).map(x =>
          <Item company={x.company} title={x.title} key={x.id} />
        )
      }
    </div>
  );
}

const data = [
  {
    id: 1,
    company: "Microsoft",
    title: "Sr.Back-end Developer"
  },
  {
    id: 2,
    company: "Google",
    title: "Full-Stack Developer"
  },
  {
    id: 3,
    company: "Amazone",
    title: "User Experience Designer"
  },
  {
    id: 4,
    company: "Alibaba",
    title: "Sr.User Interface Designer"
  },
  {
    id: 5,
    company: "Apple",
    title: "Web Developer"
  }
]

export default Job;
