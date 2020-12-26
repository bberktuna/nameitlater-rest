import { StyleSheet, Dimensions, ColorPropType } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {},
  loginButtonText: {},
  dontHaveAnAccount: {},
  textInput: {
    width: width / 1.2,
    height: height / 15,
    marginBottom: height / 60,
  },
});

export default styles;
