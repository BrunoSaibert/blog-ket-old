import globalStyles from "../public/styles/global.js";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default ({ children }) => (
  <>
    <Navbar />

    {children}

    <Footer />

    <style jsx global>
      {globalStyles}
    </style>
  </>
);
