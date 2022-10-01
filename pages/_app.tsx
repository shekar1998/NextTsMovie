import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../redux/redux';
import { Provider } from 'react-redux';
import '../styles/text.css';
import '../styles/globals.css';
import '../styles/card.css';
import 'antd/dist/antd.css';
import '../node_modules/mdb-ui-kit/css/mdb.min.css';
import '../styles/circle.css';
import '../styles/movie.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
