import {View, FlatList, Dimensions, NativeSyntheticEvent} from 'react-native';
import React, {useRef, useState} from 'react';
import BoardOne from './BoardOne';
import BoardTwo from './BoardTwo';
// import BoardThree from './BoardThree';
import {NativeScrollEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MainLayout from '../../components/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import { COLORS } from '../../styles';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const OnBoardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  let listRef = useRef<any>(null);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveIndex(roundIndex);
  };

  const handleNext = () => {
    if (activeIndex >= 1) return;
    listRef?.current?.scrollToIndex({index: activeIndex + 1}, 3000);
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    //@ts-ignore
    <MainLayout skipBtn="Skip" onPress={handleSkip}>
      <View style={{flex: 1, }}>
        <FlatList
          ref={listRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={0}
          pagingEnabled
          onScroll={handleScroll}
          data={['one', 'two',]}
          renderItem={({item}) => {
            return (
              <View style={{}}>
                {item === 'one' && (
                  <BoardOne handleSkip={handleSkip} handleNext={handleNext} />
                )}
                {item === 'two' && (
                  <BoardTwo handleSkip={handleSkip} handleNext={handleNext} />
                )}
                {/* {item === 'three' && <BoardThree handleSkip={handleSkip} handleNext={handleNext} />} */}
              </View>
            );
          }}
        />


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 25,
            gap: 7,
          }}>
          <View
            style={{
              width: activeIndex === 0 ? 25 : 8,
              height: 8,
              borderRadius: 20,
              backgroundColor: activeIndex === 0 ? COLORS.primary : 'lightgray',
            }}></View>
          <View
            style={{
              width: activeIndex === 1 ? 25 : 8,
              height: 8,
              borderRadius: 20,
              backgroundColor: activeIndex === 1 ? COLORS.primary : 'lightgray',
            }}></View>
        </View>

        {activeIndex === 1 ? (
          <View style={{marginBottom: 50, marginHorizontal:20}}>
            <PrimaryBtn
              text="Next"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        ) : (
          <View style={{marginBottom: 50,marginHorizontal:20}}>
            <PrimaryBtn text="Next" onPress={handleNext} />
          </View>
        )}
</View>

    </MainLayout>
  );
};

export default OnBoardingScreen;
