import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Sample from "./home/Sample";
import Login from "./auth/Login";
import EmailPassword from "./auth/EmailPassword";
import SignUp from "./auth/SignUp";
import OtpVerifyed from "./auth/OtpVerifyed";
import ForgotPassword from "./auth/ForgotPassword";
import Password from "./auth/Password";
import PrivateRoute from "./utils/PrivateRoute"
import PublicRoute from "./utils/PublicRoute"
import UserSubscription from "./auth/UserSubscription";
import MyTeam from "./home/MyTeam";
import AddTeam from "./home/AddTeam";
import Profile from "./home/Profile";
import PaymentHistory from "./home/PaymentHistory";
import Dashboard from "./home/Dashboard";
import ChangePassword from "./home/ChangePassword";
import MySubscription from "./home/MySubscription";
import Demo from "./Demo";
import PaymentPage from "./home/PaymentPage";
import Footer from "./common/Footer";
import Faq from "./common/Faq";
import ContactUs from "./auth/ContactUs";
import LeasonPlan from "./leason/LeasonPlan";
import CreateLeasone from "./leason/CreateLeasone";
import ParticipantList from "./leason/ParticipantList";
import LeasonOverview from "./leason/LeasonOverview";
import EditLeason from "./leason/EditLeason";
import SmeList from "./sme/SmeList";
import AddSme from "./sme/AddSme";
import SubjectList from "./sme/SubjectList";
import AddSubject from "./sme/AddSubject";


function App() {
  return (
    <div className="App">
       <HashRouter>
   
   <Routes>

   {/* <Route element={<PrivateRoute />}>  */}
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Demo />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/email-password" element={<EmailPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/otp" element={<OtpVerifyed />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password" element={<Password />} />
        <Route path="/chat" element={<Home />} />
    
        <Route path="/subscription" element={<UserSubscription />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/add-team" element={<AddTeam />} />
        <Route path="/update-profile" element={<Profile />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/my-subscription" element={<MySubscription />} />
        <Route path="/card/:id" element={<PaymentPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/leason" element={<LeasonOverview />} />
        <Route path="/leason-plan" element={<LeasonPlan />} />
        <Route path="/create-leason" element={<CreateLeasone />} />
        <Route path="/participant-list" element={<ParticipantList />} />
        <Route path="/edit-leason" element={<EditLeason />} />
        <Route path="/sme-list" element={<SmeList />} />
        <Route path="/add-sme" element={<AddSme />} />
        <Route path="/subject" element={<SubjectList />} />
        <Route path="/add-subject" element={<AddSubject />} />
        
      {/* </Route> */}

      {/* <Route element={<PublicRoute />}> 
          <Route path="/home" element={<Home />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/subscription" element={<UserSubscription />} />
      </Route> */}

   </Routes>
       <Footer/>
       </HashRouter>
    </div>
  );
}

export default App;
