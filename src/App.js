import { Route, Routes, useLocation } from "react-router-dom";
import { getCookie } from "./api/cookie";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import AdminAddItem from "./pages/AdminAddItem";
import AdminMain from "./pages/AdminMain";
import ItemDetail from "./pages/ItemDetail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import Payment from "./pages/Payment";
import Policy from "./pages/Policy";
import Search from "./pages/Search";
import ShopCart from "./pages/ShopCart";
import SearchList from "./pages/SearchList";
import SignUp from "./pages/SignUp";
import UseGuide from "./pages/UseGuide";
import UseService from "./pages/UseService";

function App() {
  const token = getCookie("accessToken");
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isPaymentPage = location.pathname === "/payment";
  return (
    <>
      {/* Header를 isAdminPage가 아닐 때만 렌더링 */}
      {!isAdminPage && !isPaymentPage && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/productlist" element={<SearchList />} />
        <Route path="/product/:pid" element={<ItemDetail />} />
        <Route path="/cart" element={token ? <ShopCart /> : <Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderdetail" element={<OrderDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/useservice" element={<UseService />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/useguide" element={<UseGuide />} />
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
