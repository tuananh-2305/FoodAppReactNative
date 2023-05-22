import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { fontSizes, images, colors } from "../contants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useEffect, useState } from "react";
import { isValidEmail, isValidPassword } from "../utilies/Validations";
import { database } from "./../firebase/firebase";
import { getDatabase, ref, set, get, child } from "firebase/database";

export default function Login(props) {
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [userId, setUserId] = useState([]);

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const isValidOk = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) === true &&
    isValidPassword(password) === true;

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsShow(false);
    });
    const dbRef = ref(database);
    get(child(dbRef, `User`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserId(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLogin = () => {
    if (email == userId.email && password == userId.password) {
      navigate("UITab");
    } else {
      alert("Email or password is incorrect ! \nPlease test again");
    }
  };

  const { navigation, router } = props;
  const { navigate, goBack } = navigation;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 100 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: 15,
          flex: keyboardIsShow ? 45 : 30,
        }}
      >
        <Text
          style={{ fontSize: fontSizes.h1, fontWeight: "bold", width: "50%" }}
        >
          Already have an Account ?
        </Text>
        <Image
          source={images.login}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </View>
      <View style={{ flex: 30 }}>
        <View style={{ marginHorizontal: 25 }}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: colors.primary,
              fontWeight: "bold",
            }}
          >
            Email :
          </Text>
          <TextInput
            placeholder="email@gmail.com"
            style={{ color: colors.placeholder, paddingVertical: 8 }}
            onChangeText={(text) => {
              setErrorEmail(
                isValidEmail(text) ? " " : "Email not in correct format"
              );
              setEmail(text);
            }}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.primary,
              marginBottom: 10,
            }}
          />
          <Text
            style={{ color: "red", fontSize: fontSizes.h5, marginBottom: 15 }}
          >
            {errorEmail}
          </Text>
        </View>
        <View style={{ marginHorizontal: 25 }}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: colors.primary,
              fontWeight: "bold",
            }}
          >
            Password :
          </Text>
          <TextInput
            onChangeText={(text) => {
              setPassword(text);
              setErrorPassword(
                isValidPassword(text)
                  ? " "
                  : "Password must be at least 3 characters"
              );
            }}
            placeholder="Enter your password"
            secureTextEntry={true}
            style={{ color: colors.placeholder, paddingVertical: 8 }}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.primary,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h5,
              marginBottom: 15,
            }}
          >
            {errorPassword}
          </Text>
        </View>
      </View>
      {keyboardIsShow == false ? (
        <View style={{ flex: 20, top: 25 }}>
          <TouchableOpacity
            style={{
              backgroundColor: isValidOk() ? colors.primary : colors.inactive,
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              alignSelf: "center",
              borderRadius: 15,
            }}
            disabled={isValidOk() == false}
            onPress={handleLogin}
          >
            <Text
              style={{
                color: "#fff",
                paddingVertical: 8,
                fontSize: fontSizes.h4,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
            }}
            onPress={() => navigate("Register")}
          >
            <Text
              style={{
                paddingVertical: 8,
                fontSize: fontSizes.h4,
                alignSelf: "center",
                padding: 8,
                color: colors.primary,
              }}
            >
              New user? Register now
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 20,
          }}
        ></View>
      )}
      {keyboardIsShow == false ? (
        <View style={{ flex: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              marginHorizontal: 25,
            }}
          >
            <View
              style={{ backgroundColor: "black", flex: 1, height: 1 }}
            ></View>
            <Text style={{ fontSize: fontSizes.h5, marginHorizontal: 5 }}>
              Use orther methods ?
            </Text>
            <View
              style={{ backgroundColor: "black", flex: 1, height: 1 }}
            ></View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Icon
              name="facebook"
              size={35}
              style={{ color: colors.facebook }}
            />
            <View style={{ width: 10 }} />
            <Icon name="google" size={35} style={{ color: colors.primary }} />
          </View>
        </View>
      ) : (
        <View style={{ flex: 20 }}></View>
      )}
    </KeyboardAvoidingView>
  );
}
