import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, TouchableOpacity } from 'react-native'

import Styles from './styles/RideOffer.style'
import { RkCard } from 'react-native-ui-kitten'
import { RidePropType } from '../../rideRequest/types'

export class RideOffer extends React.Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    onPress: PropTypes.func.isRequired
  }

  onPress = () => {
    this.props.onPress(this.props.ride)
  }

  renderLine = (text, icon) => {
    return (
      <View style={Styles.line} >
        <Icon name={icon} style={Styles.icon} />
        <Text rkCardText>{text}</Text>
      </View>
    )
  }

  render () {
    const {
      origin,
      destination,
      days,
      hours
    } = this.props.ride

    return (
      <TouchableOpacity onPress={() => this.onPress()}>
        <RkCard>
          <View rkCardContent>
            { this.renderLine(origin, 'radio-button-unchecked') }
            { this.renderLine(destination, 'radio-button-unchecked') }
          </View>
          <View rkCardContent>
            { this.renderLine(days, 'today') }
            { this.renderLine(hours, 'schedule') }
          </View>
        </RkCard>
      </TouchableOpacity>
    )
  }
}
