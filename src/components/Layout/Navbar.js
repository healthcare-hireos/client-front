import { faBuilding, faListAlt } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav className="flex justify-between items-center h-16 px-10">
      <div>
        <Link href="/">
          <img src="/img/logo.svg" className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex font-semibold	 ">
        <NavbarItem href="/" icon={faListAlt} label={t('offers')} />
        <NavbarItem href="/companies" icon={faBuilding} label={t('companies')} />
      </div>
    </nav>
  );
};

export default Navbar;