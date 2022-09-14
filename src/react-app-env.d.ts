/// <reference types="react-scripts" />

interface Geo {
  lat: string,
  lng: string,
}

interface Address {
  city: string,
  street: string,
  suite: string,
  zipcode: string,
  geo: Geo,
}

interface Company {
  name: string,
  bs: string,
  catchPhrase: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: Address,
  company: Company,
}

interface Post {
  id: number,
  userId: number,
  body: string,
  title: string,
}
