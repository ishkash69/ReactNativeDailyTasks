import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 16,
        paddingVertical:24,
    },
    header:{
        // justifyContent:"space-between",

        flexDirection:"row",
        alignItems: "center",
    },
    imageStyle:{
        height:40,
        width:40,
    },
    textViewStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    textStyle:{
        color:"black",
        fontWeight:'bold',
        fontSize:40
    },
    button:{
        width:"50%",
        alignSelf:'center',
        height:50,
        backgroundColor:'blue',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
    ,
    input:{
        marginTop:20
    }

})
