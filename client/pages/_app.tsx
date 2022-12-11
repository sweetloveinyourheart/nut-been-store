import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from '../utils/apollo-client';
import { SSRProvider } from 'react-bootstrap';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../redux/store';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <SSRProvider>
      <ApolloProvider client={apolloClient}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ApolloProvider>
    </SSRProvider>
  )
}
