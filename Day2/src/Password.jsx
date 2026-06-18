import React, { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h2>Show / Hide Password</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? " Hide Password" : " Show Password"}
      </button>
   </>
  );
}

export default Password;