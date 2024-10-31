import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';

import { useRef } from 'react';
import { useRouter } from 'next/router';

import * as C from './styles';

const menuItems: MenuItem[] = [
  { label: 'Perfil', icon: 'pi pi-fw pi-user' },
  { label: 'Configurações', icon: 'pi pi-fw pi-cog' },
  { separator: true },
  { label: 'Sair', icon: 'pi pi-sign-out' },
];

function Header() {
  const menu = useRef<Menu>(null);
  const router = useRouter();

  return (
    <C.HeaderContainer>
      <C.HeaderWrapper>
        <C.HeaderLogo href="/">
          <h1>Realizze</h1>
        </C.HeaderLogo>

        <C.HeaderMenu>
          <C.HeaderMenuItem>
            <C.HeaderMenuLink
              href="/"
              className={router.pathname === '/' ? 'active' : ''}
            >
              Dashboard
            </C.HeaderMenuLink>
          </C.HeaderMenuItem>
          <C.HeaderMenuItem>
            <C.HeaderMenuLink
              href="/investments"
              className={router.pathname === '/investments' ? 'active' : ''}
            >
              Investimentos
            </C.HeaderMenuLink>
          </C.HeaderMenuItem>
          <C.HeaderMenuItem>
            <C.HeaderMenuLink href="#">Menu 3</C.HeaderMenuLink>
          </C.HeaderMenuItem>
          <C.HeaderMenuItem>
            <C.HeaderMenuLink href="#">Menu 4</C.HeaderMenuLink>
          </C.HeaderMenuItem>
        </C.HeaderMenu>

        <Avatar
          label="LS"
          size="large"
          shape="circle"
          onClick={(e) => menu.current.toggle(e)}
        />
        <Menu model={menuItems} popup ref={menu} />
      </C.HeaderWrapper>
    </C.HeaderContainer>
  );
}

export default Header;
