import { VscSearch, VscTerminalBash } from 'react-icons/vsc';
import { GoBrowser } from 'react-icons/go';
import type { IconType } from 'react-icons';

interface Mode {
  name: 'search' | 'excute' | 'gobrowser';
  icon: IconType;
}

export const mode = [
  {
    name: 'search',
    icon: VscSearch,
  },
  {
    name: 'excute',
    icon: VscTerminalBash,
  },
  {
    name: 'gobrowser',
    icon: GoBrowser,
  },
] as Mode[];

export const runByMode = (current: Mode) => {
  switch (current.name) {
    case 'search':
      break;
    case 'excute':
      break;
    case 'gobrowser':
      break;
    default:
      break;
  }
};
