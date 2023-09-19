'use client'
import Categories from "@/components/Categories";
import Delivery from "@/components/Delivery";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Meal from "@/components/Meal";
import NewsLetter from "@/components/NewsLetter";
import TopNav from "@/components/TopNav";
import TopPicks from "@/components/TopPicks";

export default function Home() {
  return (
    <>
    <TopNav />
    <Featured />
    <Delivery />
    <TopPicks />
    <Meal />
    <Categories />
    <NewsLetter />
    <Footer />
    </>
  )
}
