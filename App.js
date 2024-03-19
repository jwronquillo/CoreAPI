
import { StyleSheet, Text, View } from 'react-native';
import Status from './components/status';


export default function App() {
  return (
    <View style={styles.container}>
      <Status/>
      <Text>Ronquillo</Text>
      <Text>HOA 4.1</Text>
    </View>
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
  },
  IME: {
    flex: 1,
  },
  Toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.4)',
    backgroundColor: 'white',
  },
});
