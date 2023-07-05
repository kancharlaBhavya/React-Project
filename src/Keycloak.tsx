import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8080/auth/",
 realm: "myrealm",
 clientId: "myclient",
});

keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
    if (authenticated) {
      console.log('User is authenticated');
    } else {
      console.log('User is not authenticated');
    }
  });

export default keycloak;