import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {WelcomeScreenNavigationProp} from '../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {wp} from '../utils/utilities';
import {Colors} from '../theme/colors';
import welcomeImage from '../assets/images/welcome.png';

const Welcome: FC<WelcomeScreenNavigationProp> = ({navigation}) => {
  const goHome = () => navigation.push('Home');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Mini</Text>
        <Text style={styles.sub}>Ask and be knowledgable</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={welcomeImage} style={styles.img} />
      </View>
      <Pressable style={styles.button} onPress={goHome}>
        <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  title: {
    marginVertical: 16,
    fontSize: wp(10),
    textAlign: 'center',
    color: Colors.color1,
    fontWeight: '700',
  },
  sub: {
    textAlign: 'center',
    color: Colors.color2,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    width: wp(75),
    height: wp(75),
  },
  button: {
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 8,
    backgroundColor: Colors.emerald,
  },
  btnText: {
    color: '#fff',
    fontSize: wp(5),
    fontWeight: '700',
    textAlign: 'center',
  },
});
