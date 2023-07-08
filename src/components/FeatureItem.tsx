import {StyleSheet, Text, View, Image} from 'react-native';
import React, {FC} from 'react';
import {hp, wp} from '../utils/utilities';
import {Colors} from '../theme/colors';

type Props = {
  data: {
    icon: any;
    name: string;
    desc: string;
    background: string;
  };
};
const FeatureItem: FC<Props> = ({data}) => {
  return (
    <View
      style={[styles.featuresContainer, {backgroundColor: data.background}]}>
      <View style={styles.featuresContent}>
        <Image source={data.icon} style={styles.img} />
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <Text style={styles.textDesc}>{data.desc}</Text>
    </View>
  );
};

export default FeatureItem;

const styles = StyleSheet.create({
  featuresContainer: {
    borderRadius: 8,
    padding: 8,
    gap: 4,
  },
  featuresContent: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  img: {
    width: hp(4),
    height: hp(4),
  },
  text: {
    fontSize: wp(4.8),
    fontWeight: '500',
    color: Colors.color1,
  },
  textDesc: {
    fontSize: wp(3.8),
    fontWeight: '500',
    color: Colors.color2,
  },
});
