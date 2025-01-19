import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { startexCore } from '@startex/core';

export const Index = () => {
  console.log(startexCore);

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
