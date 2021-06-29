import LogoBtn from "./components/LogoBtn";
import LogoDisplay from "./components/LogoDisplay";
import { logosData } from "./logosData";
import { useState } from 'react'

function App() {
  const [state, setState] = useState({ status: 'start', data: null });
  let currentLogo;
  const onLogoButtonClick = (logoType) => {
    currentLogo = logosData.find(logo => logo.logoType === logoType);

    setState({ status: 'logo-select', data: currentLogo })

  }

  return (
    <div className="container">
      <div className="graybox">
        <div className="inner">
          <div className="title">
            <p className="title-question">HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?</p>
            <div className="title-contact">
              <button className="contactBtn">Contact Us</button>
              <h1 className="title-styles">Different Types of Logo Styles</h1>
            </div>

            <div className="logoBoxes">

              {logosData.map((data) => {
                return (
                  <LogoBtn logoType={data.logoType} imgName={data.logoPicture} onLogoButtonClick={onLogoButtonClick} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {state.status === 'logo-select' && (
        <LogoDisplay currentLogo={state.data} />
      )}
    </div>
  );
}

export default App;
