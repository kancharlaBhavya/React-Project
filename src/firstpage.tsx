import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import Dashboard from "./pages/dashboard";

const FirstPage = () => {
  const { keycloak, initialized } = useKeycloak();
  const { tokenParsed } = keycloak;
  const preferredUsername = tokenParsed?.preferred_username;
  return (
    <div className="hover:text-gray-200">
      {!keycloak.authenticated && (
        <button
          type="button"
          className="text-blue-800"
          onClick={() => keycloak.login()}
        >
          Login
        </button>
      )}

      {!!keycloak.authenticated && (
        <button
          type="button"
          className="text-blue-800"
          onClick={() => keycloak.logout()}
        >
          Logout ({preferredUsername})
        </button>
      )}
    </div>
  );
};

export default FirstPage;
