import DashBoard from './components/DashBoard/DashBoard';
import Product from './components/Product/Product';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Attributes from './components/Attributes/Attributes';
import AddAttribute from './components/AddAttribute/AddAttribute';
import './App.css'
import AddNewUser from './UserTable/AddNewUser';
import Role from './components/roles/Role';
import UserTable from './UserTable/UserTable';
import AddCategory from './components/table/AddCategory';
import TableFunc from './components/table/TableFunc';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import AddRole from './components/roles/AddRole';
import Media from './components/media/Media';
import AddBanner from './components/media/AddBanner';
import DeleteBanner from './components/media/DeleteBanner';
import UpdateBanner from './components/media/UpdateBanner';
import UpdateCategory from './components/table/UpdateCategory';
import EditAttribute from './components/AddAttribute/EditAttribute';
import EditProduct from './components/ProductInfo/EditProduct';
import ProReview from './components/ProReview/ProReview'
import Review from './components/Review/Review'
import Coupon from './components/Coupon/Coupon'
import ViewCoupon from './components/Coupon/ViewCoupon';
import ViewReviewAllProduct from './components/Product/ViewReviewAllProduct';






function App() {
  // const navRef = useRef()
  return (
    <>
     {/* <SideNav /> */}
      <Home />


      <Routes>
        <Route path='/' element={<DashBoard />}></Route>
        <Route path='/DashBoard' element={<DashBoard />}></Route>
        <Route exact path='/Product' element={<Product />}></Route>
        <Route exact path='/Attributes' element={<Attributes />}></Route>
        <Route exact path='/AddAttribute' element={<AddAttribute />}></Route>
        <Route exact path='/ProductInfo' element={<ProductInfo />}></Route>
        <Route exact path='/Category' element={<TableFunc />}></Route>
        <Route exact path='/AddCategory' element={<AddCategory />}></Route>
        <Route exact path='/Users' element={<UserTable />}></Route>
        <Route exact path='/AddUser' element={<AddNewUser />}></Route>
        <Route exact path='/Roles' element={<Role />}></Route>
        <Route exact path='/AddRole' element={<AddRole />}></Route>
        <Route exact path="/AddBanner" element={<AddBanner />}></Route>
        <Route exact path="/Media" element={<Media/>}></Route>
        {/* <Route exact path="/Media" element={<AddBanner />}></Route> */}
        <Route exact path="/DeleteBanner" element={<DeleteBanner/>}></Route>
        <Route exact path='/UpdateBanner' element = {<UpdateBanner/>}></Route>
        <Route exact path='/UpdateCategory' element={<UpdateCategory/>}></Route>
        <Route exact path="/EditAttribute" element={<EditAttribute/>}></Route>
        <Route exact path='/EditProduct' element={<EditProduct />}></Route>
        <Route exact path='/ProReview' element={<ProReview />}></Route>
        <Route exact path='/Product Review' element={<Review />}></Route>
        <Route exact path='/Coupons' element={<ViewCoupon />}></Route>
        <Route exact path='/Coupon' element={<Coupon />}></Route>
        {/* <Route exact path='/ViewReviewForProduct' element={<ViewReviewAllProduct />}></Route> */}

        
      </Routes>
      {/* <ProReview /> */}
    </>
  );
}

export default App;
