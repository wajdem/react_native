import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"#ffff"}}>hi wajde mosbah abuarqob</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:"10px",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"black",
  },
  // Text: {
  //   color:"black",
  //   backgroundColor:"#fff",
  //   fontSize: 20,
  // }
});

