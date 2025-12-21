import { createContext, useContext, useState } from "react";

/**
 * DEV ONLY
 * Global paid / free toggle for the whole app
 */

const DevAccessContext = createContext(null);

export function DevAccessProvider({ children }) {
  const [isPaid, setIsPaid] = useState(false);

  function toggle() {
    setIsPaid((v) => !v);
  }

  return (
    <DevAccessContext.Provider value={{ isPaid, toggle }}>
      {children}
    </DevAccessContext.Provider>
  );
}

export function useDevAccess() {
  const ctx = useContext(DevAccessContext);
  if (!ctx) {
    throw new Error("useDevAccess must be used inside DevAccessProvider");
  }
  return ctx;
}
