const {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} = require('react');
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { setupHooks } from './hooks/setupHooks';

const Web3Context = createContext(null);

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isLoading: false,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api({
          provider,
          web3,
          contract: null,
          isLoading: false,
        });
      } else {
        setWeb3Api((api) => ({
          ...api,
          isLoading: false,
        }));
        console.error('Please install metamask');
      }
    };
    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    const { web3, provider } = web3Api;
    return {
      ...web3Api,
      isWeb3Loaded: web3 !== null,
      getHooks: () => setupHooks(web3),
      connect: provider
        ? async () => {
            try {
              await provider.request({ method: 'eth_requestAccounts' });
            } catch (error) {
              console.log('Can not retrieve account', error);
              window.location.reload();
            }
          }
        : () =>
            console.log(
              'Can not connect to metamask, try to reload your browser'
            ),
    };
  }, [web3Api]);
  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks(cb) {
  const { getHooks } = useWeb3();
  return cb(getHooks());
}
