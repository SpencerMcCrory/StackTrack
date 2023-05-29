import React from "react";
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
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function ExploreScreen(props) {
  const handleSearch = () => {
    // Perform search functionality
  };
  return (
    <LinearGradient colors={["#004B84", "#041929"]} style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.content}>
          <Image
            source={require("./assets/StackTrack-Print.png")}
            style={[styles.image, styles.nav]}
            resizeMode="contain"
          />

          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Icon
              name="search"
              size={24}
              color="white"
              style={styles.magnify}
            />
          </TouchableOpacity>
          <Text style={styles.videos}>Explore</Text>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 20,
  },
  image: {
    width: 150,
  },
  searchButton: {
    position: "absolute",
    top: 10,
    right: 10,
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
  nav: {
    marginTop: 5,
    marginBottom: 20,
  },
  videos: {
    color: "white",
    fontWeight: 800,
    fontSize: 20,
  },
  magnify: {
    marginRight: -5,
  },
});
export default ExploreScreen;
