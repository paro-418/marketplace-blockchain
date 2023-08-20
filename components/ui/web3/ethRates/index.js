import { useEthPrice, COURSE_PRICE } from '@components/hooks/useEthPrice';
import { Loader } from '@components/ui/common';

export default function EthRates() {
  const { eth } = useEthPrice();
  return (
    <div className='grid grid-cols-4 mb-5 mt-4 gap-4'>
      <div className='flex flex-1 text-center border-2 shadow-lg'>
        <div className='p-10 flex-1 drop-shadow rounded-md flex flex-col justify-center items-center '>
          {eth.price ? (
            <>
              <span className='text-2xl font-bold flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 48 48'
                  width='40px'
                  height='40px'
                >
                  <path fill='#9fa8da' d='M11 24L25 2 39 24 25 32z' />
                  <path fill='#7986cb' d='M25 2L39 24 25 32z' />
                  <path fill='#9fa8da' d='M11 27L25 35 39 27 25 46z' />
                  <path
                    fill='#7986cb'
                    d='M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z'
                  />
                  <path fill='#5c6bc0' d='M25 18L39 24 25 32z' />
                </svg>
                = &#8377; {eth?.price}
              </span>
            </>
          ) : (
            <Loader size='lg' />
          )}
          <p className='text-xl text-gray-500 mt-2'>Current eth Price</p>
        </div>
      </div>
      <div className='flex  items-center justify-center border-2 shadow-lg'>
        <div className='  flex-1 drop-shadow rounded-md  flex flex-col justify-center items-center'>
          <div className='text-2xl font-bold flex'>
            {eth.costPerItem ? (
              <>
                <span className='flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='40px'
                    height='40px'
                  >
                    <path fill='#9fa8da' d='M11 24L25 2 39 24 25 32z' />
                    <path fill='#7986cb' d='M25 2L39 24 25 32z' />
                    <path fill='#9fa8da' d='M11 27L25 35 39 27 25 46z' />
                    <path
                      fill='#7986cb'
                      d='M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z'
                    />
                    <path fill='#5c6bc0' d='M25 18L39 24 25 32z' />
                  </svg>
                  {eth?.costPerItem}
                </span>
                &nbsp;=&nbsp;
                <span>&#8377; {COURSE_PRICE}</span>
              </>
            ) : (
              <Loader size='md' />
            )}
          </div>
          <p className='text-xl text-gray-500'>Price per course</p>
        </div>
      </div>
    </div>
  );
}
