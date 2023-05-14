import { View, Text, Image, SafeAreaView } from "react-native";
import { colors, fontSizes } from "../contants";
import {
  user as UserRepository,
  population as PopulationRepository,
} from "../reponsitories";
import { useEffect, useState } from "react";
import { UIHeader } from "../components";
import convertDateTimeToString from "../utilies/DateTime";
export default function Profile() {
  const [user, setUser] = useState({});
  const { name, email, gender, url, phone, address } = user;
  useEffect(() => {
    UserRepository.getUserDetail().then((responseUser) =>
      setUser(responseUser)
    );
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        top: 25,
        backgroundColor: colors.white,
      }}
    >
      <UIHeader title="Profile" />
      <View
        style={{
          width: 140,
          height: 140,
          borderWidth: 5,
          borderColor: colors.switch,
          borderRadius: 80,
          marginVertical: 20,
          alignSelf: "center",
        }}
      >
        <Image
          style={{
            width: 130,
            height: 130,
            resizeMode: "cover",
            alignSelf: "center",
            borderRadius: 80,
            borderWidth: 5,
            borderColor: colors.white,
          }}
          source={{
            uri: url,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          borderWidth: 1,
          borderColor: colors.switch,
          borderRadius: 20,
          marginHorizontal: 30,
          paddingVertical: 15,
        }}
      >
        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: fontSizes.h4,
              marginBottom: 5,
              marginStart: 15,
            }}
          >
            Full Name
          </Text>
          <Text
            style={{
              borderRadius: 15,
              backgroundColor: "#e6f9ff",
              paddingVertical: 8,
              paddingStart: 15,
            }}
          >
            {name}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: fontSizes.h4,
              marginBottom: 5,
              marginStart: 15,
            }}
          >
            Email
          </Text>
          <Text
            style={{
              borderRadius: 15,
              backgroundColor: "#e6f9ff",
              paddingVertical: 8,
              paddingStart: 15,
            }}
          >
            {email}
          </Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: fontSizes.h4,
              marginBottom: 5,
              marginStart: 15,
            }}
          >
            Gender
          </Text>
          <Text
            style={{
              borderRadius: 15,
              backgroundColor: "#e6f9ff",
              paddingVertical: 8,
              paddingStart: 15,
            }}
          >
            {gender}
          </Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: fontSizes.h4,
              marginBottom: 5,
              marginStart: 15,
            }}
          >
            Address
          </Text>
          <Text
            style={{
              borderRadius: 15,
              backgroundColor: "#e6f9ff",
              paddingVertical: 8,
              paddingStart: 15,
            }}
          >
            {address}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: fontSizes.h4,
              marginBottom: 5,
              marginStart: 15,
            }}
          >
            Phone
          </Text>
          <Text
            style={{
              borderRadius: 15,
              backgroundColor: "#e6f9ff",
              paddingVertical: 8,
              paddingStart: 15,
            }}
          >
            {phone}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
