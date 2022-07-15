import { useState } from "react";

import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
