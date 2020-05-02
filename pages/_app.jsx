import './../styles.css'
import App from 'next/app'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import React from 'react'
import store from '../redux/store'


class MyApp extends App {

    static async getInitialProps({Component, context}) {
        const pageProps = Component.getInitialProps ? Component.getInitialProps(context) : {}

        return {pageProps: pageProps}
    }

    render() {
        const {Component, pageProps, store} = this.props

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

// function that returns a new store for every request
const makeStore = () => store;

// wrapper that passes the store to the App Component through props
export default withRedux(makeStore)(MyApp); 