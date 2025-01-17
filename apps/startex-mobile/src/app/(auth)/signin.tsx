import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export const Signin = () => {
  return (
    <View style={styles.container}>
      <Text>Signin</Text>
      <Link href="/signup">Go to signup</Link>
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

export default Signin;
