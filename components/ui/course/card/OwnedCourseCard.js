export default function OwnedCourseCard({ children }) {
  return (
    <div className='bg-white border shadow overflow-hidden sm:rounded-lg mb-3'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Next JS & Typescript with Shopify Integration - Full Guide
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>0.0065 ETH</p>
      </div>

      <div className='border-t border-gray-200'>
        <dl>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Order ID</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              0x9a4e56614591da8c1ad30fe04ac672111a7f20faa92f7c484568b0213bfbf405
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Proof</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              0x95f147a2c0ced33a2d49b7ce780bc2a9cf404593c64658b336ab2eb7d9136d90
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:px-6'>
            
            {/* <div className='sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow-md'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-md md:px-10'
                >
                  Watch the course
                </a>
              </div> */}
            {/* </div> */}
            {/* <div className='mt-2'>
              <div className='mt-1 relative rounded-md w-72'>
                <input
                  type='text'
                  name='price'
                  id='price'
                  className='focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md'
                  placeholder='x@y.com'
                />
                <div className='absolute inset-y-0 right-0 flex items-center'>
                  <label htmlFor='currency' className='sr-only'>
                    Currency
                  </label>
                  <div className='flex lg:justify-start'>
                    <div className='rounded-md shadow'>
                      <a
                        href='#'
                        className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-10'
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {children}
          </div>
        </dl>
      </div>
    </div>
  );
}
