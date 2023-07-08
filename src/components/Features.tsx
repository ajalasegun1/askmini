import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/utilities';
import {Colors} from '../theme/colors';
import FeatureItem from './FeatureItem';
import data from '../constants/features';

const Features = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.features}>Features</Text>
      {data.map(item => (
        <FeatureItem data={item} key={item.name} />
      ))}
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    height: hp(60),
  },
  features: {
    fontSize: wp(6),
    fontWeight: '500',
    color: Colors.color1,
  },
});
