import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
          <Spacer>
            <Text h3 style={styles.title}>
              Sign Up for Tracker
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
          <Spacer />
          <Spacer>
            <Button title="Sign Up!" />
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
});

export default SignupScreen;
