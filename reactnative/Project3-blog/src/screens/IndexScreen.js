import React,{useContext} from "react";
import {View,Text,StyleSheet,FlatList,Button} from "react-native";
import  {Context } from "../context/BlogContext";

const IndexScreen=()=>{
  const {state,addBlogPost}=useContext(Context);
return (
  < View>
         <Text>Index Screen</Text>
         <Button title="add post" onPress={addBlogPost}/>
         <FlatList 
         data={state}
         keyExtractor={blogpost=>blogpost.title } 
         renderItem={({item})=>{
           return <Text>{item.title}</Text>;
         }}
         />
  </View>
 );
};
const styles=StyleSheet.create({});
export default IndexScreen;