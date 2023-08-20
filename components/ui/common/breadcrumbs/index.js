import { ActiveLink } from '@components/ui/common/index.js';

export default function BreadCrumbs({ items }) {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='flex leading-none text-indigo-500 divide-x divide-indigo-400'>
        {items.map((item, index) => (
          <li
            className={`${index === 0 ? 'pr-4' : 'px-4'} font-medium`}
            key={item.href}
          >
            <ActiveLink href={item.href}>{item.value}</ActiveLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}
