/**
 * @module src/bootstrap/Providers
 *
 *
 */
import { Provider } from "react-redux";
import { store } from "../store/store";

/**
 * Providers
 *
 *
 * @param {React.ReactNode} children
 * @returns {JSX.Element}
 */
export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
