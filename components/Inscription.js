import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import Style from "../Style";
import inscriptionUsers from "../services/apiUsers";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      mail: null,
      phone: null,
      pwd: null,
      pwdConfirmation: null,
    };
  }

  submitHandler() {
    inscriptionUsers.Inscription(this.state);
  }

  render() {
    return (
      <View style={Style.centerContainer}>
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({ firstName: text })}
          placeholder="PRÉNOM"
        />
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({ lastName: text })}
          placeholder="NOM"
        />
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({ mail: text })}
          placeholder="MAIL"
        />
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({ phone: text })}
          placeholder="TÉLÉPHONE"
          keyboardType="number-pad"
        />
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({ pwd: text })}
          placeholder="MOT DE PASSE"
          secureTextEntry={true}
        />
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({ pwdConfirmation: text })}
          placeholder="CONFIRMER LE MOT DE PASSE"
          secureTextEntry={true}
        />

        <Pressable style={Style.btnOk} onPress={() => this.submitHandler()}>
          <Text style={Style.text}>S'INSCRIRE</Text>
        </Pressable>
      </View>
    );
  }
}
