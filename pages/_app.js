import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderProvider from '../contexts/orderContext';


function MyApp({ Component, pageProps }) {
  return <OrderProvider>
    <Component {...pageProps} />
  </OrderProvider>;
}

export default MyApp
