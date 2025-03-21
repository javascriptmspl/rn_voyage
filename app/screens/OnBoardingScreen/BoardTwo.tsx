// import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
// import React from 'react';
// import {BigText, RegularText} from '../../components/MyText';
// import PrimaryBtn from '../../components/PrimaryBtn';
// import {useNavigation} from '@react-navigation/native';
// import {TouchableOpacity} from 'react-native';
// import {COLORS} from '../../styles';
// import ImageTwo from '../../../assets/images/svg/OnBoardingTwo.svg';

// const {width} = Dimensions.get('window');

// type Props = {
//   handleSkip: () => void;
//   handleNext: () => void;
// };
// const BoardTwo = ({handleNext, handleSkip}: Props) => {
//   const navigation = useNavigation<any>();
//   return (
//     <View
//       style={{
//         width: width,
//         backgroundColor: 'white',
//         flex: 1,
//       }}>
//       <View
//         style={{
//           width: '100%',
//           height: '50%',
//           marginTop: 25,
//           alignItems: 'center',justifyContent:'flex-end'
//         }}>
//         <ImageTwo width={'90%'} />
//       </View>
//       <BigText style={{textAlign: 'center', marginBottom: 10, marginTop: 80}}>
//         Fresh & Quality
//       </BigText>

//       <RegularText
//         style={{
//           textAlign: 'center',
//           color: 'grey',
//           marginHorizontal: 20,
//           marginBottom: 20,
//         }}>
//        All items have real freshness and are intended for your needs
//       </RegularText>

//     </View>
//   );
// };

// export default BoardTwo;


import {View, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import { MediumText, RegularText, Text25} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import ImageThree from '../../../assets/images/svg/OnBoardingThree.svg';

const {width} = Dimensions.get('window');
type Props = {
  handleSkip?: () => void;
  handleNext?: () => void;
};
const BoardThree = ({}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  function handleNext() {
    navigation.navigate('Login');
  }
  return (
    <View
      style={{
        width: width,
        flex: 1,
      }}>
      <View
        style={{
          width: '100%',
          height: '50%',
          marginTop: 40,
          alignItems: 'center',
          justifyContent:'flex-end'
        }}>
        <ImageThree width={'90%'} />
      </View>
      <Text25 bold style={{textAlign: 'center', marginBottom: 10, marginTop: 30}}>
      Let's travel destination 
      </Text25>
      <RegularText style={styles.text}>
        We overcome new difficulties and problems.
      </RegularText>
      <RegularText style={styles.text}>
        In such a manner we get out of our
      </RegularText>
      <RegularText style={styles.text}>comfort zone.</RegularText>
    </View>
  );
};

export default BoardThree;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "grey",
    fontSize: 15,
  },
});