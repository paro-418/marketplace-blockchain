import { Button, Message } from '@components/ui/common';
import { OwnedCourseCard } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { MarketHeader } from '@components/ui/marketplace';

export default function OwnedCourses() {
  return (
    <>
      <div className='py-4'>
        <MarketHeader />
      </div>
      <section className='grid grid-cols-1'>
        <OwnedCourseCard>
          <Message type='warning'>My custom message</Message>
          <Button>Watch the courses</Button>
        </OwnedCourseCard>
      </section>
    </>
  );
}

OwnedCourses.Layout = BaseLayout;
