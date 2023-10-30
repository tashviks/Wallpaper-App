import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { inputtextwallpaper } from "../atoms/wallpaperinputtext";
const Screen2 = ({ route }) => {
  const { clickedimage } = route.params;
  const [searchvalue, setsearchvalue] = useRecoilState(inputtextwallpaper);
  const [imagedata, setimagedata] = useState();
  useEffect(() => {
    setimagedata(JSON.parse(clickedimage)?.cover_photo.urls.regular);
  }, []);
  console.log(imagedata);

  const getpermission=async()=>{}


  const shownextimage= async()=>{
      const data= await fetch(`https://source.unsplash.com/900x1600/?${searchvalue}`)
      setimagedata(data.url)
  }



  return (
    <View style={Styles.imagecontainer}>
      {/* {typeof imagedata == "object" && ( */}
        <Image
          source={{ uri: imagedata }}
          style={Styles.image}
        />
      {/* )}  */}

      <TouchableOpacity style={Styles.downloadbtn}>
        <Text style={Styles.downloadbtntxt} onPress={getpermission}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.nextbtn}>
        <Text style={Styles.nextbtntxt} onPress={shownextimage}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

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
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  downloadbtn:{
    position: "absolute",
    bottom: 10,
    left: 60,
    backgroundColor:'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 10,
  },
  downloadbtntxt:{
    color: 'white',
    fontSize: 20,
  },

  nextbtn:{
    position: "absolute",
    bottom: 10,
    right: 60,
    backgroundColor:'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 10,
  },
  nextbtntxt:{
    color: 'black',
    fontSize: 20,
  }
});
