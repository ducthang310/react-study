import React, { Component } from 'react';
import Config  from './components/config'

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="ui fixed inverted menu">
              <div className="header item">Brand</div>
              <div className="active item">Link</div>
          </header>

          <main role="main" className="main">
              <div className="ui container grid ">
                  <div className="ten wide column">
                      <form className="ui form segment">
                          <div className='equal width fields'>
                              <div className='field'>
                                  <label htmlFor='form-input-control-first-name'>First name</label>
                                  <input type='text' id='form-input-control-first-name' placeholder='First name'/>
                              </div>
                              <div className='field'>
                                  <label htmlFor='form-input-control-last-name'>Last name</label>
                                  <input type='text' id='form-input-control-last-name' placeholder='Last name'/>
                              </div>
                          </div>
                          <div className='equal width fields'>
                              <div className='field'>
                                  <label htmlFor='form-input-control-phone'>Phone</label>
                                  <input type='text' id='form-input-control-phone' placeholder='Phone'/>
                              </div>
                              <div className='field'>
                                  <label htmlFor='form-input-control-company'>Company</label>
                                  <input type='text' id='form-input-control-company' placeholder='Company'/>
                              </div>
                          </div>
                          <button className="ui button" type="submit">Submit</button>
                      </form>

                      <div className="ui segment">
                          <div className='ui header no-anchor'>
                              Result:
                          </div>

                          <div className='ui divider'/>

                          <div className="ui relaxed divided list n-list">
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

                          <div className='ui  transition visible dimmer'>
                              <div className='content'>
                                  <div className='ui text loader'>Loading</div>
                              </div>
                          </div>

                      </div>
                  </div>

                  <Config/>
              </div>

          </main>
      </div>
    );
  }
}

export default App;
