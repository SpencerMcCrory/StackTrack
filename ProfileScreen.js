import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  return (
    <LinearGradient colors={["#004B84", "#041929"]} style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("./assets/Aaron-Blue-Profile-Pic.png")}
          style={styles.profilePicture}
        />
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.username}>@Blue_Blue</Text>

        <Text style={styles.secondaryName}>Aaron Blue</Text>

        <Text style={styles.secondaryName}>Guitarist</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>10M</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>1K</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          purus diam. Donec ut ullamcorper lectus. Nunc sit amet nunc quam.
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 80,
  },
  username: {
    marginBottom: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  secondaryName: {
    marginBottom: 2,
    fontSize: 14,
    color: "white",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
  bioContainer: {
    marginBottom: 16,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    color: "white",
  },
});

export default ProfileScreen;
