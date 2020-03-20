import React from "react";
import { Text } from "react-native";
import { Linking } from "expo";

export default class Anchor extends React.Component {
  _handlePress = () => {
    Linking.openURL(this.props.href ? this.props.href : this.props.children);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Text
        style={{ color: "blue" }}
        {...this.props}
        onPress={this._handlePress}
      >
        {"\n\n"}{this.props.children}{"\n\n"}
      </Text>
    );
  }
}
