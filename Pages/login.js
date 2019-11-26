import React,{ useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image  } from 'react-native';

export default function Login() {
 
   const [name, setName] = useState("");
  
    function gotoDashboard(){
        localStorage.setItem('name',name);
        this.props.navigation.navigate('Home')
    }
 
  return (
    <View style={styles.container}>
      <View>
       <TextInput
          style={{height: 40}}
          placeholder="Type your name to see your luck!!!!!"
          onChangeText={(text) =>setName({text})}
          value={name}
        />
      </View>
      <View style={styles.arrow}>
      <Image
          style={{width: 50, height: 50}}
          source={require('./../assets/right.png')}
          onPress={() => gotoDashboard()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow:{
      position:'absolute',
      left:'70%',
      bottom:'20%'
  }
});
