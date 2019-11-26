import React from 'react'
import { StyleSheet, Text, View,TextInput,Image  } from 'react-native';

export default function Dashboard() {

  const data = [
      {post:'In the end, it`s not the years in your life that count. It`s the life in your years.'},
      {post:'The greatest day in your life and mine is when we take total responsibility for our attitudes. That`s the day we truly grow up.'},
      {post:'Life is not a problem to be solved, but a reality to be experienced.'},
      {post:'What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.'},
      {post:'Life is ten percent what happens to you and ninety percent how you respond to it.'},
      {post:'Believe that life is worth living and your belief will help create the fact.'},
      {post:'Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.'},
      {post:'Our prime purpose in this life is to help others. And if you can`t help them, at least don`t hurt them.'},
      {post:'Life is a series of natural and spontaneous changes. Don`t resist them--that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.'},
      {post:'Change is the law of life. And those who look only to the past or present are certain to miss the future.'},
  ]

    return (
       <View style={styles.container}>
        <View style={styles.box}>
        <Text style={styles.text}>
            Hello Mr. {localStorage.getItem('name')}, Today's Quotes for you!
            <br/>
            <br/>
            {data[Math.floor(Math.random() * 10)].post}
        </Text>
        </View>
       
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%'
    },
    box:{
        position:'absolute',
        width:'300px',
        height:'300px',
        backgroundColor:'#fff'
    },
    text:{
        fontSize:'14px',
        fontFamily:'san serif'
    }
  });
  