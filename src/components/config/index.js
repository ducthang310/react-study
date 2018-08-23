import React, { Component } from 'react';

class Config extends Component {
  render() {
    return (
        <div className="six wide column">
            <div className="ui segment">
                <div className="ui header">
                    Config
                </div>
                <div className="ui divider"/>

                <form className="ui form">
                    <div className="field">
                        Choose mode: <b/>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" className="hidden" id="mode-test" name="mode" value="test"/>
                            <label htmlFor="mode-test">Test</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" className="hidden" id="mode-live" name="mode" value="live"/>
                            <label htmlFor="mode-live">Live</label>
                        </div>
                    </div>
                </form>

                <div className="ui divider"/>

                <form className="ui form">
                    <div className='field'>
                        <label htmlFor='form-input-control-api-1'>API 1:</label>
                        <input type='text' id='form-input-control-api-1' placeholder='Url'/>
                    </div>
                    <div className='field'>
                        <label htmlFor='form-input-control-last-name'>API 2</label>
                        <input type='text' id='form-input-control-api-2' placeholder='Url'/>
                    </div>
                    <button className="ui button" type="submit">Apply</button>
                </form>
            </div>
        </div>
    );
  }
}

export default Config;
