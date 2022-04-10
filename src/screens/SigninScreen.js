import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage} />
          <AuthForm
            headerText="Sign In to Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In!"
            onSubmit={signin}
          />
          <NavLink text="No Account Yet? Sign Up Here!" routeName="Signup" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  contentContainerStyle: {
    paddingVertical: 150,
  },
});

export default SigninScreen;
