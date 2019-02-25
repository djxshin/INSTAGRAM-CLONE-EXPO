import React from 'react'
import {TouchableOpacity, FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {f, auth, database, storage} from '../../config/config'

class profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           loaded:false
        }
    }

checkParams = () =>{

}

fetchUserInfo = (userId) => {

}

componentDidMount = () =>{
    this.checkParams();
}
    render(){
        return(
            <View style={{flex: 1}}>
                {this.state.loaded == false ? (
                    <View>
                        <Text>Loading...hold on we're going home~</Text>
                    </View>
                ) : (
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
                
                    </View>
                )}
        </View>
        )
    }
}
    
    
export default profile;