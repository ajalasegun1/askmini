import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import smallImage from '../assets/images/welcome.png';
import {wp, hp} from '../utils/utilities';
import Features from '../components/Features';
import dummyMessages from '../constants/dummyMessages';
import {MotiView} from 'moti';
import {Colors} from '../theme/colors';

const Home = () => {
  const [messages, setMessages] = useState(dummyMessages);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <MotiView
          from={{translateY: 0}}
          animate={{translateY: -10}}
          transition={{
            loop: true,
            type: 'timing',
            duration: 500,
          }}
          style={styles.imgContainer}>
          <Image source={smallImage} style={styles.img} />
        </MotiView>

        {messages.length > 0 ? (
          <View style={styles.messageContainer}>
            <Text style={styles.assistant}>Assistant</Text>
            <View style={styles.innerContainer}>
              <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={styles.scroll}
                contentContainerStyle={styles.scroll}>
                {messages.map((item, key) => {
                  if (item.role === 'assistant') {
                    if (item.content.includes('https')) {
                      return (
                        <View style={styles.msgImageContainer}>
                          <View style={styles.imgcontainer2}>
                            <Image
                              source={{uri: item.content}}
                              style={{
                                width: wp(60),
                                height: wp(60),
                                resizeMode: 'contain',
                                borderRadius: 8,
                              }}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View style={styles.aiTextContainer} key={key}>
                          <Text style={styles.text}>{item.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View style={styles.messageRow} key={key}>
                        <View style={styles.userTextContainer}>
                          <Text style={styles.text}>{item.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    width: wp(20),
    height: wp(20),
  },
  messageContainer: {
    flex: 1,
    gap: 4,
  },
  assistant: {
    fontSize: wp(5),
    fontWeight: '500',
    color: Colors.color1,
  },
  innerContainer: {
    height: hp(58),
    borderRadius: 8,
    backgroundColor: Colors.neutral200,
    padding: 8,
  },
  scroll: {
    flex: 1,
    gap: 10,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  userTextContainer: {
    width: wp(70),
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 6,
    borderTopRightRadius: 0,
  },
  aiTextContainer: {
    width: wp(70),
    backgroundColor: Colors.emerald200,
    padding: 8,
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  text: {
    color: Colors.color1,
  },
  msgImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imgcontainer2: {
    padding: 8,
    borderRadius: 16,
    borderTopLeftRadius: 0,
    backgroundColor: Colors.emerald200,
  },
});
