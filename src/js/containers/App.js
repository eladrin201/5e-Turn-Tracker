import React, { PropTypes } from 'react';
import AddActorForm from '../components/ActorForm.jsx';
import ActorList from '../components/ActorList.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActorActions from '../actions';

const App = ({actors, actions}) => (
  <div>
    <AddActorForm addActor={actions.addActor} />
    <ActorList actors={actors.actors} editActor={actions.editActor} />
  </div>
)

App.PropTypes = {
  actors: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  actors: state.actors
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActorActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
