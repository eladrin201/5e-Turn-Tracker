import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import ActorItem from './ActorItem.jsx';

export default class ActorList extends Component {
  static propTypes = {
    actors: PropTypes.array.isRequired,
    editActor: PropTypes.func.isRequired
  }

  updateActor = (e) => {
    let updatedActor = this.props.actors[0];

    updatedActor[e.target.id] = e.target.value;
    this.props.editActor(updatedActor);
  };

  render() {
    return (
      <ul className="actors-container">
        {this.props.actors.map(actor =>
          <ActorItem actorData={actor} key={actor.id} updateItem={this.updateActor} />
        )}
      </ul>
    );
  }
}
