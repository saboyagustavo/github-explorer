import { HeaderProps } from '../@types/components';
import '../styles/components-styles/header.scss';
import logo  from '../assets/images/Logo.svg';
import arrowLeft from '../assets/images/ArrowLeft.svg';

export function Header({ homePage } : HeaderProps) {
  return (
    <header className="header-container">
      <div className="header-content">
        <img 
          id="logo" 
          src={logo} 
          alt="app logo: a compass icon followed by github_explorer"
          draggable="false"
        />

        {!homePage && (
          <button>
            <img src={arrowLeft} alt="arrow to the left" draggable="false"/>
            Back
          </button>
        )}
      </div>
    </header>
  );   
}