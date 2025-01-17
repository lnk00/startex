import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Link href="/">Go to home</Link>
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

export default Signup;
