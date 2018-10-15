import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const SquareButton = ({ color, textColor, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 16 }}>
      <View
        style={{
          borderRadius: 5,
          backgroundColor: color,
          height: 50,
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text style={{ color: textColor, alignSelf: 'center' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

SquareButton.propTypes = {
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default SquareButton;
