import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import AdminAddItem from "./pages/AdminAddItem";
import AdminMain from "./pages/AdminMain";
import ItemDetail from "./pages/ItemDetail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import Payment from "./pages/Payment";
import Policy from "./pages/Policy";
import Search from "./pages/Search";
import SearchList from "./pages/SearchList";
import ShopCart from "./pages/ShopCart";
import SignUp from "./pages/SignUp";
import UseGuide from "./pages/UseGuide";
import UseService from "./pages/UseService";
import SNS from "./pages/SNS";

function App() {
  const accessToken = sessionStorage.getItem("accessToken");
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isPaymentPage = location.pathname === "/payment";
  return (
    <>
      {/* Header를 isAdminPage가 아닐 때만 렌더링 */}
      {!isAdminPage && !isPaymentPage && <Header />}
      <Routes>
        {/* 라우터 카카오 테스트 */}        
        <Route path="/sns" element={<SNS />} />

        <Route path="/" element={<Main />} />
        <Route path="/login" element={accessToken ? <Main /> : <Login />} />
        <Route
          path="/signup"
          element={accessToken ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/mypage" element={accessToken ? <Mypage /> : <Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/productlist" element={<SearchList />} />
        <Route path="/product/:pid" element={<ItemDetail />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/order" element={accessToken ? <Order /> : <Login />} />
        <Route
          path="/orderdetail"
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
      </Routes>
      {!isAdminPage && !isPaymentPage && <Footer />}
      <Routes>
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/adminAdd" element={<AdminAddItem />} />
      </Routes>
    </>
  );
}

export default App;
