import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';
import { useChangeUserPasswordMutation } from '../../../services/userAuthApi';
import { getToken } from '../../../services/AsyncStorageService'

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [usertoken, setUserToken] = useState()

  const [changeUserPassword] = useChangeUserPasswordMutation()

  const clearTextInput = () => {
    setPassword('')
    setPassword2('')
  }

  useEffect(() => {
    (async () => {
      const token = await getToken()
      if (token) {
        const { access, refresh } = JSON.parse(token)
        setUserToken({
          "access": access,
          "refresh": refresh
        })
      }
    })();
  }, [])

  const handleFormSubmit = async () => {
    const formdata = { password, password2 }
    const { access } = usertoken
    const res = await changeUserPassword({ formdata, access })
    if (res.data) {
      clearTextInput()
      Toast.show({
        type: 'done',
        position: 'top',
        topOffset: 0,
        text1: res.data.msg
      });
    }
    if (res.error) {
      Toast.show({
        type: 'warning',
        position: 'top',
        topOffset: 0,
        ...(res.error.data.errors.password ? { text1: res.error.data.errors.password[0] } : ''),
        ...(res.error.data.errors.password2 ? { text1: res.error.data.errors.password2[0] } : ''),
        ...(res.error.data.errors.non_field_errors ? { text1: res.error.data.errors.non_field_errors[0] } : ''),
        ...(res.error.data.errors.messages ? { text1: res.error.data.errors.messages[0].message } : ''),
      });
    }
  }

  return (
    <SafeAreaView>
      <Toast config={toastConfig} />
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={{ marginHorizontal: 30 }}>
          <View style={[styles.inputWithLabel, { marginBottom: 15 }]}>
            <Text style={styles.labelText}>New Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Write Your New Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputWithLabel}>
            <Text style={styles.labelText}>Confirm New Password</Text>
            <TextInput
              style={styles.input}
              value={password2}
              onChangeText={setPassword2}
              placeholder="Write Your New Confirm Password"
              secureTextEntry={true}
            />
          </View>
          <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
            <Button title="Save" onPress={handleFormSubmit} color='purple' />
          </View>
        </View >
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChangePasswordScreen