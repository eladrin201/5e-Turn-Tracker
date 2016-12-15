import React, { PropTypes, Component } from 'react';

class BootstrapForms extends Component {
  render() {
    let label = <label htmlFor={this.props.id}>{this.props.label}</label>;

    return (
      <div className="form-group">
        {label}
        <input
          ref="input"
          type={this.props.type}
          className="form-control"
          id={this.props.id}
          onChange={this.props.update} />
      </div>
    );
  }
}

BootstrapForms.propType = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired
}

export default BootstrapForms;
