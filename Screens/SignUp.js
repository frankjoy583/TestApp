import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/hand.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Register</Text>
      </View>

      <TouchableOpacity
        style={[styles.socialButton, { backgroundColor: "#FFFFFF" }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/google.png")}
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Register with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.socialButton, { backgroundColor: "#2D4486" }]}
      >
        <Image
          source={require("../assets/facebook.png")}
          style={styles.icon}
        />
        <Text style={[styles.socialButtonText, { color: "#fff" }]}>
          Register with Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.socialButton, { backgroundColor: "#1D9BF0" }]}
      >
        <Image
          source={require("../assets/white.png")}
          style={styles.icon}
        />
        <Text style={[styles.socialButtonText, { color: "#fff" }]}>
          Register with Twitter
        </Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.signUpText}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: -120,
  },
  image: {
    borderRadius: 90,
    height: 170,
    width: 170,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
    width: "100%",
    justifyContent: "center",
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    width: 34,
    height: 34,
    right: 25,
  },
  footerText: {
    color: "#666",
    marginTop: 20,
  },
  signUpText: {
    color: "#1da1f2",
    fontWeight: "bold",
  },
});

export default SignUp;
