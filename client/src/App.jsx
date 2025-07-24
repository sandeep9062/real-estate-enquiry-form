import "./App.css";
import EnquiryPage2 from "./pages/EnquiryPage2";

import { Toaster } from "sonner";
function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen w-full bg-gray-50 m-0 p-0">
        <EnquiryPage2 />
      </div>
    </>
  );
}

export default App;
