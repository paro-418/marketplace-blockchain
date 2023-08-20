import { useHooks } from '@components/providers/web3';

const enhancedHook = (swrResponse) => {
  return {
    ...swrResponse,
    hasInitialResponse: swrResponse.data || swrResponse.error,
  };
};

export const useAccount = () => {
  const swr = enhancedHook(useHooks((hooks) => hooks.useAccount)());
  return {
    account: swr,
  };
};

export const useNetwork = () => {
  const swr = enhancedHook(useHooks((hooks) => hooks.useNetwork)());
  return {
    network: swr,
  };
};

export const useWalletInfo = () => {
  const { account } = useAccount();
  const { network } = useNetwork();
  return {
    account,
    network,
    canPurchaseCourse: !!(account.data && network.isSupported),
  };
};
