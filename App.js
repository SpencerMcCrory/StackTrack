import { StatusBar } from "expo-status-bar";
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
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import FriendsScreen from "./FriendsScreen";
import StackTrackScreen from "./StackTrackScreen";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const CustomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#8ACEFF",
          borderTopWidth: 0,
        },
      }}
      tabBarOptions={{
        activeTintColor: "#021889",
        inactiveTintColor: "#000000",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/Home-Icon.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/Friends-Icon.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="StackTrack"
        component={StackTrackStack}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/StackTrack-Logo-No-Text.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
          tabBarVisible: route.state && route.state.index === 0 ? false : true, // Hide bottom navigation bar only on the first screen of StackTrackStack
        })}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/Explore-Icon.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/Profile-Icon.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const BackButton = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleBack} style={styles.backButton}>
      <Image
        source={require("./assets/Back-Icon.png")}
        style={styles.backButtonImage}
      />
    </TouchableOpacity>
  );
};

const StackTrackNavigator = createStackNavigator();

const StackTrackStack = () => {
  return (
    <StackTrackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTitle: "", // Remove the title
        headerTransparent: true, // Make the header transparent
      }}
    >
      <StackTrackNavigator.Screen
        name="StackTrack"
        component={StackTrackScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
      <StackTrackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
    </StackTrackNavigator.Navigator>
  );
};

const LoginScreen = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const presetUsername = "Stack";
  const presetPassword = "Pass";

  const handleLogin = () => {
    if (username === presetUsername && password === presetPassword) {
      // Perform login logic here
      setIsLoggedIn(true);
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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    // Render your login screen here
    return <LoginScreen setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <View style={styles.safeArea}>
      <NavigationContainer>
        <CustomTabBar />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
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
  backButton: {
    marginLeft: 15,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
});

export default App;
