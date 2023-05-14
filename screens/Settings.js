import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { UIHeader } from "../components";
import { useState } from "react";
import { colors, fontSizes } from "../contants";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Settings() {
  const [isEnabledLockApp, setEnabledLockApp] = useState(true);
  const [isUseFingerprint, setUseFingerprint] = useState(false);
  const [isEnabledChangePassword, setEnabledChangePassword] = useState(true);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        top: 25,
      }}
    >
      <UIHeader title="Settings" />
      <ScrollView>
        <View
          style={{
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "red",
              paddingStart: 10,
              borderBottomWidth: 0.5,
              borderColor: colors.inactive,
              paddingVertical: 5,
            }}
          >
            Common
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="globe"
            style={{ marginStart: 10 }}
            size={20}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Language
          </Text>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingEnd: 10,
              opacity: 0.5,
            }}
          >
            English
          </Text>
          <Icon
            name="chevron-right"
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
            size={18}
            color={"black"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="cloud"
            style={{ marginStart: 10 }}
            size={18}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Environment
          </Text>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingEnd: 10,
              opacity: 0.5,
            }}
          >
            Production
          </Text>
          <Icon
            name="chevron-right"
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
            size={18}
            color={"black"}
          />
        </View>
        <View
          style={{
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "red",
              paddingStart: 10,
              borderBottomWidth: 0.5,
              borderColor: colors.inactive,
              paddingVertical: 5,
            }}
          >
            Account
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="phone"
            style={{ marginStart: 10 }}
            size={18}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Phone number
          </Text>
          <View style={{ flex: 1 }} />
          <Icon
            name="chevron-right"
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
            size={18}
            color={"black"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="envelope"
            style={{ marginStart: 10 }}
            size={18}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Email
          </Text>
          <View style={{ flex: 1 }} />
          <Icon
            name="chevron-right"
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
            size={18}
            color={"black"}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="sign-out-alt"
            style={{ marginStart: 10 }}
            size={18}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Sign out
          </Text>
          <View style={{ flex: 1 }} />
          <Icon
            name="chevron-right"
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
            size={18}
            color={"black"}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "red",
              paddingStart: 10,
              borderBottomWidth: 0.5,
              borderColor: colors.inactive,
              paddingVertical: 5,
            }}
          >
            Security
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            name="door-closed"
            style={{ marginStart: 10 }}
            size={18}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Lock app in background
          </Text>
          <View style={{ flex: 1 }} />
          <Switch
            trackColor={{ false: colors.inactive, true: colors.twitter }}
            thumbColor={isEnabledLockApp ? colors.facebook : colors.switch}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setEnabledLockApp(!isEnabledLockApp);
            }}
            value={isEnabledLockApp}
            style={{ marginEnd: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            name="fingerprint"
            style={{ marginStart: 10 }}
            size={18}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Use fingerprint
          </Text>
          <View style={{ flex: 1 }} />
          <Switch
            trackColor={{ false: colors.inactive, true: colors.twitter }}
            thumbColor={isUseFingerprint ? colors.facebook : colors.switch}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setUseFingerprint(!isUseFingerprint);
            }}
            value={isUseFingerprint}
            style={{ marginEnd: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            name="lock"
            style={{ marginStart: 10 }}
            size={18}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Change password
          </Text>
          <View style={{ flex: 1 }} />
          <Switch
            trackColor={{ false: colors.inactive, true: colors.twitter }}
            thumbColor={
              isEnabledChangePassword ? colors.facebook : colors.switch
            }
            //ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setEnabledChangePassword(!isEnabledChangePassword);
            }}
            value={isEnabledChangePassword}
            style={{ marginEnd: 10 }}
          />
        </View>
        <View
          style={{
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "red",
              paddingStart: 10,
              borderBottomWidth: 0.5,
              borderColor: colors.inactive,
              paddingVertical: 5,
            }}
          >
            Misc
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="file-alt"
            style={{ marginStart: 10 }}
            size={20}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Term of Service
          </Text>
          <View style={{ flex: 1 }} />
          <Icon
            name="chevron-right"
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
            size={18}
            color={"black"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="passport"
            style={{ marginStart: 10 }}
            size={20}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h5,
              color: "black",
              paddingStart: 10,
            }}
          >
            Open source licenses
          </Text>
          <View style={{ flex: 1 }} />
          <Icon
            name="chevron-right"
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
            size={18}
            color={"black"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
