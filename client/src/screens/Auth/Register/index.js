import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import styles from "./styles";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={styles.registerButton}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={styles.alreadyHaveAnAccount}
      >
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
