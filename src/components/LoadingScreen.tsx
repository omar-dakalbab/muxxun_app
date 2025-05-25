import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

type LoadingScreenProps = {
  message?: string;
  backgroundColor?: string;
  spinnerColor?: string;
};

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function LoadingScreen({
  message = "Loading...",
  backgroundColor = "#ffffff",
  spinnerColor = "#000000",
}: LoadingScreenProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("@/assets/gradient.png")} // Your centered gradient image
          style={styles.gradientImage}
          resizeMode="contain"
        />
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color={spinnerColor} />
          <Text style={[styles.message, { color: spinnerColor }]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 200,
    height: 200,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  gradientImage: {
    width: WIDTH,
    height: HEIGHT * 0.7,
    position: "absolute",
  },
  overlay: {
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "500",
  },
});
