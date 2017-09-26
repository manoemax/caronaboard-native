import SignUpScreen from '../modules/authentication/containers/SignUpScreen'
import ForgotPasswordScreen from '../modules/authentication/containers/ForgotPasswordScreen'
import ProfileScreen from '../modules/authentication/containers/ProfileScreen'
import RideList from '../modules/rideRequest/containers/RideList'
import RideOffer from '../modules/rideRequest/containers/RideOfferScreen'
import RideRequest from '../modules/rideRequest/containers/RideRequestScreen'

export const screens = {
  signUp: {
    id: 'authentication.signUp',
    component: SignUpScreen
  },
  forgotPassword: {
    id: 'authentication.forgotPassword',
    component: ForgotPasswordScreen
  },
  profile: {
    id: 'user.profile',
    component: ProfileScreen,
    title: 'Profile'
  },
  rideList: {
    id: 'ride.list',
    component: RideList,
    label: 'Ride List',
    title: 'Ride List'
  },
  rideOffer: {
    id: 'ride.offer',
    component: RideOffer,
    label: 'Ride Offer',
    title: 'Ride Offer'
  },
  rideRequest: {
    id: 'ride.request',
    component: RideRequest,
    label: 'Ride Request',
    title: 'Ride Request'
  }
}