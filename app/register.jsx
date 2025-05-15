import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

import { Link } from "expo-router";

import { AntDesign } from "@expo/vector-icons";

const register = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <AntDesign name="rocket1" size={48} color="#FF6F61" />
      <Text style={styles.welcomeText}>Create an Account</Text>
      <Text style={styles.subtitle}>Register below to get started</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        textContentType="givenName"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        textContentType="familyName"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        textContentType="newPassword"
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <Text style={styles.linkText}>
        Already have an account?{" "}
        <Link href="/" style={styles.link}>
          Sign in here
        </Link>
      </Text>
      <Text style={styles.terms}>
        By creating an account you agree to the Terms of Service and Privacy
        Policy.
      </Text>
      <Text style={styles.footer}>
        © 2025 Koveshan Munsami. All rights reserved.
      </Text>
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

  button: {
    width: "100%",
    backgroundColor: "#FF6F61",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  linkText: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#444",
    marginTop: 12,
  },
  link: {
    color: "#FF6F61",
    fontWeight: "600",
  },
  terms: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#888888",
    textAlign: "center",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  footer: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#aaa",
    textAlign: "center",
    marginTop: 16,
  },
});
