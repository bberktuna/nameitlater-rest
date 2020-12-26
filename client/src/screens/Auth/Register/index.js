import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./styles";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = async () => {
    if (password !== password2) {
      console.log("Password do not match");
    } else {
      console.log("success");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.textInput}
        label="Name"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.textInput}
        label="Email"
        mode="outlined"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.textInput}
        label="Password"
        mode="outlined"
      />
      <TextInput
        placeholder="Confirm Password"
        value={password2}
        onChangeText={(text) => setPassword2(text)}
        style={styles.textInput}
        label="Confirm Password"
        mode="outlined"
      />
      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={styles.registerButton}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <View style={deepBottom}>
        <TouchableOpacity
          onPress={onSubmit}
          style={styles.alreadyHaveAnAccount}
        >
          <Text>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
