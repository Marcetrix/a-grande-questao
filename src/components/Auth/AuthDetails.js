import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(authUser, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  function userSignOut () {
    signOut(authUser)
      .then(() => {
        console.log("sign out successful");
        return true
      })
      .catch((error) => {console.log(error)
        return false;
      });
  };

  function userLoggedIn () {
    return (authUser ? true : false)
  };

  return (authUser ? true : false)
};

export default AuthDetails ;


