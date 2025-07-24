import "./App.css";
import EnquiryPage2 from "./pages/EnquiryPage2";

import { Toaster } from "sonner";
function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen bg-gray-50 p-4">
        <EnquiryPage2 />
      </div>
    </>
  );
}

export default App;
