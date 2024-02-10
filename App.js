import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import 'react-native-get-random-values'
import Header from './components/Header';
import { ToDoItem } from './components/ToDoItem';
import { AddToDo } from './components/AddToDo';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [todos,setTodos] = useState([
    {text: `reading`, key: 1},
    {text: `coding`, key: 2},
    {text: `eating`, key: 3},

  ])

  const pressHandler = (key)=>{
    setTodos((prevTodoes)=>{
      return prevTodoes.filter((todo)=>{
        return todo.key!== key
      })
    })
  }

  const submitHandler = (text)=>{

    if(text.length > 3){

      setTodos((prevTodoes)=>{
        return [
          {text: text, key: uuidv4()},
          ...prevTodoes
        ]
      })
    }else{
      console.log(555);
      Alert.alert(`OOPS!`, `Todos must be 3 chars long`, [
        {text: 'Okay', onPress:()=>console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
     <AddToDo submitHandler={submitHandler} />
      <View style={styles.list}>
      <FlatList
      data={todos}
      renderItem={({item})=>(
        <ToDoItem pressHandler={pressHandler} item={item} />
      )}
      />
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    padding:40,
  },

  list: {
    flex: 1,

    marginTop:20,
  }
});
