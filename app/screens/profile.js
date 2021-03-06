import React from 'react'
import {TouchableOpacity, FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {f, auth, database, storage} from '../../config/config'

class profile extends React.Component {
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
               
                {this.state.loggedin == true ? (
                    // logged in
                    <View style={{flex:1}}>
                    <View style={{height:70, paddingTop: 30, backgroundColor: 'white',  borderColor: 'lightgrey', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                         <Text>Profile</Text>
                    </View> 
                       <View style={{justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', paddingVertical: 10}}>
                            <Image source={{ uri: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'}} style={{marginLeft: 10, width:100, height:100, borderRadius:50}}></Image>
                                <View style={{marginRight: 10}}>
                                    <Text>Name</Text>
                                    <Text>@username</Text>
                                </View>
                        </View>
                        <View style={{paddingBottom: 20, borderBottomWidth: 1,}}>
                            <TouchableOpacity style={{marginTop:10, marginHorizontal: 40, paddingVertical: 15, borderRadius: 20, borderColor: 'grey ', borderWidth: 1.5}}>
                                <Text style={{textAlign: 'center', color:'grey'}}>LOG OUT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginTop:10, marginHorizontal: 40, paddingVertical: 15, borderRadius: 20, borderColor: 'grey ', borderWidth: 1.5}}>
                                 <Text style={{textAlign: 'center', color:'grey'}}>Edit Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=> this.props.navigation.navigate('Upload')}
                                style={{backgroundColor:'grey', marginTop:10, marginHorizontal: 40, paddingVertical: 35, borderRadius: 20, borderColor: 'grey ', borderWidth: 1.5}}>
                            <Text style={{textAlign: 'center', color:'white'}}>Upload New +</Text>
                            </TouchableOpacity>
                         </View> 
                    </View>
                ) : (
                    // not logged in
                    <View>
                    <Text>you are not logged in</Text>
                    <Text>please log in to view your profile</Text>
                    </View>
                )}
                    
                
        </View>
        )
    }
}
    
    
export default profile;