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
          defaultValue={this.props.val}
          onChange={this.props.editAction} />
      </div>
    );
  }
}

EditableInput.propTypes = {
  val: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // editAction: Props.func.isRequired,
  type: PropTypes.string.isRequired
}

export default EditableInput;
