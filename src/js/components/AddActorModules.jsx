import React from 'react';
import ReactDOM from 'react-dom';

class AddActorForm extends React.Component {
  constructor() {
    super();
    this.state = ({
      name: '',
      health: null,
      ac: 0,
      initiative: 0,
      str: null,
      dex: null,
      con: null,
      INT: null,
      wis: null,
      cha: null
    });
    this.update     = this.update.bind(this);
    this.clearState = this.clearState.bind(this);
    this.addActor   = this.addActor.bind(this);
  }
  update(e) {
    this.setState = ({
      name: ReactDOM.findDOMNode(this.refs.name.refs.input).value,
      health: ReactDOM.findDOMNode(this.refs.health.refs.input).value,
      ac: ReactDOM.findDOMNode(this.refs.ac.refs.input).value,
      initiative: ReactDOM.findDOMNode(this.refs.initiative.refs.input).value,
      str:ReactDOM.findDOMNode(this.refs.str.refs.input).value,
      dex:ReactDOM.findDOMNode(this.refs.dex.refs.input).value,
      con:ReactDOM.findDOMNode(this.refs.con.refs.input).value,
      INT:ReactDOM.findDOMNode(this.refs.int.refs.input).value,
      wis:ReactDOM.findDOMNode(this.refs.wis.refs.input).value,
    });
  }
  clearState(e) {
    this.setState = ({
      name: '',
      health: null,
      ac: 0,
      initiative: 0,
      str: null,
      dex: null,
      con: null,
      INT: null,
      wis: null,
      cha: null
    })
  }
  addActor(e) {
    let actor = {
      name: ReactDOM.findDOMNode(this.refs.name.refs.input).value,
      health: ReactDOM.findDOMNode(this.refs.health.refs.input).value,
      ac: ReactDOM.findDOMNode(this.refs.ac.refs.input).value,
      initiative: ReactDOM.findDOMNode(this.refs.initiative.refs.input).value,
      str:ReactDOM.findDOMNode(this.refs.str.refs.input).value,
      dex:ReactDOM.findDOMNode(this.refs.dex.refs.input).value,
      con:ReactDOM.findDOMNode(this.refs.con.refs.input).value,
      INT:ReactDOM.findDOMNode(this.refs.int.refs.input).value,
      wis:ReactDOM.findDOMNode(this.refs.wis.refs.input).value,
    };
    console.log(actor);
  }
  render() {
    return(
      <form className="actor-wrapper">
        <div className="row">
          <div className="col-sm-4">
            <BootstrapForms ref="name"
              type="text"
              label="Monster or NPC Name"
              id="name"
              update={this.update}
              val={this.state.name} />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="health"
              type="number"
              label="Hit Points"
              id="health"
              update={this.update}
              val={this.state.health} />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="ac"
              type="number"
              label="AC"
              id="ac"
              update={this.update}
              val={this.state.ac} />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="initiative"
              type="number"
              label="Initiative"
              id="initiative"
              update={this.update}
              val={this.state.initiative} />
          </div>
        </div>

        <div className="row" id="monster-stats">
          <div className="col-sm-2">
            <BootstrapForms ref="str"
              type="number"
              label="STR"
              id="str"
              update={this.update}
              val={this.state.str} />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="dex"
              type="number"
              label="DEX"
              id="dex"
              update={this.update}
              val={this.state.dex} />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="con"
              type="number"
              label="CON"
              id="con"
              update={this.update}
              val={this.state.con} />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="INT"
              type="number"
              label="INT"
              id="int"
              update={this.update}
              val={this.state.INT} />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="wis"
              type="number"
              label="WIS"
              id="wis"
              update={this.update}
              val={this.state.wis} />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="cha"
              type="number"
              label="CHA"
              id="cha"
              ref="cha"
              update={this.update}
              val={this.state.cha} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-right">
            <a className="btn btn-default" onClick={this.clearState}>Clear</a>
            <a className="btn btn-primary" onClick={this.addActor}>Add Monster or NPC</a>
          </div>
        </div>
      </form>
    )
  }
}

class BootstrapForms extends React.Component {
  render() {
    let label = <label htmlFor={this.props.id}>{this.props.label}</label>;

    return (
      <div className="form-group">
        {label}
        <input
          ref="input"
          type={this.props.type}
          className="form-control"
          id={this.props.id}
          onChange={this.props.update}
          defaultValue={this.props.val} />
      </div>
    );
  }
}

export default AddActorForm;
