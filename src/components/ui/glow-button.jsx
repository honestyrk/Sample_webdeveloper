import { forwardRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * GlowButton — a sparkling CTA button with a radial glow pulse on click.
 *
 * Props:
 *  label     — button text (default: "Generate")
 *  onClick   — click handler
 *  className — extra CSS classes
 */
export const GlowButton = forwardRef(function GlowButton(
  { label = 'Generate', onClick, className },
  ref
) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    onClick?.();
  };

  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      className={cn('glow-btn', className)}
      onClick={handleClick}
      data-state={isClicked ? 'clicked' : undefined}
    >
      <span className="glow-btn__inner">
        {label}
        <Sparkles size={16} className="glow-btn__icon" aria-hidden="true" />
      </span>
    </button>
  );
});

GlowButton.displayName = 'GlowButton';

