import React from "react";
import { View, TextInput, Pressable, Text, Alert } from "react-native";
import Style from "../Style";
import inscriptionUsers from "../services/apiUsers";
import phoneOK from "../services/Regex";

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
    phoneOK.Validation(this.state.phone);
    inscriptionUsers.Inscription(this.state);
    Alert.alert(
      "Succès",
      `Inscription prise en compte avec les renseignements suivants : \n` +
        this.state.firstName +
        "\n" +
        this.state.lastName +
        "\n" +
        this.state.phone +
        "\n"
    );
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
