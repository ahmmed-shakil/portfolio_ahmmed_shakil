import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/components/Home";
import DesktopFooter from "../components/DesktopFooter";
import TaskManager from "../components/TaskManager/TaskManager";
import AllCourses from "../components/AllCourses/AllCourses";
import Login from "../components/Auth/Login/Login";
import CourseDetails from "../components/Courses/CourseDetails";
import Admin from "../Admin";
import ProductDetails from "../components/Products/ProductDetails/ProductDetails";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import CategoryPage from "../components/CategoryPage/CategoryPage";
import CategoryItemPage from "../components/CategoryPage/CategoryItemPage";
import About from "../components/Home/components/About/About";
import Projects from "../components/Home/components/Projects/Projects";
import Blogs from "../components/Home/components/Blogs/Blogs";
import Contact from "../components/Home/components/Contact/Contact";
import Education from "../components/Home/components/Education/Education";
import Types from "../components/AllBlogs/TypeScript/Types/Types";
import DesktopHeader from "../components/shared/DesktopHeader";
import MobileHeader from "../components/shared/MobileHeader";
import MobileFooter from "../components/MobileFooter";

export const pages = [
  {
    path: "/",
    exact: true,
    component: Home,
    key: "home",
    value: "Home",
    show: true,
  },
  {
    path: "/#about", // Adjust the path to start with '#'
    exact: true,
    component: About,
    key: "about",
    value: "About",
    show: true,
  },
  {
    path: "/#projects", // Adjust the path to start with '#'
    exact: true,
    component: Projects,
    key: "projects",
    value: "Projects",
    show: true,
  },
  {
    path: "/#background", // Adjust the path to start with '#'
    exact: true,
    component: Education,
    key: "background",
    value: "Background",
    show: true,
  },
  {
    path: "/#blogs", // Adjust the path to start with '#'
    exact: true,
    component: Blogs,
    key: "blogs",
    value: "Blogs",
    show: true,
  },

  {
    path: "/#contact", // Adjust the path to start with '#'
    exact: true,
    component: Contact,
    key: "contact",
    value: "Contact",
    show: true,
  },
  {
    path: "/blogs",
    exact: true,
    component: Contact,
    key: "blogs",
    value: "Blogs",
    show: false,
  },
  {
    path: "/blog/understanding_typescript_definitions_and_types",
    exact: true,
    component: Types,
    key: "blog_details",
    value: "Blog Details",
    show: false,
  },
];

const MyRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <DesktopHeader />
      <MobileHeader />
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        {/* <Route element={<Page404 />} /> */}
      </Routes>
      <MobileFooter />
      <DesktopFooter />
    </BrowserRouter>
  );
};

export default MyRoutes;
