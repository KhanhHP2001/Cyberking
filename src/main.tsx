import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentSuccess from "./Page/PaymentSuccess";
import { Helmet } from "react-helmet";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Helmet>
      <title>CyberKing App - Phần mềm thuê tài khoản game bản quyền.</title>
      <meta
        name="description"
        content="CyberKing App là giải pháp hoàn hảo cho thuê tài khoản game bản quyền tại Việt Nam, với hơn 1000+ game bản quyền từ các nền tảng nổi tiếng như Steam, Battle, Uplay, EA, Epic."
      />
      <meta
        name="keywords"
        content="CyberKing App, phần mềm thuê tài khoản game, game bản quyền, thuê tài khoản game Steam, thuê tài khoản Battle, thuê tài khoản Uplay, thuê tài khoản EA, thuê tài khoản Epic, phần mềm game Việt Nam"
      />
      <meta
        property="og:title"
        content="CyberKing App - Phần Mềm Thuê Tài Khoản Game Bản Quyền Tốt Nhất Tại Việt Nam"
      />
      <meta
        property="og:description"
        content="CyberKing App là giải pháp hoàn hảo cho thuê tài khoản game bản quyền tại Việt Nam, với hơn 1000+ game bản quyền từ các nền tảng nổi tiếng như Steam, Battle, Uplay, EA, Epic."
      />
      <meta property="og:image" content="/seo_image.png" />
      <meta property="og:url" content="https://www.thuegame.cyberking.vn" />
    </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
