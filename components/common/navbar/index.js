import Link from 'next/link';

export default function Navbar() {
  return (
    <section>
      <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
        <nav className='relative' aria-label='Global'>
          <div className='flex justify-between'>
            <div>
              <Link
                href='/home'
                className='font-medium mr-8 text-gray-500 hover:text-gray-900'
              >
                Home
              </Link>
              <Link
                href='/marketplace'
                className='font-medium mr-8 text-gray-500 hover:text-gray-900'
              >
                Marketplace
              </Link>
              <Link
                href='/blogs'
                className='font-medium mr-8 text-gray-500 hover:text-gray-900'
              >
                Blogs
              </Link>
            </div>
            <div className='flex gap-2'>
              <Link
                href='/wishlist'
                className='font-medium mr-8 text-gray-500 hover:text-gray-900'
              >
                Wishlist
              </Link>
              <div className='rounded-md shadow flex items-center justify-center overflow-hidden '>
                <Link
                  href='/login'
                  className='flex items-center justify-center rounded-md px-8 py-3 border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500'
                >
                  Connect Wallet
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
