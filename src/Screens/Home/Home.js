import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './style'
import images from "../../constants/images";
import ButtonComp from '../../Components/ButtonComp';
import TextInputComp from '../../Components/TextInputComp';

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            message: 'My App',
            firstName: '',
            lastName: '',
            age:'',
            email:''
        }
    }
    validateForm =()=> {
        const {firstName,lastName,age,email}=this.state
    //     if(firstName=='' || lastName==""||age==null||email==""){
    //         alert("please enter your details")
    //     }
    //     else{
    //         alert(firstName+"\n"+lastName+"\n"+age+"\n"+email+"\n")
    // }
    if(firstName.length==0){
        alert("please enter your first name")
        return
    }if(lastName.length==0){
        alert("please enter your last name")
        return
    }if(age===''){
        alert('please enter your age')
        return
    }if(email.length==0){
        alert("please enter your email")
        return
    }
    else{
        alert(firstName+"\n"+lastName+"\n"+age+"\n"+email+"\n") 
        return
    }
    }
  render()
  {
    const {firstName,lastName,age,email}=this.state
    // console.log('djdkjfa',firstName)
    
    return (
      <View style={styles.container}>
         {/* header */}
        <View style={styles.header}>

            <Image style={styles.imageStyle} source={images.icBack}/>
            {/* <Image style={[styles.imageStyle,{height:70,width:70}]} source={images.users}/>
            <Image style={styles.imageStyle} source={images.leftback}/> */}
        <View style={{flex:0.9}}>
        <Text style={{alignSelf:'center',color:'red',fontWeight:'bold',fontSize:30}}>Home</Text>
        </View>
        {/* <Text></Text> */}
            
        
            

        </View>
        <View style = {{height:1,backgroundColor:'grey'}}></View>

        {/* text

        <View style={styles.textViewStyle}>

            <Text style = {styles.textStyle}>
                {this.state.message}
            </Text>

        </View> */}
        <View
        style={{marginTop:32}}
        >
        <TextInputComp
        placeholder={"Enter First Name"}
        value={firstName}
        onChangeText={(firstName)=>{
            this.setState({firstName})
        }}
        inputStyling={{backgroundColor:"#6759"}}
        />
         <TextInputComp
        placeholder={"Enter Last Name"}
        inputStyling={styles.input}  
        value={lastName}
        onChangeText={(lastName)=>{
            this.setState({lastName})
        
        }}  
        
           
        />
         <TextInputComp
        placeholder={"Enter your age"}
        keyBoardtype={'numeric'}
        inputStyling={styles.input}
        value={age}
        onChangeText={(age)=>{
            this.setState({age})
            console.log(age)
        }}
        />
         <TextInputComp
        placeholder={"Enter your Email"}
        keyBoardtype={'email-address'}
        inputStyling={styles.input}    
        value={email}
        onChangeText={(email)=>{
            this.setState({email})
            console.log(email)
        }}    
        />
        </View>
        
        <ButtonComp
        buttonText={"Click Me"}
        onPress={
this.validateForm
        }
        >
            
        </ButtonComp>

      </View>
    )
  }
}