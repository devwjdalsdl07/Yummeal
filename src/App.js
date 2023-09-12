import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Intro from "./pages/Intro";
import ItemDetail from "./pages/ItemDetail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import Payment from "./pages/Payment";
import Policy from "./pages/Policy";
import SNS from "./pages/SNS";
import Search from "./pages/Search";
import SearchList from "./pages/SearchList";
import ShopCart from "./pages/ShopCart";
import SignUp from "./pages/SignUp";
import UseGuide from "./pages/UseGuide";
import UseService from "./pages/UseService";
import KaKaoOauth from "./pages/KaKaoOauth";

function App() {
  const accessToken =
    sessionStorage.getItem("accessToken") ||
    localStorage.getItem("accessToken");
  const location = useLocation();
  const isPaymentPage = location.pathname === "/payment";
  const isIntro = location.pathname === "/";
  return (
    <>
      {/* Header를 isAdminPage가 아닐 때만 렌더링 */}
      {!isPaymentPage && !isIntro && <Header />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={accessToken ? <Main /> : <Login />} />
        <Route
          path="/signup"
          element={accessToken ? <Navigate to="/main" /> : <SignUp />}
        />
        <Route path="/mypage" element={accessToken ? <Mypage /> : <Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/productlist" element={<SearchList />} />
        <Route path="/product/:pid" element={<ItemDetail />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/order" element={accessToken ? <Order /> : <Login />} />
        <Route
          path="/orderlist/:ordercode"
          element={accessToken ? <OrderDetail /> : <Login />}
        />
        <Route
          path="/payment"
          element={accessToken ? <Payment /> : <Login />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/useservice" element={<UseService />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/useguide" element={<UseGuide />} />
        {/* <Route path="/password" element={<PassWordCheck />} /> */}
        <Route path="/*" element={<NotFound />} />
        {/* 라우터 카카오 테스트 */}
        <Route path="/sns" element={<SNS />} />
        <Route path="/oauth/redirect" element={<KaKaoOauth />} />
      </Routes>
      {!isPaymentPage && !isIntro && <Footer />}
    </>
  );
}

export default App;
