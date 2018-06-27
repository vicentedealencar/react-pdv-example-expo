import React from 'react'
import { Alert } from 'react-native'
import Button from 'apsl-react-native-button'
import { Button as PDVButton } from 'react-pdv'

const defaultText = 'Basic button'
const defaultOnClick = () => Alert.alert('🎉')

export default ({
  style,
  children = defaultText,
  onClick = defaultOnClick,
  ...otherProps
}) => (
  <PDVButton
    BaseButton={Button}
    {...otherProps}
    onPress={onClick}
    textStyle={textStyle}
    children={children}
    style={{ ...basicStyle, ...style }}
  />
)

const textStyle = {
  color: '#fff'
}

const basicStyle = {
  backgroundColor: '#770077',
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 15,
  paddingLeft: 15,
  minHeight: 50,
  minWidth: 50,
  borderColor: 'black',
  borderWidth: 5,
  borderRadius: 25
}
