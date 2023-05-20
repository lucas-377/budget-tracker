import * as C from './styles';

function Footer() {
  return (
    <C.FooterWrapper>
      <hr />
      <C.FooterCopy>
        Copyright &#169; {new Date().getFullYear()} | Lucas Santana
      </C.FooterCopy>
    </C.FooterWrapper>
  );
}

export default Footer;
