import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import BootstrapForms from './BootstrapForms.jsx';

export default class AddActorForm extends Component {
  static propTypes = {
    addActor: PropTypes.func.isRequired
  }

  addActor = () => {
    let curActor = {
      name: ReactDOM.findDOMNode(this.refs.name.refs.input).value,
      health: ReactDOM.findDOMNode(this.refs.health.refs.input).value,
      armor: ReactDOM.findDOMNode(this.refs.armor.refs.input).value,
      initiative: ReactDOM.findDOMNode(this.refs.armor.refs.input).value
    }
    this.props.addActor(curActor);
  }

  render() {
    return(
      <form className="actor-wrapper">
        <div className="row">
          <div className="col-sm-4">
            <BootstrapForms ref="name"
              type="text"
              label="Monster or NPC Name"
              id="name" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="health"
              type="number"
              label="Hit Points"
              id="health" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="armor"
              type="number"
              label="AC"
              id="armor" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="initiative"
              type="number"
              label="Initiative"
              id="initiative" />
          </div>
        </div>

        <div className="row" id="monster-stats">
          <div className="col-sm-2">
            <BootstrapForms ref="str"
              type="number"
              label="STR"
              id="str" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="dex"
              type="number"
              label="DEX"
              id="dex" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="con"
              type="number"
              label="CON"
              id="con" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="INT"
              type="number"
              label="INT"
              id="int" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="wis"
              type="number"
              label="WIS"
              id="wis" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="cha"
              type="number"
              label="CHA"
              id="cha"
              ref="cha" />
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

// export default AddActorForm;
