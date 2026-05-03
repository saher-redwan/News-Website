import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HorizontalNewsCollection from "@/components/sections/HorizontalNewsCollection";
import Navbar from "@/components/sections/Navbar";
import Shorts from "@/components/sections/Shorts";
import Ads from "@/components/shared/Ads";
import NewsShow from "@/components/shared/NewsShow";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Home() {

  return (
    <div>
      <Navbar />

      <Ads />

      <Hero />

      <div className="bg-[#f1f0f4] pt-5 pb-10">
        <SectionTitle title="BEST OF SI" />
        <NewsShow bigImgLink="/images/big-card-img.webp" smallImgLink="/images/small-card-img.webp" />
      </div>

      <div className="mt-10">
        <SectionTitle title="news shorts" />
        <Shorts />
      </div>

      <div className="mt-15 pb-10">
        {/* <SectionTitle title="BEST OF SI" linkText="MORE MMQB" link="#" /> */}
        <SectionTitle title="THE MMQB" linkText="MORE MMQB" link="#" />
        <NewsShow bigImgLink='/images/second-img-for-test.webp' smallImgLink='/images/second-img-for-test.webp' />
      </div>

      <div className="mt-4">
        <SectionTitle title={"Middle East News"} linkText={"more news"} link={"#"} />
        <HorizontalNewsCollection />
      </div>

      <div className="bg-[#f1f0f4] pt-5 pb-10 mt-18">
        <SectionTitle title="BEST OF SI" />
        <NewsShow bigImgLink="/images/big-card-img.webp" smallImgLink="/images/small-card-img.webp" />
      </div>

      <div className="mt-15 pb-10">
        {/* <SectionTitle title="BEST OF SI" linkText="MORE MMQB" link="#" /> */}
        <SectionTitle title="THE MMQB" linkText="MORE MMQB" link="#" />
        <NewsShow bigImgLink='/images/second-img-for-test.webp' smallImgLink='/images/second-img-for-test.webp' />
      </div>

      <div className="mt-4">
        <SectionTitle title={"Middle East News"} linkText={"more news"} link={"#"} />
        <HorizontalNewsCollection />
      </div>

      <Footer />
    </div>
  );
}
