import { CourseCard, CourseList } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { getAllCourses } from 'content/courses/fetcher';
import { WalletBar } from '@components/ui/web3';
import { useAccount, useNetwork } from '@components/hooks/web3';
import { Button } from '@components/ui/common';
import { OrderModal } from '@components/ui/order';
import { useState } from 'react';

export default function MarketPlace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { account } = useAccount();
  const { network } = useNetwork();
  return (
    <>
      <div>
        <div className='py-4'>
          <WalletBar
            account={account.data}
            network={{
              data: network.data,
              target: network.target,
              isSupported: network.isSupported,
              hasInitialResponse: network.hasInitialResponse,
            }}
          />
        </div>
        <CourseList courses={courses}>
          {(course) => (
            <CourseCard
              key={course.id}
              course={course}
              Footer={() => (
                <div className='mt-2'>
                  <Button
                    variant='lightPurple'
                    callFunction={() => setSelectedCourse(course)}
                  >
                    Purchase
                  </Button>
                </div>
              )}
            />
          )}
        </CourseList>
      </div>
      <OrderModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </>
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
