import { StyleSheet } from "react-native";
import React, { useState } from "react";
import Spacer from "./Spacer";
import { Text, Input, Button } from "react-native-elements";

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={styles.title}>
          {headerText}
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

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 15,
    marginLeft: 15,
  },
  title: {
    textAlign: "center",
    marginBottom: 50,
  },
});
