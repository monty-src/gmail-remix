/**
 * components/App
 *
 *
 */
import { GmailHeader } from "./headers/GmailHeader";

/**
 * App
 *
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="app">
      <GmailHeader />
      <h1>Lets build something</h1>
    </div>
  );
}

/** Export */
export default App;
