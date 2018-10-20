import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      <br/>
      {props.repos.map((ele) => {
        return <div><a href={`${ele.html_url}`}>{ele.name}</a></div>
      })}
    </div>
  </div>
)

export default RepoList;