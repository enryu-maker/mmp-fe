import { Routes, Route, redirect } from "react-router-dom";
import Home from "./Screens/Home";
import Header from "./Components/Header";
import Properties from "./Screens/Properties";
import About from "./Screens/About";
import Blog from "./Screens/Blog";

import Contact from "./Screens/Contact";
import Footer from "./Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Screens/Admin/Login";
import Admin from "./Screens/Admin/Admin";
import Error from "./Screens/Error";
import Head from "./Screens/Admin/Component/Head";
import Banner from "./Screens/Admin/Banner";
import AdminBlog from "./Screens/Admin/Blog";
import AdminReview from "./Screens/Admin/Review";
import AdminProperties from "./Screens/Admin/Properties";
import AddBlogs from "./Screens/Admin/InputPages/AddBlogs";
import AddReview from "./Screens/Admin/InputPages/AddReview";
import AddProperty from "./Screens/Admin/InputPages/AddProperty";
import React from "react";
import { GetBanner, GetBlogs, GetReviews, Init } from "./Store/actions";
import AddBanner from "./Screens/Admin/InputPages/AddBanner";
export default function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Init())
    dispatch(GetBlogs())
    dispatch(GetReviews())
    dispatch(GetBanner())
  }, [])
  const access = useSelector(state => state.Reducers.access);
  return (
    <>
      {
        access === null ?
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
          </>
          :
          <>
            <Head />
            <Routes>
              <Route path="/" element={redirect('/admin')} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/banner" element={<Banner />} />
              <Route path="/*" element={<Error />} />
              <Route path="/blog" element={<AdminBlog />} />
              <Route path="/review" element={<AdminReview />} />
              <Route path="/properties" element={<AdminProperties />} />
              <Route path="/addblogs" element={<AddBlogs />} />
              <Route path="/addreview" element={<AddReview />} />
              <Route path="/addproperty" element={<AddProperty />} />
              <Route path="/addbanner" element={<AddBanner />} />
            </Routes>
          </>
      }
    </>


  )
}