import logo from "@/assets/logo.svg";

const FullNav = () => {
    return (
        <div className="navlist">
            <a href={"#"}>Live</a>
            <a href={"#"}>Push</a>
            <a href={"#"}>Move</a>
            <a href={"#"}>Note</a>
            <a href={"#"}>Link</a>
            <a href={"#"}>Shop</a>
            <a href={"#"}>Packs</a>
            <a href={"#"}>Help</a>
            <a href={"#"}>More+</a>
        </div>
    );
};

const SmallNav = () => {
    return (
        <div>
            <div></div>
        </div>
    );
};

export default function NavBar() {
    let NavButton;

    if (window.innerWidth <= 1024) {
        NavButton = <SmallNav />;
    } else {
        NavButton = <FullNav />;
    }

    return (
        <div className=".navbar">
            <div>
                <a className="logo_container" href="#">
                    <img className="logo" src={logo} alt={"Site logo"} />
                </a>
                {NavButton}
            </div>
            <div></div>
            <div>
            </div>
        </div>
    );
}
