import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class EditableInput extends Component {

  render() {
    let label = <label className="micro-label">{this.props.label}</label>;

    return (
      <div className="form-group">
        {label}
        <input
          ref="input"
          type={this.props.type}
          className="form-control hidden-input"
          id={this.props.id}
          defaultValue={this.props.val}
          onChange={this.props.update}
           />
      </div>
    );
  }
}

EditableInput.propTypes = {
  val: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default EditableInput;
