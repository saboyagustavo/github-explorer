import logo  from '../assets/images/Logo.svg';
export function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="app logo: a compass icon followed by github_explorer" />
      </header>
    </>
  );   
}