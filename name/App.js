// // import { Routes, Route } from "react-router-dom";
// import Ex1 from "./container/Ex1"
// import Ex2 from "./container/Ex2"

// function App() {
//   return(
//     <div>
//       <Ex1/>
//       <Ex2/>
//     </div>
//   )
// }

// export default App;
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"#ffff"}}>hi wajde</Text>
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

