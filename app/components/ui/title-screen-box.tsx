import { View, Text, StyleSheet } from "react-native";

const TitleScreenBox = ({title}: {title: string}) => {
  return (
    <View style={styles.title_box}>
      <Text style={styles.title_text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title_box: {
    padding: 20,
    borderWidth: 8,
    borderColor: '#fff'
  },
  title_text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  } 
})

export default TitleScreenBox;