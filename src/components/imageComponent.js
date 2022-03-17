import logo from "../assets/images/logo.svg";

function imageComponent() {
    let h = document.getElementById( "header" );
    let img = document.createElement( "img" );
    h.append( img );
    img.src = logo;
    img.width = 150;
    img.alt = "Logo";
    return h;
}

export default imageComponent;