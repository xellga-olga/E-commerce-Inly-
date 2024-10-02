import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import LatestCollections from "../components/LatestCollections"

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
    </div>
  )
}

export default Home
