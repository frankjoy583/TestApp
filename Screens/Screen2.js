import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/hand.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Login</Text>
      </View>

      <TouchableOpacity
        style={[styles.socialButton, { backgroundColor: "#FFFFFF" }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/google.png")}
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.socialButton, { backgroundColor: "#2D4486" }]}
      >
        <Image
          source={require("../assets/facebook.png")}
          style={styles.icon}
        />
        <Text style={[styles.socialButtonText, { color: "#fff" }]}>
          Sign in with Facebook
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
          Sign in with Twitter
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.footerText}>
          Dont have an account?{" "}
          <Text style={styles.signUpText}>Sign up</Text>
        </Text>
      </TouchableOpacity>
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

export default Screen2;
