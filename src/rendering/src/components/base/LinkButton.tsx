import * as React from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { HiArrowRight } from 'react-icons/hi';

export interface LinkButtonProps extends React.PropsWithChildren {
  field: LinkProps['field'];
  variant?: 'white' | 'blue' | 'yellow' | string;
  outline?: boolean;
  centered?: boolean;
  full?: boolean;
  arrow?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ variant, outline, centered, full, arrow, children, ...props }) => (
  <Link
    className={classNames({
      't-flex t-items-center t-justify-center t-px-4 t-py-2 t-rounded-lg t-font-semibold t-whitespace-nowrap': true,
      't-bg-white t-text-primary hover:t-bg-primary hover:t-text-white': variant === 'white',
      't-bg-primary t-text-white hover:t-bg-white hover:t-text-primary': variant === 'blue',
      't-bg-secondary t-text-black hover:t-bg-black hover:t-text-secondary': variant === 'yellow',
      't-border': !!outline,
      't-border-primary': !!outline && variant === 'white',
      't-border-white': !!outline && variant === 'blue',
      't-border-black': !!outline && variant === 'yellow',
      't-w-fit': !full,
      't-w-full': !!full,
      't-mx-auto': !!centered,
    })}
    {...props}
  >
    <>
      <span className={classNames({ 't-mr-2': !!arrow })}>{children}</span>
      {!!arrow && <HiArrowRight />}
    </>
  </Link>
);

export default LinkButton;
