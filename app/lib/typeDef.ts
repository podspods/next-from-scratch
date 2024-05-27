export type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement>
>;

export type LinkDef = {
  name: string;
  href: string;
  icon?: HeroIcon;
  image?: string;
};
