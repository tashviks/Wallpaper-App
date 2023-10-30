import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { inputtextwallpaper } from "../atoms/wallpaperinputtext";
import Navbar from "./Navbar";
const Screen1 = ({navigation}) => {
  const access_key = "vC2CxUIhW53OhMYu-vMO5hcMbFUoEXPpbBo-XKbo-LY";
  const [searchvalue, setsearchvalue] = useRecoilState(inputtextwallpaper);
  const [imagecollection, setimagecollection] = useState([]);
  // console.log(searchvalue)
  useEffect(() => {
    const getimagecollection = async () => {
      let data = await fetch(
        `https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchvalue}&client_id=${access_key}`
      );
      let jsondata = await data.json();
      setimagecollection(jsondata);
    };
    getimagecollection();
  }, [searchvalue]);
  imagecollection.total == 0 && setsearchvalue("all");

  const showwallpaper = (item) => {
    navigation.navigate('S2',{clickedimage: `${JSON.stringify(item)}`})

  };
  return (
    <View style={Styles.container}>
        <Navbar />
      {/* <Text>Showing results for {searchvalue}</Text> */}
      <FlatList
        numColumns={2}
        data={imagecollection.results}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              showwallpaper(item);
            }}
          >
            <View style={Styles.imagecontainer}>
              <Image
                source={{ uri: item.cover_photo.urls.regular }}
                style={Styles.image}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Screen1;
const Styles = StyleSheet.create({
  container: {
    //    paddingVertical: 10,
    width: "100%",
    // backgroundColor: 'yellow',
    alignItems: "center",
    // justifyContent: 'center',
    // marginTop: 20
  },
  imagecontainer: {
    width: 200,
    height: 200,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
