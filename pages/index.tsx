import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="realtive">
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
        <h2 className="text-7xl text-white font-recoleta z-10 mt-[50px] md:mt-[80px]  font-extrabold text-center">
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
      <Wrapper className="mt-[89vh]">
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
        <h2>Heloooo</h2>
      </Wrapper>
    </main>
  );
}
