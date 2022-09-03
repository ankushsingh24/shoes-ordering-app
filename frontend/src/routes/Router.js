import { Route, Routes } from "react-router-dom";
import { Navbar } from "../pages/navbar/Navbar";
import { Footer } from "../pages/footer/Footer";

export const Router = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<div>I'm Home Page</div>} />
      </Routes>

      <Footer />
    </>
  );
};
