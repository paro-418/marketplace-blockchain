import { CourseCard, CourseList } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { getAllCourses } from 'content/courses/fetcher';
import { useWalletInfo } from '@components/hooks/web3';
import { Button } from '@components/ui/common';
import { OrderModal } from '@components/ui/order';
import { useState } from 'react';
import { MarketHeader } from '@components/ui/marketplace';

export default function MarketPlace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { canPurchaseCourse } = useWalletInfo();

const purchaseCourse = (order) => {
  console.log(order);
}
  return (
    <>
      <div>
        <div className='py-4'>
          <MarketHeader />
        </div>
        <CourseList courses={courses}>
          {(course) => (
            <CourseCard
              disabled={!canPurchaseCourse}
              key={course.id}
              course={course}
              Footer={() => (
                <div className='mt-2'>
                  <Button
                    disabled={!canPurchaseCourse}
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
        onSubmit = {purchaseCourse}
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
