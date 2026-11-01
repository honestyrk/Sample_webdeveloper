/**
 * Utility: cn — combines class names, filtering out falsy values.
 * Mirrors the shadcn/ui `cn` helper without requiring clsx or tailwind-merge.
 * @param {...(string|undefined|null|false)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

