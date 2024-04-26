import Link from "next/link";

export interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE]'>
      {title}
    </Link>
  );
};

export default NavLink;
