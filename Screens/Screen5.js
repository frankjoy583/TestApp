import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Screen5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Daily Doses of Rhema</Text>
      </View>
      <Text style={styles.subtitle}>Love Community Chapel International</Text>

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
          Activate and start reading (GHS 0.00)
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
    marginTop: "20%",
    alignItems: "center",
    flexDirection: "row",
  },
  devotionalImage: {
    width: "50%",
    height: "25%",
    alignSelf: "center",
    marginBottom: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B2B2B",
    flex: 1,
    marginLeft: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#001E29",
    marginTop: 10,
    margin: 40,
  },
  content: {
    justifyContent: "center",
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000000",
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
    marginTop: "35%",
  },
  activateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Screen5;
