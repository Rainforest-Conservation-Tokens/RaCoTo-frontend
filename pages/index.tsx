import Navbar from "@/components/Navbar/Navbar";
import Procedure from "@/components/Procedure";
import Problem from "@/components/Problem";
import Slider from "@/components/Slider";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="realtive w-full">
      <Navbar />
      <div className="w-full h-[97vh] absolute top-0 flex flex-col justify-center items-center">
        <section className=" h-full w-full absolute top-0 bg-black/[0.6] -z-10" />
        <video
          src={
            "https://bafybeicww3juliwxgqcs5xfkbfdztewbj6jbdkpdixi6pvl4ej7qtlq4oi.ipfs.w3s.link/pexels-mikhail-nilov-8334944-2732x1440-24fps.mp4"
          }
          autoPlay
          loop
          muted
          className="w-full h-full object-cover -z-20 absolute top-0"
        />
        <h2 className="text-7xl text-white font-recoleta_bold z-10 mt-[50px] md:mt-[80px] text-center">
          Remove Carbon. Restore Nature.
        </h2>
        <span className="text-3xl text-white font-proxima z-10 font-bold my-5 w-[70%] mx-auto text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          obcaecati, explicabo. Explicabo, quod similique.
        </span>
        <section className="flex justify-center my-5">
          <button className="px-5 py-3 transition duration-300 hover:scale-95 bg-white rounded-lg z-10 mx-4 font-proxima text-xl font-bold hover:text-white hover:bg-transparent hover:border-2  hover:border-white ">
            Learn More
          </button>
          <button className="px-5 py-3 transition duration-300 hover:scale-95 border-white border-2 text-white rounded-lg z-10 font-proxima text-xl font-bold hover:bg-white hover:text-black ">
            Contact Us
          </button>
        </section>
      </div>
      <div className="mt-[89vh]">
        <Problem />
        <Slider
          title={"TRUSTED BY LEADING BRANDS AROUND THE WORLD"}
          isProject={false}
        >
          <img src="/assets/slider-logo-1.png" alt="" className="w-[190px]" />
          <img src="/assets/slider-logo-2.svg" alt="" className="w-[190px]" />
          <img src="/assets/slider-logo-3.svg" alt="" className="w-[190px]" />
          <img src="/assets/slider-logo-4.svg" alt="" className="w-[190px]" />
          <img src="/assets/slider-logo-5.svg" alt="" className="w-[190px]" />
          <img src="/assets/slider-logo-6.svg" alt="" className="w-[190px]" />
          <img src="/assets/slider-logo-7.svg" alt="" className="w-[190px]" />
        </Slider>
        <Procedure />
        <Projects />

        <Faq />
        <Footer />
      </div>
    </main>
  );
}
