/**
 * components/App
 *
 *
 */
import { Header } from "./headers/Header";

/**
 * App
 *
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="app">
      <Header />
      <h1>Lets build something</h1>
    </div>
  );
}

/** Export */
export default App;
