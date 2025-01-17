import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export const Index = () => {
  return (
    <View style={styles.container}>
      <Text>startex</Text>
      <Link href="/signin">Go to signin</Link>
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

export default Index;
