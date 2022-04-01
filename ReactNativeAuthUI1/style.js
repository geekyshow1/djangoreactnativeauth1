import { StyleSheet, View, Text } from "react-native"
const styles = StyleSheet.create({
  labelText: {
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 15
  },
  inputWithLabel: {
    marginBottom: 10,
    marginTop: 5,
  },
});

const toastConfig = {
  warning: ({ text1, props }) => (
    <View style={{ height: 30, width: '100%', backgroundColor: 'orange', padding: 4, }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
  done: ({ text1, props }) => (
    <View style={{ height: 30, width: '100%', backgroundColor: '#1affc6', padding: 4, }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export { styles, toastConfig }