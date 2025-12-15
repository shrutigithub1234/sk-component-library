import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black',
  secondary: 'bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400',
  outline: 'border border-gray-300 text-black hover:bg-gray-100 focus:ring-gray-400',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={clsx(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        (disabled || isLoading) && 'opacity-50 cursor-not-allowed'
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
