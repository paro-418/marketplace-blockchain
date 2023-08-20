import useSWR from 'swr';

const URL =
  'https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

export const COURSE_PRICE = 499;

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json?.market_data.current_price.inr ?? null;
};

export const useEthPrice = () => {
  const { data: price, ...rest } = useSWR(URL, fetcher, {
    refreshInterval: 10000,
  });
  const costPerItem =
    (price && (COURSE_PRICE / Number(price)).toFixed(8)) ?? null;
  return {
    eth: { price, costPerItem, ...rest },
  };
};
