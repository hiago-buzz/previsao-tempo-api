import { StormGlass } from '@src/clients/stormGlass';
import stormGlassNomalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import { Forecast, Beach, BeachPosition } from '../forecast';

jest.mock("@src/clients/stormGlass");

describe('Forecast Service', () => {
    it('should return the forecast list of beaches', async () => {
        StormGlass.prototype.fetchPoints = jest
            .fn()
            .mockResolvedValue(stormGlassNomalized3HoursFixture);

        const beaches: Beach[] = [
            {
                lat: -33.792726,
                lng: 151.289824,
                name: 'Manly',
                position: BeachPosition.E,
                user: 'some-id'
            },
        ];

        const expectedResponse = [
            {
                lat: -33.792726,
                lng: 151.289824,
                name: 'Manly',
                position: 'E',
                rating: 1,
                swellDirection: 175.42,
                swellHeight: 0.17,
                swellPeriod: 5.29,
                time: "2020-11-12T00:00:00+00:00",
                waveDirection: 184.75,
                waveHeight: 0.56,
                windDirection: 197.81,
                windSpeed: 3.71
            },
            {
                lat: -33.792726,
                lng: 151.289824,
                name: 'Manly',
                position: 'E',
                rating: 1,
                swellDirection: 175.38,
                swellHeight: 0.18,
                swellPeriod: 5.2,
                time: "2020-11-12T01:00:00+00:00",
                waveDirection: 183.57,
                waveHeight: 0.54,
                windDirection: 196.86,
                windSpeed: 3.49
            },
            {
                lat: -33.792726,
                lng: 151.289824,
                name: 'Manly',
                position: 'E',
                rating: 1,
                swellDirection: 175.34,
                swellHeight: 0.2,
                swellPeriod: 5.12,
                time: "2020-11-12T02:00:00+00:00",
                waveDirection: 182.39,
                waveHeight: 0.53,
                windDirection: 195.91,
                windSpeed: 3.27
            }
        ];

        const forecast = new Forecast(new StormGlass());
        const beachesWithRating = await forecast.processForeCastForBeaches(beaches);

        expect(beachesWithRating).toEqual(expectedResponse);
    });
})