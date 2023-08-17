import Link from 'next/link';
import { Button } from '@components/ui/common';
import { useWeb3 } from '@components/providers';
import { useEffect, useState } from 'react';
import { useAccount } from '@components/web3/hooks/useAccount';

export default function Navbar() {
  const { connect, isWeb3Loaded, isLoading } = useWeb3();
  const { account } = useAccount();
  const [currentAccount, setCurrentAccount] = useState(null);

  // useEffect(() => {
  //   if (!web3) return;
  //   const { account } = hooks.useAccount();
  //   setCurrentAccount(account);
  // }, [web3, hooks]);

  console.log(account);
  return (
    <section>
      <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
        <nav className='relative' aria-label='Global'>
          <div className='flex justify-between'>
            <span>
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
              ) : isWeb3Loaded ? (
                account ? (
                  <Button
                    className='cursor-default '
                    callFunction={connect}
                    hoverable={false}
                  >
                    Hi there
                  </Button>
                ) : (
                  <Button callFunction={connect}>Connect Wallet</Button>
                )
              ) : (
                <Button
                  callFunction={() =>
                    window.open('https://metamask.io/download.html', '_blank')
                  }
                  className='rounded-md shadow flex items-center justify-center overflow-hidden px-8 py-3 border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500'
                >
                  Install Metamask
                </Button>
              )}
            </span>
          </div>
        </nav>
      </div>
    </section>
  );
}
