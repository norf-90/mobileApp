import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Font from 'expo-font';

export default RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const loginHandler = text => setLogin(text);
  const mailHandler = text => setMail(text);
  const passwordHandler = text => setPassword(text);
  const showPasswordHandler = () => {
    setIsPasswordHidden(false);
    setTimeout(() => {
      setIsPasswordHidden(true);
    }, 3000);
  };

  const loadFonts = async () => {
    // await Font.loadAsync({
    //   'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    // });
  };
  // loadFonts();
  const onLogin = () => {};
  const keyboardCloseHandler = () => {
    Keyboard.dismiss();
    setIsKeyboardVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardCloseHandler}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bgImage/bgImage.png')}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={{ ...styles.form, paddingBottom: isKeyboardVisible ? 32 : 78 }}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
              <Text style={styles.formTitle}>Регистрация</Text>
              <TextInput
                placeholder="Логин"
                style={{ ...styles.input, ...styles.inputLogin }}
                onChangeText={loginHandler}
                value={login}
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsKeyboardVisible(true)}
              />
              <TextInput
                placeholder="Адрес электронной почты"
                style={{ ...styles.input, ...styles.inputMail }}
                onChangeText={mailHandler}
                value={mail}
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsKeyboardVisible(true)}
              />
              <View
                style={{ ...styles.passwordContainer, marginBottom: isKeyboardVisible ? 0 : 43 }}
              >
                <TextInput
                  placeholder="Пароль"
                  style={styles.input}
                  onChangeText={passwordHandler}
                  value={password}
                  secureTextEntry={isPasswordHidden}
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsKeyboardVisible(true)}
                />
                <TouchableOpacity style={styles.showPasswordBtn} onPress={showPasswordHandler}>
                  <Text style={styles.linkText}>Показать</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            {!isKeyboardVisible && (
              <>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkToLoginScreen}>
                  <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

    bottom: 0,
    top: 0,
    // flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  formTitle: {
    fontSize: 30,
    marginBottom: 33,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: 343,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    fontFamily: 'Roboto-Regular',
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
  },
  showPasswordBtn: {
    position: 'absolute',
    right: 0,
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
  button: {
    height: 51,
    width: 343,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 400,
  },
  linkToLoginScreen: {},
  linkText: {
    color: '#1B4371',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
});
