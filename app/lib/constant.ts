import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import { LinkDef } from './typeDef';
import { AcademicCapIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

export const linkList: LinkDef[] = [
  { name: 'Accueil', href: '/', icon: HomeIcon },
  {
    name: 'Fondamentaux',
    href: '/pages/basics',
    icon: AcademicCapIcon
  },
  { name: 'Placements', href: '/pages/placement', icon: UserGroupIcon },
  { name: 'Rappel', href: '/pages/recall', icon: UserGroupIcon },
  { name: 'Test', href: '/pages/test', icon: ShieldCheckIcon }
];

export const basicVideo: LinkDef[] = [
  {
    name: 'Le coup naturel direct',
    href: 'https://youtu.be/Aana2gfloIM?si=aZavLdUytXl_7jFA',
    image:
      'https://i.ytimg.com/vi/Aana2gfloIM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeV6dvusAgGJGU1p3s5-_sUBk7eA'
  },
  {
    name: 'Le coup naturel 1 bande',
    href: 'https://youtu.be/KKh2FrCphks?si=IeHKmdCG4awlhCoi',
    image:
      'https://i.ytimg.com/vi/KKh2FrCphks/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDd0pv7gTdLqujn2zW0qF2yrvLsYQ'
  },
  {
    name: 'Le coup naturel 2 ou 3 bandes',
    href: 'https://youtu.be/b5lWBYL--W0?si=5KGaCKSek3eDqR8v',
    image:
      'https://i.ytimg.com/vi/b5lWBYL--W0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAukxdcSuAjajz-FS9Hs8hsLeajwg'
  },
  {
    name: 'La finesse',
    href: 'https://youtu.be/VRt0FgSUhZU?si=QQ9j1KvWiumXJkff',
    image:
      'https://i.ytimg.com/vi/VRt0FgSUhZU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjPLprf9f3xn5EycPyNJ9zY9luhA'
  },
  {
    name: 'Le retro',
    href: 'https://youtu.be/9axr_Tg3mFk?si=KbE7LsZUSxiq_9Gh',
    image:
      'https://i.ytimg.com/vi/9axr_Tg3mFk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw1JZkJ0l-T2OJWoagz_E7OfDcgQ'
  },
  {
    name: 'Le coulé',
    href: 'https://youtu.be/nkPStAq2M1E?si=ynyvk-ox8DiN63SV',
    image:
      'https://i.ytimg.com/vi/nkPStAq2M1E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBthlXHi4_bHHghwiCj-I4xFk4fng'
  },
  {
    name: "L'angle droit",
    href: 'https://youtu.be/E-nzIa2xYIw?si=h8S7Do4Bbb5LF13Y',
    image:
      'https://i.ytimg.com/vi/E-nzIa2xYIw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjxnErgs6X5lMRTVXcqE9BIUNbtQ'
  },
  {
    name: 'Le coup de reglage',
    href: 'https://youtu.be/rtk9lgRSk1c?si=E6LkNM4pl2XkKR8I',
    image:
      'https://i.ytimg.com/vi/rtk9lgRSk1c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBAwIk634Si9yIVi0OxyLVXP9Tlww'
  }
];

export const ZbasicVideo: LinkDef[] = [
  {
    name: 'Le coup naturel direct',
    href: '/',
    image:
      'https://i.ytimg.com/vi/Aana2gfloIM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeV6dvusAgGJGU1p3s5-_sUBk7eA'
  }
];

export const defaultImage = 'default-image';
