import Link from 'next/link';
import { Button } from '@components/ui/common';
import { useWeb3 } from '@components/providers';
import { useAccount } from '@components/hooks/web3';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { connect, requireInstall, isLoading } = useWeb3();
  const { account } = useAccount();
  const { pathname } = useRouter();

  return (
    <section>
      <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
        <nav className='relative' aria-label='Global'>
          <div className='flex justify-between'>
            <span>
              <Link
                href='/'
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
            </span>
            <span className='flex gap-2'>
              <Link
                href='/wishlist'
                className='font-medium mr-8 text-gray-500 hover:text-gray-900'
              >
                Wishlist
              </Link>

              {isLoading ? (
                <Button disabled={true}>Loading...</Button>
              ) : account.data ? (
                <Button
                  className='cursor-default '
                  callFunction={connect}
                  hoverable={false}
                >
                  Hi there {account.isAdmin && ' Admin'}
                </Button>
              ) : requireInstall ? (
                <Button
                  callFunction={() =>
                    window.open('https://metamask.io/download.html', '_blank')
                  }
                  className='rounded-md shadow flex items-center justify-center overflow-hidden px-8 py-3 border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500'
                >
                  Install Metamask
                </Button>
              ) : (
                <Button callFunction={connect}>Connect Wallet</Button>
              )}
            </span>
          </div>
        </nav>
      </div>
      {account.data && !pathname.includes('/marketplace') && (
        <div className='flex justify-end pt-2 sm:px-6 lg:px-8'>
          <div className='text-white bg-indigo-600 rounded-md p-2'>
            {account.data}
          </div>
        </div>
      )}
    </section>
  );
}
