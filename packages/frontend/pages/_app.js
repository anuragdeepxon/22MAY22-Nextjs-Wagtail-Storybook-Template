import "../styles/globals.scss"
import DefaultLayout from '../components/layouts/Default/DefaultLayout'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            {/*<DefaultLayout>*/}
                <Component {...pageProps} />
            {/*</DefaultLayout>*/}
        </Provider>
    )
}

export default MyApp
