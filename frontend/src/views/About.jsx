/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { userContext } from "../context/userProvider";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return <div>Only ensem's students can access this page</div>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <Header
          title="Mission statement"
          description="At MyProfessor, our mission is to empower students and educators by fostering a culture of mutual growth and excellence in education. We strive to provide a dynamic platform where students can voice their insights through thoughtful evaluations, promoting transparency and constructive dialogue. Our commitment is to support educators in their continuous improvement journey, ultimately enhancing the overall learning experience within our academic community. MyProfessor is dedicated to shaping a collaborative and thriving educational environment for both students and teachers"
          btn=""
          img={"/imgs/header3.webp"}
          bg="bg-white"
        />
      </div>
      <main className=" py-20 px-32 custom-bg">
        <div className="spa space-y-4">
          <h1 className="font-bold text-6xl">Our team</h1>
          <p className="text-lg">Meet the Team Behind myProfessor</p>
        </div>
        <div className="grid grid-cols-2 mt-20 text-xl gap-10 ">
          <div className="flex gap-10 rounded">
            <div className="max-w-[220px]">
              <img src="/imgs/user.jpg" alt="team_photo" className="rounded" />
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl font-bold">Yassir LASSIRY</h1>
              <p className=" font-bold mb-10 text-green-600">Founder & CEO</p>
              <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, aliquam. Fugiat reiciendis sequi facilis explicabo
                molestias commodi harum et pariatur, ipsa minus deserunt
                excepturi corporis tenetur dolorem magni aspernatur dicta.
              </p>
            </div>
          </div>
          <div className="flex gap-10 rounded">
            <div className="max-w-[220px]">
              <img src="/imgs/user.jpg" alt="team_photo" className="rounded" />
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl font-bold">Ali KAMIL</h1>
              <p className=" font-bold mb-10 text-green-600">Founder & CEO</p>
              <p className="mb-20">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                dolores perferendis, veniam quidem amet quaerat dolore minima
                necessitatibus cumque error perspiciatis dignissimos quis
                commodi consequuntur, distinctio voluptatum a sequi adipisci!
              </p>
            </div>
          </div>
          <div className="flex gap-10 rounded">
            <div className="max-w-[220px]">
              <img src="/imgs/user.jpg" alt="team_photo" className="rounded" />
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl font-bold">Younes ELKACIMI</h1>
              <p className=" font-bold mb-10 text-green-600">Founder & CEO</p>
              <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis commodi suscipit quas voluptatem facilis odit harum,
                laudantium quidem minus impedit, asperiores ab, hic nemo ut
                adipisci modi dolorum! Quo, odit!
              </p>
            </div>
          </div>
          <div className="flex gap-10 rounded">
            <div className="max-w-[220px]">
              <img src="/imgs/user.jpg" alt="team_photo" className="rounded" />
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl font-bold">Younes BASRAOUI</h1>
              <p className=" font-bold mb-10 text-green-600">Founder & CEO</p>
              <p className="mb-20">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                facilis temporibus fuga fugiat libero nam perferendis,
                reiciendis eum cumque magni, officia pariatur consequatur optio
                illo nemo. Velit enim ad earum.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
