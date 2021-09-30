import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen=({navigation})=>{
   const [results,setResults]=useState(null);
   const id = navigation.getParam("id");
   console.log(results);

   const getResult= async id=>{
      const response= await yelp.get("/${id}");
      setResults(response.data.businesses);
   };

   useEffect(()=>{
       getResult("id");
    },[]);

  
    return(
    <View>
        <Text> result</Text>
    </View>
    );
};

const styles=StyleSheet.create({});

export default ResultsShowScreen;