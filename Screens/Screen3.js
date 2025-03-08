import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const Screen3 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState("30 minutes before time");
const navigation = useNavigation();

  const reminderOptions = [
    "5 minutes before time",
    "10 minutes before time",
    "20 minutes before time",
    "30 minutes before time",
    "60 minutes before time",
  ];

  const handleReminderSelect = (item) => {
    setSelectedReminder(item);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set your preferred devotion time</Text>

      <View style={styles.timeContainer}>
        <TouchableOpacity style={styles.timeButton}>
          <Text style={styles.timeText}>01</Text>
          <Text style={styles.timeText}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeButton}>
          <Text style={styles.timeText2}>02</Text>
          <Text style={styles.colonText}>:</Text>
          <Text style={styles.timeText2}>22</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeButton}>
          <Text style={styles.timeText}>03</Text>
          <Text style={styles.timeText}>23</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reminderContainer}>
        <Text style={styles.reminderText}>Remind me</Text>
        <TouchableOpacity style={styles.reminderBefore} onPress={() => setIsModalVisible(true)}>
          <Text>{selectedReminder}</Text>
          <FontAwesome name="chevron-down" size={14} color="#868686" style={{ marginLeft: 170 }} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={reminderOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleReminderSelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.beginButton} onPress={() => navigation.navigate('Screen4')}>
      <Text style={styles.beginButtonText}>Let's Begin</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  timeContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  timeButton: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  timeText: {
    fontSize: 48,
    fontWeight: "400",
    color: "#E2E2E2",
    marginHorizontal: 50,
  },
  timeText2: {
    fontSize: 45,
    fontWeight: "400",
    color: "#0095A8",
    marginHorizontal: 40,
  },
  colonText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#0095A8",
    marginHorizontal: 5,
  },
  reminderContainer: {
    width: "100%",
    marginBottom: 30,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#474747",
    width: 90,
    height: 28,
  },
  reminderBefore: {
    padding: 10,
    backgroundColor: "#E2E2E2",
    borderRadius: 10,
    gap: 10,
    height: 44,
    borderColor: "#868686",
    borderWidth: 1,
    flexDirection: "row",
  },
  beginButton: {
    width: 375,
    height: 48,
    padding: 10,
    backgroundColor: "#004E60",
    borderRadius: 10,
    alignItems: "center",
    Top: 668
  },
  beginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Screen3;