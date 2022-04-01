import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (value) => {
  try {
    const new_value = JSON.stringify(value)
    await AsyncStorage.setItem('token', new_value)
  } catch (error) {
    console.log(error)
  }
}

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    if (token !== null) {
      return token
    }
  } catch (error) {
    console.log(error)
  }
}

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token')
  } catch (error) {
    console.log(error)
  }
}

export { storeToken, getToken, removeToken }