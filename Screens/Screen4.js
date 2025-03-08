import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Screen4 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [devotionals, setDevotionals] = useState([
    "Daily Doses of Rhema",
    "Low Community Chapel Ind.",
    "Daily Doses of Rhema",
    "Low Community Chapel Ind.",
    "Daily Doses of Rhema",
    "Low Community Chapel Ind.",
    "Daily Doses of Rhema",
  ]);

  const filteredDevotionals = devotionals.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <Text style={styles.title}>Select your preferred devotional</Text>

        </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search devotional"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <FontAwesome name="search" size={20} color="#868686" />
      </View>

      <FlatList
        data={filteredDevotionals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.devotionalItem}>
            <Text style={styles.devotionalText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      
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
  header:{
    width: "100%",
    top: 65,    
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 20,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#868686",
    width: "100%",
height: 48,
top: 70,
  },
  searchInput: {
    flex: 1,
    height: 44,
    paddingHorizontal: 10,
  },
  devotionalItem: {
    width: 373,
    padding: 15,
    borderWidth: 1,
    borderColor: "#0095A8",
top: 100,
    height: 89,

  },
  devotionalText: {
    fontSize: 16,
    color: "#474747",
  },
  beginButton: {
    width: "100%",
    height: 48,
    padding: 10,
    backgroundColor: "#004E60",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  beginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Screen4;