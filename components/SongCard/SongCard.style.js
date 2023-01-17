import { StyleSheet } from "react-native";


export default StyleSheet.create({ 

    container:{
        padding:10,
        flexDirection: 'row',
    
    },
    image:{
        width:100,
        height:100,
        borderRadius:10,
    },

    inner_container:{
        flex:1,
        padding:10,
        justifyContent:"center",
  
    },

    title:{
        fontWeight:"bold",
        fontSize:24,
    },

    info_card:{
        flexDirection:"row",
       

    },

    info_container:{
        flex:1,
        flexDirection: 'row',
        alignItems:"center",
    },

    year:{
        marginLeft:12,
        color:"gray",
        fontWeight:"bold",
    },


    stok_card:{ 
        borderWidth:1,
        borderColor:"red",
        borderRadius:5,
        padding:5 
     },

    stok:{ 
        color:"red",
     },





})