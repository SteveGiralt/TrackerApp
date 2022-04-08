import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
          <Spacer>
            <Text h3 style={styles.title}>
              Sign Up for TrackIt
            </Text>
          </Spacer>
          <Input
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
          <Spacer />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          {state.errorMessage ? (
            <Text style={styles.error}>{state.errorMessage}</Text>
          ) : null}
          <Spacer>
            <Button
              title="Sign Up!"
              onPress={() => signup({ email, password })}
            />
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.link}>Have an account? Sign In instead</Text>
            </TouchableOpacity>
          </Spacer>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  contentContainerStyle: {
    paddingVertical: 150,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 15,
    marginLeft: 15,
  },
  link: {
    color: "#0275d8",
    textAlign: "center",
  },
});

export default SignupScreen;
