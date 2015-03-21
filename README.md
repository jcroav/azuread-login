# azuread-login

Polymer Component to sign in your application using Azure Active Directory with Javascript ADAL. This component can be used
in Single Page Applications if you want to register users against your Azure Active Directory

# Content of this repository

In this repository you are going to find a MVC ASP.NET solution with the azuread-login component included in Element Folder.
Also you will see a view that it uses this component in Views/Home/Index.cshtml.

# How it works

To use this Web Component you must register your app in the Azure Active Directory firstly. After that you will get a ClientID
for these application and that´s all.

In the view where you want to add the component you only need to follow the next steps:

- Add both the link to the component in the Element/LoginElement folder and webcomponents.min.js
  
  ```html
    <script src="~/Scripts/webcomponents.min.js"></script>
    <link rel="import" href="~/Element/LoginElement/login.html" />
  ```
- Then add the component in your view
  
  ```html
    <login-azuread domain="<tenantdomainhere>" clientid="<clientidhere>">
    </login-azuread>
  ```
- You only have to set the domain of your tenant and clientid that you have got registering the app

After that, your login component will be running succesfully.

# Can I Style the Web Component?
  
  Obviously you can, You only have to give css style in your style sheet file to the next class:
  
  - loginad-name to style the username when you are logged
  - logoutad-a to give style to the login hyperlink
  - loginad-a to give style to the logout hyperlink
  
