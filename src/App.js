import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="ui fixed inverted menu">
              <div className="header item">Brand</div>
              <div className="active item">Link</div>
              <a className="item">Link</a>
              <div className="ui dropdown item" tabIndex="0">
                  Dropdown
                  <i className="dropdown icon"></i>
                  <div className="menu transition hidden" tabIndex="-1">
                      <div className="item">Action</div>
                      <div className="item">Another Action</div>
                      <div className="item">Something else here</div>
                      <div className="divider"></div>
                      <div className="item">Separated Link</div>
                      <div className="divider"></div>
                      <div className="item">One more separated link</div>
                  </div>
              </div>
          </header>

          <main role="main" className="main">
              <div className="ui container grid ">
                  <div className="ten wide column">
                      <form className="ui form">
                          <div className="field">
                              <label>First Name</label>
                              <input type="text" name="first-name" placeholder="First Name"/>
                          </div>
                          <div className="field">
                              <label>Last Name</label>
                              <input type="text" name="last-name" placeholder="Last Name"/>
                          </div>
                          <button className="ui button" type="submit">Submit</button>
                      </form>

                      <div className="ui relaxed divided list">
                          <div className="item">
                              <i className="large github middle aligned icon"></i>
                              <div className="content">
                                  <a className="header">Semantic-Org/Semantic-UI</a>
                                  <div className="description">Updated 10 mins ago</div>
                              </div>
                          </div>
                          <div className="item">
                              <i className="large github middle aligned icon"></i>
                              <div className="content">
                                  <a className="header">Semantic-Org/Semantic-UI-Docs</a>
                                  <div className="description">Updated 22 mins ago</div>
                              </div>
                          </div>
                          <div className="item">
                              <i className="large github middle aligned icon"></i>
                              <div className="content">
                                  <a className="header">Semantic-Org/Semantic-UI-Meteor</a>
                                  <div className="description">Updated 34 mins ago</div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="six wide column">
                      <form className="ui segment">
                          <input type="text" placeholder="Keyword" />
                          <Button type="submit" >Search</Button>
                      </form>
                  </div>
              </div>

          </main>
      </div>
    );
  }
}

export default App;
