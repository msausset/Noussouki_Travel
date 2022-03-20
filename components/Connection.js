import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import Style from "../Style";

export default class ConnectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: null, //mail
      pwd: null, //password
      txtInput: null,
    };
  }

  setTxtInputMail(txtInputMail) {
    this.setState({ txtInputMail });
  }

  setTxtInputPwd(txtInputPwd) {
    this.setState({ txtInputPwd });
  }

  render() {
    return (
      <View style={Style.centerContainer}>
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setTxtInputMail(text)}
          placeholder="Mail"
        />

        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setTxtInputPwd(text)}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />

        <Pressable
          style={Style.btnOk}
          onPress={() => this.props.navigation.navigate("ACCUEIL")}
        >
          <Text style={Style.text}>CONNEXION</Text>
        </Pressable>
      </View>
    );
  }
}
