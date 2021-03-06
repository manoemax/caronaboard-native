import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../../shared/themes/index'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.doubleSection,
    justifyContent: 'space-around',
    flex: 1
  },
  deleteIcon: {
    alignSelf: 'flex-end',
    margin: Metrics.baseMargin
  },
  title: {
    fontSize: Fonts.size.h1,
    textAlign: 'center'
  },
  flexible: {
    flex: 1
  },
  inputTextsContainer: {
    minHeight: 185 * 2
  },
  centralized: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
