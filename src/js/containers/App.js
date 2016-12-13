import React, { PropTypes } from 'react';
import AddActorForm from './components/ActorForm.jsx';
import ActorList from './components/ActorList.jsx';

const App = ({actors, actions}) => (
  <div>
    <AddActorForm />
    <ActorList />
  </div>
)
