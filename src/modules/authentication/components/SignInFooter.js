import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { RkButton, RkText } from 'react-native-ui-kitten'
import Styles from './styles/SignInFooter.style'
import { screens } from '../../../navigation/Screens'

export class SignInFooter extends Component {
  static propTypes = {
    email: PropTypes.string,
    navigator: PropTypes.object.isRequired
  }

  navigateTo = screen => () => this.props.navigator.push({screen: screen.id, title: screen.title})

  render () {
    return (
      <View>
        <View style={Styles.textRow}>
          <RkButton
            key='forgot-password-button'
            rkType='clear'
            onPress={this.navigateTo(screens.forgotPassword)}
          >
            <RkText rkType='header6'>Esqueceu sua senha?</RkText>
          </RkButton>
        </View>
        <View style={Styles.textRow}>
          <RkText rkType='primary3'>Ainda nāo tem conta?</RkText>
          <RkButton
            key='signup-button'
            rkType='clear'
            onPress={this.navigateTo(screens.signUp)}
          >
            <RkText rkType='header6'> Cadastre-se</RkText>
          </RkButton>
        </View>
      </View>
    )
  }
}
