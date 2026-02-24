import * as React from 'react';
import clsx from 'clsx';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const sizeMap = {
  sm: { dimension: 'h-3 w-3', border: 'border-2' },
  md: { dimension: 'h-4 w-4', border: 'border-2' },
  lg: { dimension: 'h-6 w-6', border: 'border-[3px]' },
};

export const Spinner = ({ size = 'md', label = 'Loading', className, ...props }: SpinnerProps) => {
  const { dimension, border } = sizeMap[size];

  return (
    <span
      role="status"
      aria-label={label}
      className={clsx(
        'inline-block animate-spin rounded-full border-current border-t-transparent motion-reduce:animate-none',
        dimension,
        border,
        className
      )}
      {...props}
    />
  );
};

Spinner.displayName = 'Spinner';
