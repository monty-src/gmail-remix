/**
 * components/App
 *
 *
 */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GmailMail } from "./mail/GmailMail";
import { GmailHeader } from "./headers/GmailHeader";
import { GmailSidebar } from "./sidebar/GmailSidebar";

import { GmailEmailList } from "./mail/GmailEmailList";
import { GmailSendMail } from "./sendmail/GmailSendMail";

import { GmailApp, GmailBody } from "../styles/styles";

/**
 * App
 *
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Router>
      <GmailApp>
        <GmailHeader />
        <GmailBody>
          <GmailSidebar />
          <Routes>
            <Route path="/mail" element={<GmailMail />} />
            <Route path="/" element={<GmailEmailList />} />
          </Routes>
        </GmailBody>
        <GmailSendMail />
      </GmailApp>
    </Router>
  );
}

/** Export */
export default App;
