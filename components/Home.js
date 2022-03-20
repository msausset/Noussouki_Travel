import React from "react";

import { View, Text, Pressable } from "react-native";

import Style from "../Style";

export default class Home extends React.Component {
  render() {
    return (
      <View style={Style.centerPressable}>
        <Pressable
          style={Style.button}
          onPress={() => this.props.navigation.navigate("SE CONNECTER")}
        >
          <Text style={Style.text}>SE CONNECTER</Text>
        </Pressable>

        <Pressable
          style={Style.button}
          onPress={() =>
            this.props.navigation.navigate("SE CONNECTER EN TANT QU'INVITÉ")
          }
        >
          <Text style={Style.text}>SE CONNECTER EN TANT QU'INVITÉ</Text>
        </Pressable>

        <Pressable
          style={Style.button}
          onPress={() => this.props.navigation.navigate("INSCRIPTION")}
        >
          <Text style={Style.text}>INSCRIPTION</Text>
        </Pressable>
      </View>
    );
  }
}
