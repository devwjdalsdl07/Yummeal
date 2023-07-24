import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AdminAddItem from "./pages/AdminAddItem";
import AdminMain from "./pages/AdminMain";
import ItemDetail from "./pages/ItemDetail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import SearchList from "./pages/SearchList";
import ShopCart from "./pages/ShopCart";
import SignUp from "./pages/SignUp";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  return (
    <>
      {/* Header를 isAdminPage가 아닐 때만 렌더링 */}
      {!isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/product" element={<ItemDetail />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderdetail" element={<OrderDetail />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/adminAdd" element={<AdminAddItem />} />
      </Routes>
    </>
  );
}

export default App;
