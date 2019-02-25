import React from 'react'
import {TouchableOpacity, FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {f, auth, database, storage} from '../../config/config'

class upload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedin: false
        }
    }

    componentDidMount = () =>{
        var that = this;
        f.auth().onAuthStateChanged(function(user){
            if(user){
                // loggedin
                that.setState({
                    loggedin: true
                })
            }else{
                // not loggin in
                that.setState({
                    loggedin: false
                })
            }
        });
    }

    render(){
        return(
            <View style={{flex: 1}}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            {this.state.loggedin == true ? (
                    // logged in
                    <Text>Upload</Text>
                ) : (
                    // not logged in
                    <View>
                    <Text>you are not logged in</Text>
                    <Text>please log to upload yo pix!</Text>
                    </View>
                )}
            </View>    
        </View>
        )
    }
}
    
    
export default upload;