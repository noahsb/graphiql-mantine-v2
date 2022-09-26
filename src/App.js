import { GraphiQL } from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

import 'graphiql/graphiql.min.css';

const fetcher =  createGraphiQLFetcher({
  url: 'https://myschema.com/graphql'
})

function App() {
  return (
    <GraphiQL fetcher={fetcher} />
  )
}

export default App;
