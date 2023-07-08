import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import smallImage from '../assets/images/welcome.png';
import {wp, hp} from '../utils/utilities';
import Features from '../components/Features';
import dummyMessages from '../constants/dummyMessages';
import {MotiView} from 'moti';
import {Colors} from '../theme/colors';
import recordImg from '../assets/images/recordingIcon.png';
import recordingVoice from '../assets/images/voiceLoading.gif';

const Home = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  const clear = () => setMessages([]);
  const stop = () => setSpeaking(false);
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
                        <View style={styles.msgImageContainer} key={key}>
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

        <View style={styles.btnsect}>
          {recording ? (
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={recordingVoice} style={styles.btnImg} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={recordImg} style={styles.btnImg} />
            </TouchableOpacity>
          )}

          {messages.length > 0 && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.leftBtn}
              onPress={clear}>
              <Text style={{color: '#fff', fontWeight: '500'}}>Clear</Text>
            </TouchableOpacity>
          )}

          {speaking && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.rightBtn}
              onPress={stop}>
              <Text style={{color: '#fff', fontWeight: '500'}}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
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
    width: hp(15),
    height: hp(15),
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
  btnsect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? 10 : 0,
  },
  btnImg: {
    width: hp(10),
    height: hp(10),
    borderRadius: hp(10),
  },
  leftBtn: {
    backgroundColor: Colors.neutral400,
    padding: 8,
    borderRadius: 16,
    position: 'absolute',
    right: 40,
  },
  rightBtn: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 16,
    position: 'absolute',
    left: 40,
  },
});
