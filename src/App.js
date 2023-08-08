import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemDetail from "./pages/ItemDetail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import SearchList from "./pages/SearchList";
import ShopCart from "./pages/ShopCart";
import SignUp from "./pages/SignUp";
import AdminMain from "./pages/AdminMain";
import AdminAddItem from "./pages/AdminAddItem";
import Payment from "./pages/Payment";

function App() {
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
        <Route path="/productlist" element={<SearchList />} />
        <Route path="/product/:pid" element={<ItemDetail />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderdetail" element={<OrderDetail />} />
        <Route path="/payment" element={<Payment />} />
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
