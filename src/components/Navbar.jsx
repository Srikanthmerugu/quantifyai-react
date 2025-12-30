import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import {
  MdDashboard,
  MdAnalytics,
  MdPublic,
  MdPeople,
  MdGroup,
  MdDescription,
  MdCode,
  MdDataUsage,
  MdTrendingUp,
} from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import logo from "./../assets/QuantifyLogo.png";
import logo from "./../assets/logo4.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopServices, setDesktopServices] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= CLOSE DESKTOP DROPDOWN ================= */
  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setDesktopServices(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navItems = [
    { label: "Home", path: "/", icon: <MdDashboard /> },
    { label: "Platform", path: "/platform", icon: <MdPublic /> },
    { label: "Solutions", path: "/solutions", icon: <MdPeople /> },
    { label: "Our Approach", path: "/approach", icon: <MdGroup /> },
    { label: "Company", path: "/company", icon: <MdGroup /> },
  ];

  const servicesItems = [
    { title: "Questionnaire Development", icon: <MdDescription />, path: "/services/questionnaire-development" },
    { title: "Survey Programming", icon: <MdCode />, path: "/services/survey-programming" },
    { title: "Fielding & Data Collection", icon: <MdDataUsage />, path: "/services/fielding-data-collection" },
    { title: "Data Processing & Analysis", icon: <MdTrendingUp />, path: "/services/data-analysis" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ================= GLASS NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-12 drop-shadow-lg" />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "text-blue-500 bg-white/10 backdrop-blur border border-white/10 shadow"
                    : "text-gray-200 hover:text-white hover:bg-white/10 ba"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* SERVICES DROPDOWN */}
            <div className="relative" ref={btnRef}>
              <button
                onMouseEnter={() => setDesktopServices(true)}
                onClick={() => setDesktopServices(!desktopServices)}
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur border border-white/10 transition"
              >
                <MdAnalytics />
                Services
                <FaChevronDown
                  className={`transition ${desktopServices ? "rotate-180" : ""}`}
                />
              </button>

              {desktopServices && (
                <div
                  ref={dropdownRef}
                  onMouseLeave={() => setDesktopServices(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 rounded-2xl bg-gradient-to-r from-blue-500/80 to-blue-950 backdrop-blur  border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                >
                  <div className="p-4 space-y-2">
                    {servicesItems.map((s) => (
                      <button
                        key={s.title}
                        onClick={() => navigate(s.path)}
                        className="flex items-center gap-3 w-full p-3 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition"
                      >
                        <span className="text-xl">{s.icon}</span>
                        {s.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-3 flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500/80 to-teal-400/80 backdrop-blur text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <FiUserPlus />
              Get Started
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenu(true)}
          >
            <FaBars size={22} />
          </button>
        </div>
      </nav>

      {/* ================= GLASS MOBILE SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition ${
          mobileMenu ? "visible" : "invisible"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMobileMenu(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
            mobileMenu ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* SIDEBAR */}
        <div
          className={`absolute left-0 top-0 h-screen  w-85 p-6 transition-transform duration-300 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          } bg-white/10 backdrop-blur-2xl border-r border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]`}
        >
<div className="flex justify-between items-center mb-6 pb-3
                shadow-[0_4px_10px_-6px_rgba(59,130,246,0.35)]">
            <img src={logo} alt="logo" className="h-10" />
            <button onClick={() => setMobileMenu(false)}>
              <FaTimes className="text-blue-500 text-2xl border-2 rounded-full " />
            </button>
          </div>

          {/* NAV LINKS */}
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenu(false);
                }}
                className="flex items-center gap-3 w-full p-3 rounded-xl text-gray-200 hover:bg-white/10 transition"
              >
                {item.icon}
                {item.label}
              </button>
            ))}

            {/* MOBILE SERVICES */}
            <button
              onClick={() => setMobileServices(!mobileServices)}
              className="flex items-center justify-between w-full p-3 rounded-xl text-gray-200 hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <MdAnalytics />
                Services
              </span>
              <FaChevronDown
                className={`transition ${mobileServices ? "rotate-180" : ""}`}
              />
            </button>

            {mobileServices && (
              <div className="ml-4 space-y-1">
                {servicesItems.map((s) => (
                  <button
                    key={s.title}
                    onClick={() => {
                      navigate(s.path);
                      setMobileMenu(false);
                    }}
                    className="flex items-center gap-3 w-full p-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    {s.icon}
                    {s.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className="mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/80 to-teal-400/80 backdrop-blur text-white font-semibold shadow-lg"
          >
            <FiUserPlus />
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;