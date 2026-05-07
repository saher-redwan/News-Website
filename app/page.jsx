// for database
import connectDB from "@/lib/mongodb";
import HomeData from "@/models/HomeData";

import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HorizontalNewsCollection from "@/components/sections/HorizontalNewsCollection";
import Navbar from "@/components/sections/Navbar";
import Shorts from "@/components/sections/Shorts";
import Ads from "@/components/shared/Ads";
import NewsShow from "@/components/shared/NewsShow";
import SectionTitle from "@/components/shared/SectionTitle";


async function getHomeData() {
  await connectDB();

  const homeData = await HomeData.findOne({ page: "home" }).lean();

  if (!homeData) {
    return null;
  }

  return JSON.parse(JSON.stringify(homeData));
}


export default async function Home() {
  const data = await getHomeData();

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <h1 className="h-[250px] leading-[250px] text-3xl font-bold text-center">Somthing Went Wrong</h1>
        <div className="[&_footer]:mt-2">
          <Footer />
        </div>
      </main>
    );
  }

  const { hero, section2, section3_Videos, section4, section5, section6, section7, section8 } = data;

  return (
    <div>
      <Navbar />

      <Ads />

      <Hero data={hero} />

      {/* section2 */}
      <div className="bg-[#f1f0f4] pt-5 pb-10">
        <SectionTitle title={section2.title} link={null} />
        <NewsShow data={section2} />
      </div>

      {/* section3_Videos */}
      <div className="mt-10">
        <SectionTitle title={section3_Videos.title} />
        <Shorts data={section3_Videos} />
      </div>

      {/* section4 */}
      <div className="mt-15 pb-10">
        <SectionTitle title={section4.title} />
        <NewsShow data={section4} />
      </div>

      {/* section5 */}
      <div className="mt-4">
        <SectionTitle title={"Middle East News"} />
        <HorizontalNewsCollection data={section5} />
      </div>

      {/* section6 */}
      <div className="bg-[#f1f0f4] pt-5 pb-10 mt-18">
        <SectionTitle title={section6.title} />
        <NewsShow data={section6} />
      </div>

      {/* section7 */}
      <div className="mt-15 pb-10">
        <SectionTitle title={section7.title} />
        <NewsShow data={section7} />
      </div>

      {/* section8 */}
      <div className="mt-4">
        <SectionTitle title={section8.title} />
        <HorizontalNewsCollection data={section8} />
      </div>

      <Footer />
    </div>
  );
}
