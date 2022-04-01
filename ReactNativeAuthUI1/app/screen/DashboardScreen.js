import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getToken } from '../../services/AsyncStorageService'
import { useGetLoggedUserQuery } from '../../services/userAuthApi'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../features/userSlice'
import { setUserAccessToken } from '../../features/authSlice'

const DashboardScreen = () => {
  const [token, setToken] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const token = await getToken()
      if (token) {
        const { access, refresh } = JSON.parse(token)
        setToken({
          "access": access,
          "refresh": refresh
        })
        dispatch(setUserAccessToken({ access_token: access }))
      }
    })();
  }, [])
  const { data, isSuccess } = useGetLoggedUserQuery(token.access)
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserInfo({ email: data.email, name: data.name }))
    }
  })
  return (
    <View>
      <Text>Dashboard Screen</Text>
    </View>
  )
}

export default DashboardScreen