// Centralized stylesheet for shared UI styles used across screens.

import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#ffffff", // background of white
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 16,
    marginBottom: 8,
    color: "#333333", // this is intended to be a dark grey
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
