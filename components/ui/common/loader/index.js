const SIZES = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

export default function Loader({ size = md }) {
  return (
    <div className={`sk-circle ${SIZES[size]}`}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={`circle${index + 1}`}
          className={`sk-circle${index + 1} sk-child`}
        ></div>
      ))}
    </div>
  );
}
