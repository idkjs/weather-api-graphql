import {
  gql
} from 'apollo-server-express';

export default gql `
type Location {
  city: String
  country: String
  coords: [Float]
  mapLink: String
  weather: Weather
}

type Weather {
  summary: String
  temperature: Float
  coords: [Float]
  apttemperature: Float
  timezone: String
  time: Int
  icon: String
  sunrise: Int
  sunset: Int
  moonphase: Float
}
type Query {
  location(place: String!): Location
}
`;