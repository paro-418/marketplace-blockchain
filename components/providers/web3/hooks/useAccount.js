import { useEffect } from 'react';
import useSWR from 'swr';

const ADMIN_ADDRESS = {
  '0xee915c3a55e51579e2b2889b97aa6165df28128ca055503b95e3b2a8505486eb': true,
};

export const handler = (web3, provider) => () => {
  const { mutate, data, ...rest } = useSWR(
    () => (web3 ? 'web/accounts' : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on('accountsChanged', (accounts) => mutate(accounts[0] ?? null));
  }, [mutate]);

  return {
    account: {
      data,
      isAdmin: (data && ADMIN_ADDRESS[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest,
    },
  };
};
