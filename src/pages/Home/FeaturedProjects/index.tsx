import { FaCode } from "react-icons/fa6";

type Props = {}

const FeaturedProjects = (props: Props) => {
  return (
    <div>
        <h2 className="text-3xl flex items-center gap-2">
            <FaCode />
            Proyectos Destacados
        </h2>
        <p>FeaturedProjects</p>
    </div>
  )
}

export default FeaturedProjects