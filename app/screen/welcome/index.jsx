import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableOpacity
  } from 'react-native';   
import { MyButton } from '../../components'      
import React from 'react'
import { MySigin } from '../../components';


  export default function WelcomeScreen({navigation}){
  
    const onSubmitAccount = () => {
        navigation.navigate('Login')
      }
      const onSubmitLoginRegis = () => {
        navigation.navigate('Register')
      }
    // const onSubmitLogin =()=>{
    //   try{
    //     if(email.trim().length === 0 ){
    //       throw Error('Email is required')
    //     }
  
    //     if(pasword.trim().length === 0 ){
    //       throw Error('Password is required')
    //     }
  
    //     navigation.navigate('Home')
    //   }catch(err){
    //     Alert.alert('Error', err.message, [
    //       {text: 'OK', onPress: () => {
    //         console.log('ERR')
    //       }},
    //     ]);
    //   }
  
    // }
  
    return (
      <ScrollView>
        <View>
          <View>
            <ImageBackground style={style.image}
              source={ require('../../../assets/images/welcome.png') } 
              >
            </ImageBackground>
          </View>

          <View style={{marginTop:150}}>
            <Text style={style.textLoginStyle}>Discover Your</Text>
            <Text style={style.textLoginStyle}>Dream Job here</Text>
            <Text style={style.textLoginStyle2}>Explore all the existing job roles based on your interest and study major</Text>
          </View>

          <View style={style.signin}>
          <TouchableOpacity onPress={onSubmitAccount} style={style.buttonLogin}>
              <Text style={[style.textSignin, {color:'white'}]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmitLoginRegis} style={style.buttonLogin2}>
              <Text style={style.textSignin}>Register</Text>
            </TouchableOpacity>
            {/* <MySigin text='Login' onPress={onSubmitAccount} >
            </MySigin>
            <MyButton onPress={onSubmitLoginRegis} text='Register'>
            </MyButton> */}
            </View>
          </View>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    container: { 
      padding:20
    },
    image: {
        padding: 130,
        marginTop: 30,
        justifyContent:'center',
        resizeMode:"cover"
    },
    // SIGN IN
    // signin2:{
    //     textAlign: "center",
    //   marginVertical: "auto",
    // //   color: "white",
    //   fontSize: 18
    // },
    textInputStyle:{
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
    },
    buttonLogin: {
        backgroundColor: '#1F41BB',
        height: 40,
        width: '50%',
        borderRadius: 8,
        flexDirection: "row",
        marginRight:10
      },
      buttonLogin2: {
        backgroundColor: '#d8e2f2',
        height: 40,
        width: '50%',
        borderRadius: 8,
        flexDirection: "row",
        marginRight:10
      },
      textSignin: {
        textAlign: "center",
        marginVertical: "auto",
        fontWeight:'bold',
        flex: 1,
        fontSize: 15,
      },
      signin:{
          flexDirection: 'row',
          width: '70%',
          alignSelf:'center',
          height: 50,
          fontWeight:'bold',
      },
    // Text
    textLoginStyle:{
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
      alignSelf: 'center',
      color: '#1F41BB'
    },
    textLoginStyle2:{
        fontSize:12,
        textAlign: 'center',
        width:240,
        alignSelf: 'center',
        marginVertical:15
      },
    //   
    brandStyle:{
      marginTop:100,
      alignItems:'center',
      justifyContent:'center'
    },
    textLabel:{
      fontSize:12,
      fontWeight:'bold'
    },
    btnContainer:{
      flex:1,
      flexDirection:'row',
      paddingLeft:20,
      paddingRight:20
    },
    textContinueStyle:{
      textAlign:'center',
      padding:10
    },
    containerBottom:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      padding:30
    }
  })