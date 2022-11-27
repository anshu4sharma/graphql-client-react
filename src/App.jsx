import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import GetUser from './components/GetUser'
import Form from './components/Form'
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert("graphql error", message)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" })
])
const client = new ApolloClient({
  cache: new InMemoryCache,
  link: link
})
const App = () => {
  return <ApolloProvider client={client}>
    {/* <GetUser /> */}
    <Form />
  </ApolloProvider>
}

export default App