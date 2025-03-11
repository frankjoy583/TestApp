import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Screen4 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [devotionals, setDevotionals] = useState([
    "Daily Doses of Rhema, Love Community Chapel Intl.",
    "Daily Doses of Rhema, Love Community Chapel Intl.",
    "Daily Doses of Rhema, Love Community Chapel Intl.",
    "Daily Doses of Rhema, Love Community Chapel Intl.",
    "Daily Doses of Rhema, Love Community Chapel Intl.",
    "Daily Doses of Rhema, Love Community Chapel Intl.",
  ]);

  const navigation = useNavigation();

  const filteredDevotionals = devotionals.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome
              name="arrow-circle-left"
              size={24}
              color="#333"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Select your preferred devotional</Text>
        </View>

        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="#868686" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search devotional"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus={true}
          />
        </View>

        <FlatList
          data={filteredDevotionals}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.devotionalItem}
              onPress={() => navigation.navigate("Screen5")}
            >
              <Image
                source={require("../assets/rhama.png")}
                style={styles.devotionalImage}
              />
              <View style={styles.devotionalTextContainer}>
                <Text style={styles.devotionalText}>Daily Doses of Rhema</Text>
                <Text style={styles.devotionalSubText}>
                  Love Community Chapel Intl.
                </Text>
              </View>
              <FontAwesome
                name="chevron-right"
                size={14}
                color="#0095A8"
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          )}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  header: {
    top: 70,
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#868686",
    width: "90%",
    height: 40,
    marginTop: 85,
    margin: 30,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  devotionalItem: {
    flexDirection: "row",
    alignItems: "center",
    width: 373,
    borderBottomWidth: 2,
    borderColor: "#0095A8",
    height: 85,
  },
  devotionalImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  devotionalTextContainer: {
    flex: 1,
  },
  devotionalText: {
    fontSize: 17,
    color: "#474747",
  },
  devotionalSubText: {
    fontSize: 16,
    color: "#474747",
  },
  arrowIcon: {
    marginLeft: "auto",
  },
});

export default Screen4;
