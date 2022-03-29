import Link from 'next/link'
import React, { useState } from 'react'

const Form = () => {
  const [state, setstate] = useState({
    name: '',
    phoneNumber: '',
    company: '',
    loadNumber: '',
    customerName: '',
    containerNumber: '',
  })

  //   const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()
    const {
      name,
      phoneNumber,
      company,
      loadNumber,
      customerName,
      containerNumber,
    } = state

    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phoneNumber,
        company,
        loadNumber,
        customerName,
        containerNumber,
      }),
    })
    const data = await response.json()

    if (response.status === 422 || !data) {
      alert('invalid submission')
    } else {
      alert('successful submission')
    }
    console.log(state)
    setstate({
      name: '',
      phoneNumber: '',
      company: '',
      loadNumber: '',
      customerName: '',
      containerNumber: '',
    })
  }

  const handleChange = (e) => {
    const value = e.target.value
    setstate({
      ...state,
      [e.target.name]: value,
    })
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <div className="w-full max-w-md space-y-8">
          <h2 className="mt-6 text-left text-3xl font-extrabold text-amber-500">
            Navtrac Customer Details
          </h2>
          <form method="POST">
            <div className="space-y-4">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="email-address"
                    name="name"
                    type="text"
                    autoComplete="email"
                    required
                    className="relative my-3 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Full Name"
                    value={state.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Ph No
                  </label>
                  <input
                    id="email-address"
                    name="phoneNumber"
                    type="text"
                    autoComplete="email"
                    required
                    className="relative my-3 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="phoneNumber"
                    value={state.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Hauling Company
                  </label>
                  <input
                    id="email-address"
                    name="company"
                    type="text"
                    autoComplete="email"
                    required
                    className="relative my-3 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Hauling Company"
                    value={state.company}
                    onChange={handleChange}
                  />
                </div>
                <h2 className="mt-6 text-left text-2xl font-extrabold text-amber-500">
                  Hauling Information
                </h2>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Booking No
                  </label>
                  <input
                    id="email-address"
                    name="loadNumber"
                    type="text"
                    autoComplete="email"
                    required
                    className="relative my-3 block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Load/Booking Number"
                    value={state.loadNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Customer Name
                  </label>
                  <input
                    id="email-address"
                    name="customerName"
                    type="text"
                    autoComplete="email"
                    required
                    className="relative my-3 block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Customer Name"
                    value={state.customerName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Cotainer Number
                  </label>
                  <input
                    id="password"
                    name="containerNumber"
                    type="text"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Container Number"
                    value={state.containerNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={onSubmit}
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
