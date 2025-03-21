import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/types';
import { RegularTextGray, Text25 } from '../../components/MyText';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import Input from '../../components/Input';

const SignupScreen = () => {
    const [termsAccepted, setTermsAccepted] = React.useState(false);
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParams>>();
    return (
        <MainLayout onBack={navigation.goBack}>
            <View style={{ flex: 1, marginHorizontal: 15, paddingTop: 30 }}>

                <Text25 bold>
                    Create
                </Text25>
                <Text25 bold style={{ marginBottom: 15 }}>
                    an account
                </Text25>
                <RegularTextGray style={{marginBottom:15}}>
                    Please Registration with email and sign up to continue using our app
                </RegularTextGray>


                <Input placeholder="Full Name" />
                <Input placeholder="Email" />
                <Input placeholder="Phone" />
                <Input placeholder="Password" />



                <PrimaryBtn containerStyle={{ marginTop: 50 }}
                    onPress={() => navigation.navigate('VerifySignupOtp')}
                    text='Sign Up'
                />
                <View style={{ flexDirection: 'row', gap: 2, marginTop: 4, justifyContent: 'center' }}>
                    <RegularTextGray>
                        Don’t have an account?
                    </RegularTextGray>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <RegularTextGray style={{ color: COLORS.primary }}>
                            Sign In          </RegularTextGray>
                    </TouchableOpacity>
                </View>
            </View>
        </MainLayout>
    );
};

export default SignupScreen;
