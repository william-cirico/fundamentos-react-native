import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { PrimeiraTela } from './src/screens/PrimeiraTela';
import { SegundaTela } from './src/screens/SegundaTela';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />     
      <PrimeiraTela />
      {/* <SegundaTela /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
