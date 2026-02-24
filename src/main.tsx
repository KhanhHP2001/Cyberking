import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Page/Home";
import { Helmet } from "react-helmet";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Helmet>
    <meta charSet="UTF-8" />
    <html lang="vi" />
    <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="CyberKing App - Thuê tài khoản game bản quyền" />
<meta name="twitter:description" content="CyberKing App giúp bạn thuê tài khoản game bản quyền trên Steam, Uplay, EA, Epic với hơn 1000+ tựa game." />
<meta name="twitter:image" content="/seo_image.png" />
<meta name="twitter:site" content="@CyberKingVN" />

      <title>CyberKing App - Phần mềm thuê tài khoản game bản quyền.</title>
      <meta
        name="description"
        content="CyberKing App là giải pháp hoàn hảo cho thuê tài khoản game bản quyền tại Việt Nam, với hơn 1000+ game bản quyền từ các nền tảng nổi tiếng như Steam, Battle, Uplay, EA, Epic."
      />
      <meta
        name="description"
        content="Thuê tài khoản game bản quyền với CyberKing App. Hơn 1000+ game từ Steam, Uplay, EA, Epic, Battle. Trải nghiệm nhanh chóng, an toàn và tiện lợi."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:image" content="https://www.thuegame.cyberking.vn/seo_image.png" />
<meta name="twitter:image" content="https://www.thuegame.cyberking.vn/seo_image.png" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta property="og:type" content="website" />
<meta property="og:site_name" content="CyberKing App" />
<meta property="og:url" content="https://www.thuegame.cyberking.vn" />

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
      <link rel="canonical" href="https://www.thuegame.cyberking.vn" />
    </Helmet>
    <Home />
  </StrictMode>
);
