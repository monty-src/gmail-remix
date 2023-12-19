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
import { selectSendMessageIsOpen } from "../store/mail/selectors/selectSendMessageIsOpen";

import { GmailApp, GmailBody } from "../styles/styles";
import { useAppSelector } from "../store/hooks";

/**
 * App
 *
 *
 * @returns {JSX.Element}
 */
function App() {
  const sendMessageIsOpen = useAppSelector(selectSendMessageIsOpen);
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
        {sendMessageIsOpen && <GmailSendMail />}
      </GmailApp>
    </Router>
  );
}

/** Export */
export default App;
