import React, { PropTypes, Component } from 'react';

export default class ActorItem extends Component {
  static propTypes = {
    actorData: PropTypes.object.isRequired
  }

  render() {
    let actor = this.props.actorData;

    return (
      <li>
        {actor.initiative}: {actor.name} - {actor.health}
      </li>
    );
  }
}
