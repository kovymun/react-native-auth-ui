import { Text, StyleSheet, ScrollView, TextInput } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const register = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {" "}
      <AntDesign name="rocket1" size={48} color="#FF6F61" />
      <Text style={styles.welcomeText}>Create an Account</Text>
      <Text style={styles.subtitle}>Register below to get started</Text>
      {/* User Input for First Name */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#aaa"
        autoCapitalize="words" //Android
        textContentType="givenName" //ios
      />
      {/* User Input for Last Name | Family Name */}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        textContentType="familyName"
      />
      {/* Email Address */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
      />
      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        textContentType="newPassword"
      />
    </ScrollView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 16,
    marginBottom: 8,
    color: "#333333",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#757575",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#dddddd",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },
});
