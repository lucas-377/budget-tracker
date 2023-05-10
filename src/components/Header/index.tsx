import * as C from './styles';

function Header() {
  return (
    <C.HeaderContainer>
      <C.HeaderWrapper>
        <h1>Header</h1>

        <C.Menu>
          <li>
            <a href="#">Menu 1</a>
          </li>
          <li>
            <a href="#">Menu 2</a>
          </li>
          <li>
            <a href="#">Menu 3</a>
          </li>
          <li>
            <a href="#">Menu 4</a>
          </li>
        </C.Menu>

        <C.Avatar href="#!">
          <img src="./images/avatar/avatar.jpg" />
        </C.Avatar>
      </C.HeaderWrapper>
    </C.HeaderContainer>
  );
}

export default Header;
