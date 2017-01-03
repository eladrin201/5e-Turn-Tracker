import React, { PropTypes, Component } from 'react';
import EditableInput from './EditableInput.jsx';

export default class ActorItem extends Component {
  static propTypes = {
    actorData: PropTypes.object.isRequired
  }

  render() {
    // Maping this.props to variable for ease
    let actor = this.props.actorData;

    // Sections of form that will be conditionally toggled for the view
    let actorALL = (
      <div className="row">
        <div className="col-sm-2">
          <EditableInput val={actor.initiative} label="Init" type="number"/>
        </div>
        <div className="col-sm-3">
          <EditableInput val={actor.name} label="Name" type="text"/>
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.health} label="Health" type="number"/>
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.armor} label="Armor" type="number"/>
        </div>
      </div>
    );
    let actorNPC = (
      <div className="row">
        <div className="col-sm-2">
          <EditableInput val={actor.strength} label="STR" type="number"/>
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.dexterity} label="DEX" type="number"/>
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.constitution} label="CON" type="number"/>
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.intelligence} label="INT" type="number"/>
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.wisdom} label="WIS" type="number"/>
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.charisma} label="CHA" type="number"/>
        </div>
      </div>
    );

    // view return
    if (this.props.actorType === 'npc') {
      return (
        <li>
          {actorALL}
          {actorNPC}
        </li>
      );
    } else {
      return (
        <li>
          {actorALL}
        </li>
      );
    }

  }
}
