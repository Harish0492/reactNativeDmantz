import React from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import ResultsDetails from "./ResultsDetails";

const ResultsList=({title,results, navigation})=>{
    return(
    <View style={styles.containers}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={results=>results.id}
        renderItem={({item})=>{
            return( 
            <TouchableOpacity 
            onPress={() => navigation.navigate("ResultsShow",{id:item.id})}
            >
                <ResultsDetails result={item}/>
            </TouchableOpacity>
            );
        }}/>
    </View>
    );
};
const styles=StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginLeft:15,
        marginBottom:5
    },
    containers:{
        marginBottom:10
    }
});

export default withNavigation(ResultsList);

