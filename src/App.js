import MyRoutes from "./routers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <MyRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
