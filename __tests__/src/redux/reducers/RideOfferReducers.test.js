import RideOfferReducers, { INITIAL_STATE } from '../../../../src/redux/reducers/RideReducers'
import { updateYourRideRequests } from '../../../../src/redux/actions/sync/RideRequestActions'
import { updateRideOffers, updateYourRideOffers } from '../../../../src/redux/actions/sync/RideOfferActions'
import { rideOfferFixture } from '../../../resources/fixtures/ride/offer'

describe('RideOfferReducers', () => {
  it('Should handle UPDATE_RIDE_OFFERS action type', async () => {
    const action = updateRideOffers([rideOfferFixture])
    const state = RideOfferReducers(INITIAL_STATE, action)
    const expectedState = { ...INITIAL_STATE, offers: action.offers }

    expect(state).toEqual(expectedState)
  })

  it('Should handle UPDATE_YOUR_RIDE_OFFERS action type', async () => {
    const action = updateYourRideOffers([rideOfferFixture])
    const state = RideOfferReducers(INITIAL_STATE, action)
    const expectedState = { ...INITIAL_STATE, yourOffers: action.yourOffers }

    expect(state).toEqual(expectedState)
  })

  it('Should handle UPDATE_RIDE_REQUESTS action type', async () => {
    const action = updateYourRideRequests([rideOfferFixture])
    const state = RideOfferReducers(INITIAL_STATE, action)
    const { requests, requestsIdMap } = action
    const expectedState = { ...INITIAL_STATE, requests, requestsIdMap }

    expect(state).toEqual(expectedState)
  })
})
