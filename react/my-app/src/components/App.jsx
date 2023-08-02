import react from "react";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import Notes from "./Notes.jsx";

function App() {
  return (
    <div className="app-container">
      <Heading />
      <Notes />
      <Footer className="footer" />
    </div>
  );
}
export default App;
