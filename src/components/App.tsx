/**
 * components/App
 *
 *
 */
import { GmailApp } from "../styles/styles";
import { GmailHeader } from "./headers/GmailHeader";
import { GmailSidebar } from "./sidebar/GmailSidebar";

/**
 * App
 *
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <GmailApp>
      <GmailHeader />
      <GmailSidebar />
    </GmailApp>
  );
}

/** Export */
export default App;
