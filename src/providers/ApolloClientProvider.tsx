import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { PropsWithChildren } from 'react';


const API_KEY = process.env.EXPO_PUBLIC_STEPZEN_API_KEY;


const client = new ApolloClient({
    uri: 'https://springboro.stepzen.net/api/yucky-hound/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `apikey ${process.env.EXPO_PUBLIC_STEPZEN_API_KEY}`
    }
  });

  const ApolloClientProvider = ({children}: PropsWithChildren) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
  }

    export default ApolloClientProvider;