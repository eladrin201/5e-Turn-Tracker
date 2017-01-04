import React, { PropTypes, Component } from 'react';
import EditableInput from './EditableInput.jsx';

let actor = {};

export default class ActorItem extends Component {
  static propTypes = {
    actorData: PropTypes.object.isRequired,
    updateItem: PropTypes.func.isRequired
  }

  render() {
    // Maping this.props to variable for ease
    actor = this.props.actorData;
    console.log(actor);

    // Sections of form that will be conditionally toggled for the view
    let actorALL = (
      <div className="row">
        <div className="col-sm-2">
          <EditableInput val={actor.initiative}
            label="Init"
            id="initiative"
            type="number"
            update={this.props.updateItem} />
        </div>
        <div className="col-sm-3">
          <EditableInput val={actor.name}
            label="Name"
            id="name"
            type="text"
            update={this.props.updateItem} />
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.health}
            label="Health"
            id="health"
            type="number"
            update={this.props.updateItem} />
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.armor}
            label="Armor"
            id="armor"
            type="number"
            update={this.props.updateItem} />
        </div>
      </div>
    );
    let actorNPC = (
      <div className="row">
        <div className="col-sm-2">
          <EditableInput val={actor.strength}
            label="STR"
            id="strength"
            type="number"
            update={this.props.updateItem} />
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.dexterity}
            label="DEX"
            id="dexterity"
            type="number"
            update={this.props.updateItem} />
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.constitution}
            label="CON"
            id="constitution"
            type="number"
            update={this.props.updateItem} />
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.intelligence}
            label="INT"
            id="intelligence"
            type="number"
            update={this.props.updateItem} />
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.wisdom}
            label="WIS"
            id="wisdom"
            type="number"
            update={this.props.updateItem} />
        </div>
        <div className="col-sm-2">
          <EditableInput val={actor.charisma}
            label="CHA"
            id="charisma"
            type="number"
            update={this.props.updateItem} />
        </div>
      </div>
    );

    // view return
    if (actor.actorType === 'npc') {
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
