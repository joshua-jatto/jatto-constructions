import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { indexPage } from "./pages";
import { Routes, Route } from 'react-router-dom';
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Gallery from "./pages/gallery";
const App = () => {
    return (_jsxs("div", { className: " text-gray-900 relative bg-gradient-to-br from-zinc-900 via-gray-200 to-black", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/", element: indexPage }), _jsx(Route, { path: "/gallery", element: _jsx(Gallery, {}) })] }), _jsx(Footer, {})] }));
};
export default App;
