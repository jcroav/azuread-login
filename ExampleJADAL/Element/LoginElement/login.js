window.config = {
    tenant: '',
    clientId: '',
    postLogoutRedirectUri: window.location.origin,
    cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
};

var authContext;

Polymer({
    userName: '',
    domain: '',
    clientID: '',
    ready: function () {
        window.config.tenant = this.domain;
        window.config.clientId = this.clientID;

        authContext = new AuthenticationContext(config);

        var isCallback = authContext.isCallback(window.location.hash);
        authContext.handleWindowCallback();

        if (isCallback && !authContext.getLoginError()) {
            window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
        }

        // Check Login Status, Update UI
        var user = authContext.getCachedUser();

        if (user)
            this.userName = user.userName;
        else
            this.userName = '';

    },
    attached: function () {
        var name = document.createElement("span");
        name.innerHTML = this.userName;
        name.className = "loginad-name";

        var login = document.createElement("a");
        login.href = "javascript:;";
        login.innerText = "Login";
        login.className = "loginad-a"
        login.addEventListener("click", this.login, true);

        if (this.userName != '')
            login.style.display = "none";
        else
            login.style.display = "inline-block";

        var logout = document.createElement("a");
        logout.href = "javascript:;";
        logout.innerText = "Logout";
        logout.className = "logoutad-a"
        logout.addEventListener("click", this.logout, true);

        if (this.userName != '')
            logout.style.display = "inline-block";
        else
            logout.style.display = "none";

        this.appendChild(name);
        this.appendChild(login);
        this.appendChild(logout);
    },
    login: function () {
        authContext.login();
    },
    logout: function () {
        authContext.logOut();
    }
});