import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TextInput } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import { RootStackParamList } from "../navigation/types";

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<NavProp>();

  const handleSendOtp = () => {
    navigation.navigate('OTPVerification'); // ✅ FIXED
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      {/* <TextInput
        placeholder="Enter phone"
        style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
      /> */}

      <Pressable
        onPress={handleSendOtp}
        style={{
          marginTop: 20,
          backgroundColor: "#2e7d32",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
          Send OTP
        </Text>
      </Pressable>
    </View>
  );
}
