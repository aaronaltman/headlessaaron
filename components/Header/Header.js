import { useState } from 'react';
import classNames from 'classnames/bind';
import { FaBars, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { NavigationMenu, SkipNavigationLink } from '../';

import styles from './Header.module.scss';
let cx = classNames.bind(styles);
/**
 * A Header component
 * @param {Props} props The props object.
 * @param {string} props.className An optional className to be added to the container.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export default function Header({ className, menuItems }) {
  const [isNavShown, setIsNavShown] = useState(false);

  const headerClasses = cx('header', className);
  const navClasses = cx(
    'primary-navigation',
    isNavShown ? cx('show') : undefined
  );

  return (
    <header className={headerClasses}>
      <SkipNavigationLink />
      <div className="container">
        <StickyBar leftText="Shop our Spring Sale!" buttonText="Save 67% now" />
        <div className={cx('bar')}>
          <div className={cx('logo')}>
            <Link href="/">
              <a title="Home">
                <Image
                  src="https://bpheadlessaaro.wpengine.com/wp-content/uploads/2023/04/fixdapp-logo.webp"
                  width={150}
                  height={49}
                  alt="Fixdapp logo"
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
          <button
            type="button"
            className={cx('nav-toggle')}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={cx('primary-navigation')}
            aria-expanded={isNavShown}
          >
            <FaBars />
          </button>
          <NavigationMenu
            id={cx('primary-navigation')}
            className={navClasses}
            menuItems={menuItems}
          >
            <li>
              <Link href="/search">
                <a>
                  <FaSearch title="Search" role="img" />
                </a>
              </Link>
            </li>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
