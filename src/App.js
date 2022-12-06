
import './App.css';
import SignIn from './SignIn/SignIn';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PasswordPage from './SignIn/PasswordPage';
import Terms from './SignIn/Terms';
import SignUp from './Logins/signUp';
import OtpPage from './Logins/OtpPage';
import MainPage from './HomePage/Home/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/password" exact element={<PasswordPage />} />
        <Route path="/term" exact element={<Terms />} />
        <Route path="/login" exact element={<SignUp />} />
        <Route path="/otp" exact element={<OtpPage />} />
        <Route path="/home" exact element={<MainPage />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
