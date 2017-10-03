import { RkStyleSheet } from 'react-native-ui-kitten'
import { scaleVertical } from '../../../../configuration/kitten/scale'

export const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'space-between'
  },
  image: {
    height: scaleVertical(77),
    resizeMode: 'contain'
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
}))
