import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import React from "react";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#0275d8",
    textAlign: "center",
  },
});

export default withNavigation(NavLink);
