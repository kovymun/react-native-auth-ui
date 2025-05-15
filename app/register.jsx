import { Text, StyleSheet, ScrollView } from "react-native";

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
});
