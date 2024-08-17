import Image from "next/image";
import Header from "./component/header/header";
import Body from "./component/body/body";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";

export default function Home() {
  return (
    <main className="bg-[#28283b] p-0 m-0">
      <Header />
      <Body />
      <Content />
      <Footer />
    </main>
  );
}
