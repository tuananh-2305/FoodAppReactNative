import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FoodItem from "./FoodItem";
import { colors, fontSizes } from "../../contants";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function FoodList() {
  const foods = [
    {
      name: "Gazpacho",
      url: "https://images.immediate.co.uk/production/volatile/sites/30/2015/02/Top-10-foods-to-try-in-Spain-1d2b4ef.jpg?resize=960,872",
      status: "Opening soon",
      price: 120,
      website: "https://www.taste.com.au/",
      sosialNetworks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://www.facebook.com/",
        instagram: "https://www.facebook.com/",
      },
    },
    {
      name: "Paella",
      url: "https://img.delicious.com.au/YaMAptn3/del/2018/11/bacon-and-egg-paella-96823-2.jpg",
      status: "Opening now",
      price: 150,
      website: "https://www.taste.com.au/",
      sosialNetworks: {
        twitter: "https://www.facebook.com/",
        instagram: "https://www.facebook.com/",
      },
    },
    {
      name: "Tortilla Española",
      url: "https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg",
      status: "Closing soon",
      price: 220,
      website: "https://www.taste.com.au/",
      sosialNetworks: {
        twitter: "https://www.facebook.com/",
      },
    },
    {
      name: "Gambas al ajillo",
      url: "https://www.expatica.com/app/uploads/sites/5/2014/05/french-food-1920x1080.jpg",
      status: "Comming soon",
      price: 180,
      website: "https://www.taste.com.au/",
      sosialNetworks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://www.facebook.com/",
        instagram: "https://www.facebook.com/",
      },
    },
    {
      name: "Salmon en papillote",
      url: "https://sukhis.com/app/uploads/2022/04/image3-4.jpg",
      status: "Comming soon",
      price: 180,
      website: "https://www.taste.com.au/",
      sosialNetworks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.facebook.com/",
      },
    },
    {
      name: "Bouillabaisse",
      url: "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2021/12/spanish-restaurants-singapore-paella.png",
      status: "Comming soon",
      price: 180,
      website: "https://www.taste.com.au/",
      sosialNetworks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.facebook.com/",
      },
    },
  ];
  const categories = [
    {
      name: "BBQ",
      url: "https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
    },
    {
      name: "Breakfast",
      url: "https://herbalconcepts.com/wp-content/uploads/2019/02/6-burrito.jpeg",
    },
    {
      name: "Coffee",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12qcjgUCbektxgkXY2cgWu_MfPCG3-eDfWruf19VOdo45be0Xzo6pUJTQx0hW4QrO_FU&usqp=CAU",
    },
    {
      name: "Noodles",
      url: "https://static.toiimg.com/photo/52467119.cms",
    },
    {
      name: "Hot dogs",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNjeiTctEE8JCDkPBzQ9ymmBS1zMt3Mws-xo25gnbVFByCZ0NVuwiL2VZicgbS49jz7c&usqp=CAU",
    },
    {
      name: "Dinner",
      url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/22/12/dinner-table.jpg?width=1200",
    },
    {
      name: "Beverages",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzVkc-LPuqE-DXVUkTznfkCadCqCYzcfoBA&usqp=CAU",
    },
    {
      name: "Dessert",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW08jAcTeGjQRVr9NAITfKF3nbRB5RPef2VA&usqp=CAU",
    },
    {
      name: "Wine",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUB_gxlZAGsGjHOwSU6mIc_L4X18yTAffJT-ocG6Y-5WqZSORqytoBaMkA5qcgeC2FeZA&usqp=CAU",
    },
    {
      name: "Barbecue",
      url: "https://m.media-amazon.com/images/I/81s-rWYsoKL._SX466_.jpg",
    },
  ];
  const [searchText, setSearchText] = useState(" ");
  const filterFoods = () =>
    foods.filter((food) =>
      food.name.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
    <View style={{ flex: 100, top: 20 }}>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          name="search"
          size={20}
          style={{
            color: "#333",
            position: "absolute",
            top: 8,
            left: 10,
            zIndex: 1,
          }}
        />
        <TextInput
          autoCorrect={false}
          style={{
            backgroundColor: "#e6e6e6",
            height: 35,
            flex: 1,
            marginEnd: 10,
            borderRadius: 10,
            paddingStart: 40,
            color: "black",
          }}
          onChangeText={(text) => setSearchText(text)}
        />
        <Icon name="bars" size={35} style={{ color: "#333" }} />
      </View>
      <View style={{ height: 100 }}>
        <View style={{ height: 1, backgroundColor: colors.inactive }}></View>
        <View style={{ flex: 1 }}>
          <FlatList
            horizontal
            data={categories}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => alert(`choose ${item.name}`)}
                  style={{
                    marginHorizontal: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: "cover",
                      borderRadius: 25,
                    }}
                    source={{
                      uri: item.url,
                    }}
                  />
                  <Text style={{ fontSize: fontSizes.h6 }}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{ height: 1, backgroundColor: colors.inactive }}></View>
      </View>
      {/* <ScrollView>
          {foods.map((food, index) => {
            return <FoodItem key={index} food={food} />;
          })}
        </ScrollView> */}
      <View>
        {filterFoods().length > 0 ? (
          <FlatList
            data={filterFoods()}
            renderItem={({ item }) => {
              return (
                <FoodItem
                  food={item}
                  onPress={() => alert(`You press item's ${item.name}`)}
                />
              );
            }}
            keyExtractor={(food) => food.name}
            style={{ marginBottom: 30 }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: fontSizes.h3,
              }}
            >
              No food found
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
