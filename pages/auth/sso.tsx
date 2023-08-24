import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import React, { useEffect } from "react";

export default function SingleSignOn() {
  const router = useRouter();
  const state = router.query.state;

  useEffect(() => {
    setTimeout(() => {
      if (state?.indexOf('sso:') === 0) {
        const connection = state.slice(4) as string;
        signIn("auth0", { }, {
          connection: connection
        });        
      }

    }, 1000);
  });

  // To avoid a flash before the redirect here, you can have a s
  return (
    <div id="sso">
      <h1>SSO</h1>
      <p>Signing you in using SSO... {router.query.foo}</p>
    </div>
  );
}
