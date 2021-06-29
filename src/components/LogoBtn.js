const LogoBtn = ({ logoType, imgName, onLogoButtonClick }) => {
    let formatedString = logoType.split('\n').map((item, i) => <p key={i}>{item}</p>);
    return (
        <button className="logoBtn" onClick={() => onLogoButtonClick(logoType)}>
            <img className="mini-logo" src={imgName} alt={logoType} />
            {formatedString}
        </button>
    )
}



LogoBtn.defaultProps = {
    title: "default",
}




export default LogoBtn
