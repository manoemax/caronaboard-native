import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Keyboard } from 'react-native'
import Toast, { DURATION } from 'react-native-easy-toast'
import { RkText, RkAvoidKeyboard } from 'react-native-ui-kitten'
import { GradientButton, TextInput } from '../../shared/components'
import { styles } from '../containers/styles/LoginScreenStyles'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export class LoginForm extends React.Component {
  static propTypes = {
    footer: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
    toast: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    })
  }

  static defaultProps = {
    footer: () => null,
    toast: {showAlert: false, message: ''}
  }

  state = {
    email: '',
    password: '',
    loading: false
  }

  onButtonPress = () => {
    this.setState({loading: true})
    const {email, password} = this.state
    this.props.onButtonPress(email, password)
    this.setState({loading: false})
  }

  componentWillReceiveProps (nextProps) {
    const {showAlert, message} = nextProps.toast

    if (showAlert) {
      this.refs.toast.show(message, DURATION.LENGTH_LONG)
    }
  }

  render () {
    return (
      <LoadingSpinnerView isLoading={this.state.loading}>

        <RkAvoidKeyboard
          style={styles.screen}
          onStartShouldSetResponder={e => true}
          onResponderRelease={e => Keyboard.dismiss()}>

          <View style={styles.header}>
            <Image style={styles.image} source={require('../../../assets/images/caronaboard-logo-azul.png')} />
            <RkText rkType='logo h0'>Caronaboard</RkText>
            <RkText rkType='light h1'>Seu carro não precisa</RkText>
            <RkText rkType='light h1'>levar apenas você</RkText>
          </View>

          <TextInput
            onChangeText={(email) => { this.setState({email}) }}
            key='email-input'
            rkType='rounded'
            placeholder='Email'
            autoCapitalize='none'
          />
          <TextInput
            onChangeText={(password) => { this.setState({password}) }}
            key='password-input'
            rkType='rounded'
            placeholder='Senha'
            secureTextEntry
          />

          <View style={styles.centralized}>
            <GradientButton
              rkType='large'
              style={styles.loginButton}
              text={this.props.buttonText}
              onPress={this.onButtonPress}
            />
          </View>

          {this.props.footer()}
          <Toast position='top' ref='toast' />
        </RkAvoidKeyboard>
      </LoadingSpinnerView>
    )
  }
}
