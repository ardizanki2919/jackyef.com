import clsx from 'clsx';
import { css } from 'goober';

import { getHslaColor } from '@/lib/styles/colors';

type Props = {
  slug: string;
  content: string;
  level: number;
};
export const TableOfContentItem = ({ slug, content, level }: Props) => {
  return (
    <li
      key={slug}
      className={clsx('pb-2 transition-colors', {
        'pl-2 border-l-4': level === 3,
        [css`
          border-color: ${getHslaColor('outline', 0.1)};

          &:has(a.active),
          &:hover,
          &:focus-within {
            border-color: ${getHslaColor('outline', 0.4)};
          }
        `]: level === 3,
      })}
    >
      <a
        data-tocItem // Used by withTocHighlighter
        href={`#${slug}`}
        className={clsx(
          'text-sm text-theme-subtitle inline-block',
          'transition-all duration-500',
          css`
            transform: translateX(0);

            &.active,
            &:hover,
            &:focus {
              color: ${getHslaColor('outline')};
            }

            &.active {
              transform: translateX(6px);
              font-weight: 400;
              transition-duration: 200ms;
            }
          `,
        )}
      >
        {content}
      </a>
    </li>
  );
};