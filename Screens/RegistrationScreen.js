import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const inialFocusState = {};

export default RegistrationScreen = props => {
  const { showLogScreen } = props;
  const [login, setLogin] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const [isInputFocused, setIsInputFocused] = useState(inialFocusState);
  const [isIconLoaded, setIsIconLoaded] = useState(false);

  const loginHandler = text => setLogin(text);
  const mailHandler = text => setMail(text);
  const passwordHandler = text => setPassword(text);
  const showPasswordHandler = () => {
    setIsPasswordHidden(false);
    setTimeout(() => {
      setIsPasswordHidden(true);
    }, 3000);
  };

  const loginFocusHandler = () => {
    setIsKeyboardVisible(true);
    setIsInputFocused({ login: true });
  };
  const mailFocusHandler = () => {
    setIsKeyboardVisible(true);
    setIsInputFocused({ mail: true });
  };
  const passwordFocusHandler = () => {
    setIsKeyboardVisible(true);
    setIsInputFocused({ password: true });
  };

  const submitHandler = () => {
    console.log(`Login: ${login}`);
    console.log(`Mail: ${mail}`);
    console.log(`Password: ${password}`);
  };

  const keyboardCloseHandler = () => {
    Keyboard.dismiss();
    setIsKeyboardVisible(false);
    setIsInputFocused(inialFocusState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardCloseHandler}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/bgImage/bgImage.png')}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Form */}
        <View style={{ ...styles.form, paddingBottom: isKeyboardVisible ? 32 : 78 }}>
          <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            {/*  Icon  Container */}
            <View style={styles.iconContainer}>
              {isIconLoaded && (
                <View>
                  <Image />
                </View>
              )}
              <TouchableOpacity style={styles.addIconBtn} activeOpacity={0.5}>
                <Image
                  source={require('../assets/images/iconBtnImage/add.png')}
                  style={styles.addIconImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.formTitle}>Регистрация</Text>

            {/* Login input */}
            <TextInput
              placeholder="Логин"
              style={{
                ...styles.input,
                ...styles.inputLogin,
                borderColor: isInputFocused.login ? '#FF6C00' : '#E8E8E8',
              }}
              onChangeText={loginHandler}
              value={login}
              placeholderTextColor="#BDBDBD"
              onFocus={loginFocusHandler}
            />

            {/* Mail input */}
            <TextInput
              placeholder="Адрес электронной почты"
              style={{
                ...styles.input,
                ...styles.inputMail,
                borderColor: isInputFocused.mail ? '#FF6C00' : '#E8E8E8',
              }}
              onChangeText={mailHandler}
              value={mail}
              placeholderTextColor="#BDBDBD"
              onFocus={mailFocusHandler}
            />

            {/* Password input */}
            <View
              style={{
                ...styles.passwordContainer,
                marginBottom: isKeyboardVisible ? 0 : 43,
              }}
            >
              <TextInput
                placeholder="Пароль"
                style={{
                  ...styles.input,
                  borderColor: isInputFocused.password ? '#FF6C00' : '#E8E8E8',
                }}
                onChangeText={passwordHandler}
                value={password}
                secureTextEntry={isPasswordHidden}
                placeholderTextColor="#BDBDBD"
                onFocus={passwordFocusHandler}
              />
              <TouchableOpacity style={styles.showPasswordBtn} onPress={showPasswordHandler}>
                <Text style={styles.linkText}>Показать</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

          {!isKeyboardVisible && (
            <>
              <TouchableOpacity style={styles.button} onPress={submitHandler} activeOpacity={0.5}>
                <Text style={styles.buttonText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkToLoginScreen}>
                <Text style={styles.linkText} onPress={showLogScreen}>
                  Уже есть аккаунт? Войти
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    boxSizing: 'border-box',
  },

  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
  },
  form: {
    position: 'relative',
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    position: 'absolute',
    top: -60,
    left: (Dimensions.get('window').width - 120) / 2,
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  addIconBtn: {
    position: 'absolute',
    right: -12.5,
    bottom: 14,
    width: 25,
    height: 25,
  },
  addIconImage: {},

  formTitle: {
    marginTop: 92,
    fontSize: 30,
    marginBottom: 33,
    // fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
  input: {
    alignContent: 'center',
    height: 50,
    width: 343,
    marginHorizontal: (Dimensions.get('window').width - 343) / 2,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    // fontFamily: 'Roboto-Regular',
    fontSize: 16,
    backgroundColor: '#F6F6F6',
    color: '#212121',
  },
  inputLogin: {
    marginBottom: 16,
  },
  inputMail: {
    marginBottom: 16,
  },
  passwordContainer: {
    position: 'relative',
    alignItems: 'flex-end',
  },
  showPasswordBtn: {
    position: 'absolute',
    right: (Dimensions.get('window').width - 343) / 2,
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
  button: {
    height: 51,
    width: 343,
    marginBottom: 16,
    marginHorizontal: (Dimensions.get('window').width - 343) / 2,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  linkToLoginScreen: {},
  linkText: {
    color: '#1B4371',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});
