import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// import AdminHeader from './admin/index'
import { Elements } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [admin, setAdmin] = useState(false)
  const [user, setUser] = useState({})

  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
