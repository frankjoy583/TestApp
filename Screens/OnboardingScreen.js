import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { CommonActions } from "@react-navigation/native";
import Screen2 from "../Screens/Screen2";
import Screen3 from "../Screens/Screen3";

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const swiperRef = React.useRef(null);

  const completeOnboarding = async () => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        })
      );
    }, 100);
  };

  const handleNext = () => {
    swiperRef.current.scrollBy(1);
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        <View style={{ backgroundColor: "#F7FEFF" }}>
          <Image
            source={require("../assets/hand.png")}
            style={styles.image}
          />
          <View style={{ margin: 20 }}>
            <Text style={styles.title}>
              Connect with <Text style={{ fontWeight: "bold" }}>Spiral </Text>
            </Text>
            <Text style={styles.subtitle}>
              coneect with God on a daily basis whiles earning points.
            </Text>
          </View>

          <View style={styles.numbersContainer}>
            <TouchableOpacity style={styles.payTouch} onPress={handleNext}>
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
       
        <View style={[styles.slide, { backgroundColor: "#F7FEFF" }]}>
         <Screen2 />
        </View>
        <View style={[styles.slide, { backgroundColor: "#F7FEFF" }]}>
       <Screen3 />
        </View>
      </Swiper>
      
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#001E29",
    fontFamily: "EB Garamond",
    lineHeight: 50,
  },
  subtitle: {
    fontSize: 18,
    color: "#696969",
    fontFamily:"Nunito",
    fontWeight: "400",
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  doneButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "blue",
    borderRadius: 5,
    alignSelf: "center",
  },
  doneButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  payTouch: {
    backgroundColor: "#004E60",
    margin: 10,
    width: "70%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: 450,
    height: 600,
  },
});
