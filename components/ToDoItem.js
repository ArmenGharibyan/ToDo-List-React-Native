import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export const ToDoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <View style={styles.text}>
        <MaterialIcons name="delete" size={24} color="black" />
      <Text style={styles.textText}>{item.text}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 16,
    margin: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: `dashed`,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText:{
    marginLeft: 20,
  }
});
