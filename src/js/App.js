import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.actors = [];
    this.update = this.update.bind(this);
  }
  update(e) {
    // this.setState = ([
    //   initiative :
    // ]);
  }
  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <AddActor />
      </div>
    );
  }
}

class AddActor extends React.Component {
  clear() {
    this.setState = ([
      initiative: 0,
      name: null,
      health: null,
      ac: null,
      str: null,
      dex: null,
      con: null,
      int: null,

    ])
  }
  render() {
    return(
      <div className="actor-wrapper">
        <div className="row">
          <div className="col-sm-4">
            <BootstrapForms type="text" label="Monster or NPC Name" id="name" placeholder="" ref="name" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms type="number" label="Hit Points" id="health" placeholder="" ref="health" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms type="number" label="AC" id="ac" placeholder="" ref="ac" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms type="number" label="Initiative" id="intiative" placeholder="" ref="intiative" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            <BootstrapForms type="number" label="STR" id="str" placeholder="" ref="str" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms type="number" label="DEX" id="dex" placeholder="" ref="dex" />
          </div>
          <div className="col-sm-2">
             <BootstrapForms type="number" label="CON" id="con" placeholder="" ref="con" />
          </div>
          <div className="col-sm-2">
             <BootstrapForms type="number" label="INT" id="int" placeholder="" ref="int" />
          </div>
          <div className="col-sm-2">
             <BootstrapForms type="number" label="WIS" id="wis" placeholder="" ref="wis" />
          </div>
          <div className="col-sm-2">
             <BootstrapForms type="number" label="CHA" id="cha" placeholder="" ref="cha" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-right">
            <a className="btn btn-default" onClick={this.Clear}>Cancel</a>
            <a className="btn btn-primary" onClick={this.addActor}>Add Monster or NPC</a>
          </div>
        </div>
      </div>
    )
  }
}

class BootstrapForms extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default App;
