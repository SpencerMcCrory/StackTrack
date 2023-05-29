import React, { useState } from "react";
import {
  Image,
  Keyboard,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  presetUsername = "Stack";
  presetPassword = "Pass";

  const handleLogin = () => {
    if (username === presetUsername && password === presetPassword) {
      // Perform login logic here
      isLoggedIn = true;
      return isLoggedIn;
    } else {
      Alert.alert("Invalid credentials");
    }
    setUsername("");
    setPassword("");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <LinearGradient colors={["#004B84", "#041929"]} style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <View style={styles.content}>
            <Image
              source={require("./assets/StackTrack-Logo.png")}
              style={styles.image}
            />

            <TextInput
              placeholder="Username"
              placeholderTextColor="white"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={[styles.input, { color: "white" }]}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="white"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              style={[styles.input, { color: "white" }]}
            />
            <Button title="Login" onPress={handleLogin} />
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 216,
    height: 253,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    minWidth: "80%",
    maxWidth: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: "red",
  },
});

export default LoginScreen;
