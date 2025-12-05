import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function OtpVerificationScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { mobile } = route.params || {}; // optional if you want to show phone number

  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length === 6) {
      navigation.navigate("SelectApt");
    } else {
      alert("Enter valid 6-digit OTP");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>

      {mobile && <Text style={styles.subtitle}>Sent to {mobile}</Text>}

      <TextInput
        style={styles.otpInput}
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter 6-digit OTP"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.resend}>Resend OTP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const GREEN = "#2ecc71";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
    fontSize: 22,
    textAlign: "center",
    letterSpacing: 8,
    marginBottom: 30,
  },
  verifyBtn: {
    backgroundColor: GREEN,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  verifyText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  resend: {
    marginTop: 20,
    textAlign: "center",
    color: GREEN,
    fontWeight: "500",
  },
});
