import { CourseCard, CourseList } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { getAllCourses } from 'content/courses/fetcher';
import { WalletBar } from '@components/ui/web3';
import { useAccount } from '@components/hooks/web3/useAccount';
import { useNetwork } from '@components/hooks/web3/useNetwork';

export default function MarketPlace({ courses }) {
  const { account } = useAccount();
  const { network } = useNetwork();
  return (
    <div>
      <div className='py-4'>
        <WalletBar
          account={account.data}
          network={{
            data: network.data,
            target: network.target,
            isSupported: network.isSupported,
            hasFinishedFirstFetch: network.hasFinishedFirstFetch,
          }}
        />
      </div>
      <CourseList courses={courses}>
        {(course) => <CourseCard key={course.id} course={course} />}
      </CourseList>
    </div>
  );
}
MarketPlace.Layout = BaseLayout;

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}
