import React, { PropTypes, Component } from 'react';

class RadioSlider extends Component {
  render() {
    let label1 = <label htmlFor={this.props.val1}>{this.props.label1}</label>;
    let label2 = <label htmlFor={this.props.val2}>{this.props.label2}</label>;

    return (
      <div className="radio-group">
        <p className="fieldset">
          <input ref="input"
            type="radio"
            name="switcher"
            value={this.props.val1}
            id={this.props.val1}
            onChange={this.props.update}
            defaultChecked />
          {label1}
          <input ref="input"
            type="radio"
            name="switcher"
            value={this.props.val2}
            id={this.props.val2}
            onChange={this.props.update} />
          {label2}
          <span className="switch"></span>
        </p>
      </div>
    );
  }
}

RadioSlider.propType = {
  val1: PropTypes.string.isRequired,
  val2: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired
}

export default RadioSlider;
