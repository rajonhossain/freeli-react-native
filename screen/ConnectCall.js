import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import appColor from '../AppColor';
import stylesheet from '../stylesheet/ConnectScreenStyleSheet';
import convData from '../demoData/ConversationData.json'
import callData from '../demoData/CallData.json'
import ConversationItem from '../partials/ConversationItem'
import Entypo from 'react-native-vector-icons/Entypo'
import CallListItem from '../partials/CallListitem';


const ConnectCall = () =>{

   var jsonArray = callData.array;



   return(
       <View style={{flex:1,backgroundColor:appColor.white,flexDirection:'column-reverse'}}>

       <View style = {{flex:1}}>
           <FlatList
            data={jsonArray}
            renderItem={ ({item, index}) => <CallListItem item={item} index={index}/> }
            keyExtractor={i => i.id}
            contentContainerStyle={{ flexGrow: 1 }}
       />
       
       

       </View>

       </View>
   );
}



export default ConnectCall;