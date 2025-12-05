import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/neighbr-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to{"\n"}Neighbr</Text>
      <Text style={styles.subtitle}>Your private apartment marketplace</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="+91 9876543210"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OTPVerification", { mobile: phone })}
      >
        <Text style={styles.buttonText}>Login with OTP</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        By continuing you agree to our <Text style={styles.link}>Terms</Text> &{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
    color: "#000",
  },
  subtitle: {
    fontSize: 15,
    color: "#444",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 52,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  button: {
    width: "100%",
    height: 52,
    backgroundColor: "#2E8B57", // Neighbr green
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  terms: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    width: "80%",
  },
  link: {
    color: "#2E8B57",
    fontWeight: "600",
  },
});
