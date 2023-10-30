import { View, Text, StyleSheet, TextInput, Image} from 'react-native'
import React from 'react'
import logo from '../assets/search.png'
import { inputtextwallpaper } from '../atoms/wallpaperinputtext'
import { useRecoilState } from 'recoil'
const Navbar = () => {
    const [searchvalue,setsearchvalue]=useRecoilState(inputtextwallpaper)
    onChangeTextInput=(text)=>{
        // console.log(text)
        setsearchvalue(text)
        console.log(searchvalue)
    }
  return (
    <View style={Styles.container}>
      {/* <Text>Navbar</Text> */}
      <View style={Styles.searchContainer}>
        <Image source={logo} style={Styles.icon}/>
        <TextInput onChangeText={onChangeTextInput} style={Styles.searchinput} placeholder='search anything from here....'/>
      </View>
    </View>
  )
}

export default Navbar
const Styles=StyleSheet.create({
    container: {
       paddingVertical: 10,
        width: "100%",
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
      },
      icon:{
        width: 20,
        height: 20,
      },
      searchContainer:{
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
        backgroundColor:"white",
        elevation: 10,
        borderRadius: 10,
        padding: 10,
        width: "80%"
      },
      searchinput:{
        width: "80%",
        fontSize: 15,
        paddingLeft: 10,
      }
})