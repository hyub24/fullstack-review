import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  componentDidMount() {
    this.getRepos()
  }

  getRepos() {
    $.ajax({
      url: '/repos',
      method: 'GET',
      success: (results) => {
        this.setState({
          repos: results
        })
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    var username = {
      username: term
    }

    $.ajax({
      url: '/repos',
      method: 'POST',
      data: JSON.stringify(username),
      contentType: 'application/json',
      success: () => {
        this.getRepos();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));