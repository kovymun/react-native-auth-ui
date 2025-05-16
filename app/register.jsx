import { Text, ScrollView, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

const register = () => {
  return (
    <ScrollView
      contentContainerStyle={globalStyles.container}
      keyboardShouldPersistTaps="handled"
    >
      <AntDesign name="rocket1" size={48} color="#FF6F61" />
      <Text style={globalStyles.welcomeText}>Create an Account</Text>
      <Text style={globalStyles.subtitle}>Register below to get started</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="First Name"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        textContentType="givenName"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        textContentType="familyName"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Email Address"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        textContentType="newPassword"
      />
      <Pressable style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Register</Text>
      </Pressable>
      <Text style={globalStyles.linkText}>
        Already have an account?{" "}
        <Link href="/" style={globalStyles.link}>
          Sign in here
        </Link>
      </Text>
      <Text style={globalStyles.terms}>
        By creating an account you agree to the Terms of Service and Privacy
        Policy.
      </Text>
      <Text style={globalStyles.footer}>
        © 2025 Koveshan Munsami. All rights reserved.
      </Text>
    </ScrollView>
  );
};

export default register;
