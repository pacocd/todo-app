import React, { Component } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEditingFieldsData } from '../redux/actions';

export class TodoInput extends Component {
  static propTypes = {
    fieldName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ]),
    type: PropTypes.string.isRequired,
    setEditingFieldsData: PropTypes.func.isRequired
  };

  state = {
    value: this.props.value
  };

  componentDidMount() {
    const { fieldName, value } = this.props;

    this.props.setEditingFieldsData(fieldName, value);
  }

  handleOnChange = value => {
    const { fieldName } = this.props;
    this.props.setEditingFieldsData(fieldName, value);
    this.setState({ value });
  };

  getGenericInput = (keyboardType, title, value) => {
    return (
      <View>
        <Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 12 }}>
          {title}
        </Text>
        <TextInput
          placeholder="Write here"
          value={`${value}`}
          keyboardType={keyboardType}
          onChangeText={this.handleOnChange}
          underlineColorAndroid="white"
          multiline
        />
      </View>
    );
  };

  getSwitch = (title, value) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 12 }}>
          {title}
        </Text>
        <Switch value={value} onValueChange={this.handleOnChange} />
      </View>
    );
  };

  renderInput(type, title, value) {
    switch (type) {
      case 'switch':
        return this.getSwitch(title, value);
      case 'numeric':
        return this.getGenericInput('numeric', title, value);
      default:
        return this.getGenericInput('default', title, value);
    }
  }

  render() {
    const { title, type } = this.props;
    const { value } = this.state;
    return (
      <View style={{ margin: 16 }}>{this.renderInput(type, title, value)}</View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEditingFieldsData: (fieldName, value) =>
      dispatch(setEditingFieldsData(fieldName, value))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(TodoInput);
