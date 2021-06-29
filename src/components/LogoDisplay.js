const LogoDisplay = ({ currentLogo }) => {
    return (
        <div className="displaylogos">
            <div className="inner">
                <h1 id="logo-title">{currentLogo.logoType}</h1>
                <div className="logo-pictures">
                    <img className="sample-picture" src={currentLogo.logoSamplePicture} alt=""></img>
                    <p id="logo-description">{currentLogo.logoDescription}</p>
                </div>
            </div>
        </div>
    )
}

LogoDisplay.defaultProps = {

}



export default LogoDisplay
