import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Screen5 = ({ handleNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Doses of Rhema</Text>
        <Text style={styles.subtitle}>Love Community Chapel International</Text>
      </View>
      <Image
        source={require("../assets/rhama.png")}
        style={styles.devotionalImage}
      />
      <View style={styles.content}>
        <Text style={styles.description}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. This section
          will contain description of the author or church.
        </Text>
      </View>

      <TouchableOpacity style={styles.activateButton}>
        <Text style={styles.activateButtonText}>
          Activate and start reading (₦0.00)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    width: "100%",
    top: 65,
    alignItems: "center",
  },
  devotionalImage: {
    width: 50,
    height: 50,
 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#004E60",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#868686",
    marginTop: 5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#474747",
    lineHeight: 24,
  },
  activateButton: {
    width: "100%",
    height: 48,
    padding: 10,
    backgroundColor: "#004E60",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  activateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Screen5;
