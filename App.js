import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleCreate = () => {
    const requestBody = {
      email: email,
      password: password,
    };

    // Send the POST request
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        placeholderTextColor="#79767C"
        editable={true}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        placeholderTextColor="#79767C"
        editable={true}
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        onPress={handleCreate}
        style={styles.createProfileButton}
      >
        <Text style={styles.createProfileButtonText}>Profil Oluştur</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    paddingHorizontal: 10,
    marginTop: 10,
    alignSelf: "center",
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "#00000024",
    borderRadius: 15,
    color: "#79767C",
  },
  createProfileButton: {
    width: "80%",
    height: 56,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 15,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  createProfileButtonText: {
    color: "white",
    fontSize: 22,
  },
});
