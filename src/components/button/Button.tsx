import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { Spinner } from '../Spinner/Spinner';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-white hover:bg-brand-primary/90',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        outline: 'border border-gray-300 hover:bg-gray-100',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading = false, disabled, children, ...props }, ref) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(buttonVariants({ variant, size }), className)}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        {...props}
      >
        <span className="relative inline-flex items-center justify-center">
          {/*
            reason: while loading, spinner is overlayed, to preserve the width, the content is kept in the DOM,
            to prevent layout shifting when toggling the loading state
          */}
          {isLoading && (
            <span className="absolute inset-0 flex items-center justify-center">
              <Spinner size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'} />
            </span>
          )}
          {/* Content remains rendered and visually hidden, to ensure layout stability instead of conditional rendering */}
          <span
            className={clsx('inline-flex items-center justify-center', isLoading && 'opacity-0')}
          >
            {children}
          </span>
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
