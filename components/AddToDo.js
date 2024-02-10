import { useState, useRef } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


export const AddToDo = ({submitHandler}) => {

    const [text, setText] = useState('');

    const inpRef = useRef(``)

    const changeHandler = (text) => {
        setText(text);
    }

  return (
    <View>
        <TextInput 
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        ref={inpRef}
        
        />
        <Button onPress={()=>{
            inpRef.current.clear();
            return submitHandler(text)
            }} title='add todo' color='coral' />
    </View>
  )
}


const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal:8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});