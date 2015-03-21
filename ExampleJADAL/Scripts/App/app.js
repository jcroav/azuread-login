(function () {

    // Enter Global Config Values & Instantiate ADAL AuthenticationContext
    window.config = {
        tenant: 'organizer.onmicrosoft.com',
        clientId: 'b15b25b3-01c6-489e-adb3-578bfb87c4cb',
        postLogoutRedirectUri: window.location.origin,
        cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    };
    var authContext = new AuthenticationContext(config);

    // Check For & Handle Redirect From AAD After Login
    var isCallback = authContext.isCallback(window.location.hash);
    authContext.handleWindowCallback();

    if (isCallback && !authContext.getLoginError()) {
        window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
    }

    // Check Login Status, Update UI
    var user = authContext.getCachedUser();
    if (user) {
        console.log(user);
    } else {
        console.log("error");
    }

    var $signInButton = $(".app-login");

    $signInButton.click(function () {
        authContext.login();
    });
}());