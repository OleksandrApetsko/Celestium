import { useDevAccess } from "../context/DevAccessContext.jsx";

/**
 * v1 DEV ACCESS
 * Single Source of Truth
 */

export function useAccess() {
  const { isPaid } = useDevAccess();

  return {
    hasAccess: () => isPaid,
    hasSubscription: () => isPaid,
    subscriptionType: isPaid ? "dev" : null,
    isDevPaid: isPaid,
  };
}
