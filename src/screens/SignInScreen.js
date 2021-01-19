import React from "react";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, View, Dimensions,ScrollView } from "react-native";
import Flags from "react-native-flags";
import CustomButton from "../components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";

const SignInScreen = (props) => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Image source={require("../../assets/images/signin.png")}/>
            <View style={styles.captionContainer}>
                <Text style={styles.caption}>Get your groceries with nectar</Text>
            </View>
            <View style={styles.contactContainer}>
                <Flags code="IN" size={32}/>
                <Text style={styles.countryCode}>+91</Text>
                <View style={styles.contactInputContainer}>
                <TextInput
                    style={styles.contactInput}
                    maxLength={10}
                    keyboardType="numeric"
                    onFocus={() => {
                    props.navigation.navigate("Number");
                    }}
                />
                </View>
            </View>
            <View style={styles.secondryTextContainer}>
                <Text style={styles.secondryText}>Or connect with social media</Text>
            </View>
            <CustomButton title="Continue with Google" style={styles.googleButton}>
                <Icon name='google' color='white' size={25}/>
            </CustomButton>
            <CustomButton
                title="Continue with Facebook"
                style={styles.facebookButton}
            >
                <Icon name='facebook' color='white' size={25}/>
            </CustomButton>
        </View>
    </ScrollView>
  );
};

SignInScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FCFCFC",
  },
  captionContainer: {
    alignSelf: "flex-start",
    width: Dimensions.get("window").width / 1.6,
    marginLeft: Dimensions.get("window").width / 15,
    marginTop: Dimensions.get("window").height / 15,
  },
  caption: {
    fontFamily: "Gilroy-Regular",
    fontSize: 26,
    fontWeight: "600",
    color: "#030303",
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#E2E2E2",
    width: Dimensions.get("window").width / 1.2,
    height: Dimensions.get("window").height / 20,
    marginTop: Dimensions.get("window").height / 70,
  },
  contactInputContainer: {
    height: Dimensions.get("window").height / 20,
    width: Dimensions.get("window").width * 0.64,
    alignItems: "flex-start",
  },
  countryCode: {
    fontFamily: "Gilroy-Medium",
    fontSize: 18,
    marginBottom: Dimensions.get("window").height / 300,
    marginHorizontal: Dimensions.get("window").width / 40,
    color: "#030303",
  },
  contactInput: {
    fontFamily: "Gilroy-Medium",
    fontSize: 18,
    color: "#030303",
  },
  secondryTextContainer: {
    marginVertical: Dimensions.get("window").height / 20,
  },
  secondryText: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    fontWeight: "600",
    color: "#828282",
  },
  googleButton: {
    backgroundColor: "#5383EC",
    width: Dimensions.get("window").width / 1.2,
  },
  facebookButton: {
    backgroundColor: "#4A66AC",
    marginTop: Dimensions.get("window").height / 50,
    width: Dimensions.get("window").width / 1.2,
  },
});

export default SignInScreen;
