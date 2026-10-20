import { forwardRef } from 'react';
import type { IconButtonProps } from './Button.types';
import { cn } from '../../lib/cn';
import Button from './Button';
import styles from './Button.module.css';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <Button
        {...rest}
        ref={ref}
        className={cn(styles.iconButton, className)}
      >
        {children}
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
