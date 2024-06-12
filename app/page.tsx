import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main>
      <div className="w-full flex flex-col">
        <Header />
        <Hero />
        <About />
        <Products />
        <Contact />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
