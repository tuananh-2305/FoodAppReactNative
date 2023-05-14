import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors, fontSizes } from "../../contants";
import AntDesign from "react-native-vector-icons/AntDesign";
import { changeColorStatus } from "../../utilies/CheckStatus";
export default function FoodItem(props) {
  const { name, url, status, price, website, sosialNetworks } = props.food;
  const { onPress } = props;
  return (
    <TouchableOpacity
      style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      <Image
        style={{
          height: 100,
          width: 100,
          resizeMode: "cover",
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}
      />
      <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontSize: fontSizes.h4, fontWeight: "bold" }}>
          {name}
        </Text>
        <View style={{ height: 1, backgroundColor: "black" }}></View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.placeholder,
              marginEnd: 10,
            }}
          >
            Status :
          </Text>
          <Text
            style={{ fontSize: fontSizes.h5, color: changeColorStatus(status) }}
          >
            {status}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.placeholder,
              marginEnd: 10,
            }}
          >
            Price :
          </Text>
          <Text style={{ fontSize: fontSizes.h5, color: colors.price }}>
            {price} $
          </Text>
        </View>
        <Text style={{ fontSize: fontSizes.h5, color: colors.placeholder }}>
          Food Type : Pizza
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 8 }}>
          <Text style={{ fontSize: fontSizes.h5, color: colors.placeholder }}>
            Website :
          </Text>
          <Text style={{ fontSize: fontSizes.h5, color: colors.placeholder }}>
            {website}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {sosialNetworks.facebook !== undefined && (
            <AntDesign
              name="facebook-square"
              size={20}
              style={{ color: colors.facebook, paddingEnd: 8 }}
            />
          )}
          {sosialNetworks.twitter !== undefined && (
            <AntDesign
              name="twitter"
              size={20}
              style={{ color: colors.twitter, paddingEnd: 8 }}
            />
          )}
          {sosialNetworks.instagram !== undefined && (
            <AntDesign
              name="instagram"
              size={20}
              style={{ color: colors.alert }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
