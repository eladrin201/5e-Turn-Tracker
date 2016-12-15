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
      initiative: ReactDOM.findDOMNode(this.refs.initiative.refs.input).value,
      strength: ReactDOM.findDOMNode(this.refs.strength.refs.input).value,
      dexterity: ReactDOM.findDOMNode(this.refs.dexterity.refs.input).value,
      constitution: ReactDOM.findDOMNode(this.refs.constitution.refs.input).value,
      intelligence: ReactDOM.findDOMNode(this.refs.intelligence.refs.input).value,
      wisdom: ReactDOM.findDOMNode(this.refs.wisdom.refs.input).value,
      charisma: ReactDOM.findDOMNode(this.refs.charisma.refs.input).value
    }
    this.props.addActor(curActor);
  };

  clearFrom = () => {
    // Currently broken, must fix
    document.getElementById("add-actor").reset();
  };

  render() {
    return(
      <form className="actor-wrapper" id="add-actor">
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
            <BootstrapForms ref="strength"
              type="number"
              label="STR"
              id="strength" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="dexterity"
              type="number"
              label="DEX"
              id="dexterity" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="constitution"
              type="number"
              label="CON"
              id="constitution" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="intelligence"
              type="number"
              label="INT"
              id="intelligence" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="wisdom"
              type="number"
              label="WIS"
              id="wisdom" />
          </div>
          <div className="col-sm-2">
            <BootstrapForms ref="charisma"
              type="number"
              label="CHA"
              id="charisma" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-right">
            <a className="btn btn-default" onClick={this.clearForm}>Clear</a>
            <a className="btn btn-primary" onClick={this.addActor}>Add Monster or NPC</a>
          </div>
        </div>
      </form>
    )
  }
}
