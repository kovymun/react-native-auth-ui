import { Text, TextInput, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

const Login = () => {
  return (
    <ScrollView
      contentContainerStyle={globalStyles.container}
      keyboardShouldPersistTaps="handled"
    >
      <AntDesign name="rocket1" size={48} color="#FF6F61" />
      <Text style={globalStyles.welcomeText}>Welcome Back</Text>
      <Text style={globalStyles.subtitle}>Sign in to your account</Text>

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
        textContentType="password"
      />

      <Pressable style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Sign In</Text>
      </Pressable>

      <Text style={globalStyles.linkText}>
        Don't have an account?{" "}
        <Link href="/register" style={globalStyles.link}>
          Register
        </Link>
      </Text>

      <Text style={globalStyles.terms}>
        By signing in, you agree to our Terms & Conditions.
      </Text>

      <Text style={globalStyles.footer}>
        © 2025 Koveshan Munsami. All rights reserved.
      </Text>
    </ScrollView>
  );
};

export default Login;
