import Experience from "./Experience"
import FeaturedProjects from "./FeaturedProjects"
import Hero from "./Hero"

type Props = {}

const Home = ({}: Props) => {
  return (
    <>
      <Hero/>
      <FeaturedProjects/>
      <Experience/>
    </>
  )
}

export default Home