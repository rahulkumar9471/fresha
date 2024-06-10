import { Route, Routes } from "react-router-dom";
import Navbar from "./components/utils/Navbar";
import Home from "./components/pages/Home";
import Signup from "./components/auth/Signup";
import EmailVerification from "./components/auth/EmailVerification";
import NotFound from "./components/pages/NotFound";
import Signin from "./components/auth/Signin";
import Profile from "./components/user/Profile";
import AdminSignIn from "./components/adminAuth/AdminSignIn";
import { useAuth } from "./hooks";
import AdminNavigator from "./navigator/AdminNavigator";

function App() {

  const { authInfo } = useAuth();
  const isAdmin  = authInfo.profile?.role === "admin";

  if(isAdmin) return <AdminNavigator />

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/verification" element={<EmailVerification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
