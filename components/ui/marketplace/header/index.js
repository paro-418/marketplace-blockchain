import { BreadCrumbs } from '@components/ui/common';
import { EthRates, WalletBar } from '@components/ui/web3';

export default function Header() {
  const LINKS = [
    {
      href: '/marketplace',
      value: 'Buy',
    },
    {
      href: '/marketplace/courses/owned',
      value: 'My Courses',
    },
    {
      href: '/marketplace/courses/manage',
      value: 'Manage Courses',
    },
  ];
  return (
    <>
      <WalletBar />
      <EthRates />
      <div className='my-8 flex flex-row-reverse'>
        <BreadCrumbs items={LINKS} />
      </div>
    </>
  );
}
