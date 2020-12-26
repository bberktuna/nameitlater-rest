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

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.replace("Feed")}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Register")}
        style={styles.dontHaveAnAccount}
      >
        <Text>Don't have an account? Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
