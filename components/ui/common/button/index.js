export default function Button({
  callFunction,
  children,
  disabled,
  className,
  variant = 'purple',
  hoverable = true
}) {

  const variants = {
    purple: `text-white bg-indigo-600 ${hoverable && 'hover:bg-indigo-700'}`,
    red: `text-white bg-red-600 ${hoverable && 'hover:bg-red-700'}`,
  };
  return (
    <button
      onClick={callFunction}
      disabled={disabled}
      className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md shadow flex items-center justify-center overflow-hidden px-8 py-3 border text-base font-medium hover:opacity-90 ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
