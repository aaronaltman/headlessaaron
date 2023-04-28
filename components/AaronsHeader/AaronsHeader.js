import { gql } from "@apollo/client";
import Link from "next/link";

import style from "./header.module.css";

export default function Header({ siteTitle, siteDescription, menuItems }) {
    return (
        <header className={style.header}>
            <div className="container">
                <Link href="/" className={style.brand}>
                    <img src="https://i0.wp.com/www.fixdapp.com/wp-content/uploads/2022/07/fixdapp-logo.png?fit=300%2C96&ssl=1" width="150px" height="49px" alt="My Site Logo" />
                </Link>

                <nav className={style.nav}>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link href={item.uri}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

Header.fragments = {
    entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
        nodes {
          id
          uri
          path
          label
          parentId
          cssClasses
          menu {
            node {
              name
            }
          }
        }
      }
    }
  `,
};
