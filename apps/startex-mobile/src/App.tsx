import { StyleSheet, View, Text } from 'react-native';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>startex</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
