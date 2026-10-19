import "./index.css"

const App = () => {
    return(
    <div className="nav-bar">
        <div id="nav-bar-elements">
            <i className="fa-brands fa-spotify"></i>
            <i className="fa-solid fa-house" id="home-icon"></i>
            <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="What do you want to play?" id="txt-box"></input>

                <span className="divider"></span>
                <i className="fa-solid fa-folder browse-icon" id="fold-icon"></i>
            </div>
            <div className="dwnld">
                <i className="fa-solid fa-circle-arrow-down" id="dwnld-icon"></i>
                <p>Install App</p>
            </div>
            <div className="profile">
                <div className="prf">
                    <i className="fa-solid fa-user" id="prf-icon"></i>
                </div>
            </div>
        </div>
    </div>
    );
};

export default App;