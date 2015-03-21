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

<ul>
  <li>Add both the link to the component in the Element/LoginElement folder and webcomponents.min.js</li>
  
  ```html
    <script src="~/Scripts/webcomponents.min.js"></script>
    <link rel="import" href="~/Element/LoginElement/login.html" />
  ```
  <li>Then add the component in your view</li>
  
  ```html
    <login-azuread domain="<tenantdomainhere>" clientid="<clientidhere>">
    </login-azuread>
  ```
  <li>You only have to set the domain of your tenant and clientid that you have got registering the app</li>
</ul>

After that, your login component will be running succesfully.
