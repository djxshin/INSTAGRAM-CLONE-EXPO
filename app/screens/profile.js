import React from 'react'
import {TouchableOpacity, FlatList, StyleSheet, Text, View, Image} from 'react-native';

class profile extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{height:70, paddingTop: 30, backgroundColor: 'white',  borderColor: 'lightgrey', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                     <Text>Profile</Text>
                </View>    
        </View>
        )
    }
}
    
    
export default profile;