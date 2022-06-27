import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Routes'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
