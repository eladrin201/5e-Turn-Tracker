import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import ActorItem from './ActorItem.jsx';

export default class ActorList extends Component {
  static propTypes = {
    actors: PropTypes.array.isRequired
  }

  render() {
    return (
      <ul className="actors-container">
        {this.props.actors.map(actor =>
          <ActorItem actorData={actor} key={actor.id} />
        )}
      </ul>
    );
  }
}
