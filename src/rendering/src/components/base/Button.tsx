import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

interface ButtonProps {
  buttonText?: string;
  className?: string;
  secondary?: boolean;
  outline?: boolean;
  isCentered?: boolean;
  fullWidth?: boolean;
  arrow?: boolean;
}

/**
 * A simple button element
 * @param {string} buttonText - The text to display on the button
 * @param {string} className - Any additional classes to apply to the button (not the wrapping div)
 * @param {boolean} secondary - Whether to use the secondary color scheme
 * @param {boolean} outline - Whether to use the outline color scheme
 * @param {boolean} isCentered - Whether to center the button in its container
 * @param {boolean} fullWidth - Whether to make the button fill its container (overrides isCentered)
 * @param {boolean} arrow - Whether to display an arrow to the right of the button text
 * @returns {React.ReactElement<ButtonProps>} - A button element
 */
export default function Button({
  buttonText = 'Join the Movement',
  className = '',
  secondary = false,
  outline = false,
  isCentered = false,
  fullWidth = false,
  arrow = false,
}: ButtonProps): React.ReactElement<ButtonProps> {
  const buttonClass = outline
    ? `t-bg-white t-border-2 ${secondary ? 't-text-secondary t-border-secondary' : 't-text-primary t-border-primary'} t-font-semibold ${
        secondary ? 'hover:t-bg-secondary' : 'hover:t-bg-primary'
      } hover:t-text-white`
    : `t-text-center ${fullWidth ? 't-w-full' : 't-w-fit'} ${secondary ? 't-bg-secondary' : 't-bg-primary t-text-white'} t-px-4 t-p-2 t-rounded`;

  return (
    <div className={isCentered ? 't-flex t-justify-center t-items-center' : ''}>
      <button className={`${buttonClass} t-px-4 t-py-2 t-rounded-lg t-whitespace-nowrap t-flex t-items-center t-justify-center ${className}`}>
        <strong className="t-mr-2">{buttonText}</strong>
        {arrow && <HiArrowRight />}
      </button>
    </div>
  );
}
