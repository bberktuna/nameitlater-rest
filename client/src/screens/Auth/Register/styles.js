import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {},
  registerButtonText: {},
  alreadyHaveAnAccount: {},
  textInput: {
    width: width / 1.2,
    height: height / 15,
    marginBottom: height / 60,
  },
  deepBottom: {
    bottom: 0,
  },
});

export default styles;
