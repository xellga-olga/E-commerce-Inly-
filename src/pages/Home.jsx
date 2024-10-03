import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import LatestCollections from "../components/LatestCollections"
import NewsletterBox from "../components/NewsletterBox"
import OurPolice from "../components/OurPolice"

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
      <OurPolice />
      <NewsletterBox />
    </div>
  )
}

export default Home
