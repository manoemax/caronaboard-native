import { UPDATE_RIDE_REQUESTS } from '../../../../../src/redux/types/index'
import { updateYourRideRequests } from '../../../../../src/redux/actions/sync/RideRequestActions'
import { rideRequestFixture } from '../../../../resources/fixtures/ride/request'

describe('RideRequest sync actions', () => {
  it('Should create an action to update ride requests', async () => {
    const rides = [rideRequestFixture]
    const expectedAction = {
      type: UPDATE_RIDE_REQUESTS,
      requests: rides
    }
    const action = updateYourRideRequests(rides)

    expect(action).toEqual(expectedAction)
  })
})
