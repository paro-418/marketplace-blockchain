import { Hero } from '@components/ui/common/index';
import { CourseList } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { getAllCourses } from 'content/courses/fetcher';

export default function Home({ courses }) {
  return (
    <div>
      <Hero />
      <CourseList courses={courses} />
    </div>
  );
}
Home.Layout = BaseLayout;

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}
