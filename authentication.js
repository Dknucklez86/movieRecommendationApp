ngular.module('myModule').config(function(authConfProvider) {
  authConfProvider.default.endpointUrl = 'http://myServer/myLoginEndpoint';
  authConfProvider.default.logoutEndpointUrl = 'http://myServer/myLogoutEndpoint';
  authConfProvider.default.loginState = 'myLoginState';
  authConfProvider.default.usernameFormProperty = 'username';
  authConfProvider.default.passwordFormProperty = 'password';
  authConfProvider.default.usernameProperty = 'username';
  authConfProvider.default.tokenProperty = 'token';
  authConfProvider.default.rolesProperty = 'roles';
  authConfProvider.default.refreshTokenProperty = 'refresh_token';
  authConfProvider.default.tokenTypeProperty = 'token_type';
  authConfProvider.default.adminRole: 'ROLE_ADMIN';
  authConfProvider.default.functionIfDenied = function(stateService, toState) {
    //what to do if user can't access this state
    //  };
    //    authConfProvider.default.functionIfAuthenticated = function(authService, responseData) {
    //        //what to do if user is successfully authenticated
    //          };
    //            authConfProvider.default.setFunctionIfLoggedOff = function() {
    //                //what to do if user is successfully logged off
    //                  };
    //                  });
    //
    //                  //if you need to use some services that can't be accessed in .config() phase, you can use .run():
    //                  angular.module('myModule').run(function(myService, authConf) {
    //                    authConf.default.functionIfLoggedOff = function() {
    //                        myService.doSomething();
    //                          };
    //                          }
