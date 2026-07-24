import { FaCode } from "react-icons/fa6";
import CardProject from "../../components/CardProject";
import { useTranslation } from "react-i18next";

interface Project {
  id: number,
  title: string,
  img: string,
  technologies: string[],
  description: string,
  code_url: string,
  preview_url: string
}
const FeaturedProjects = () => {
  const { t } = useTranslation();
  const data = t('featured_projects.projects', { returnObjects: true }) as Project[];

  return (
    <div>
      <h2 className="text-3xl flex items-center gap-2 mb-4">
        <FaCode />
        {t('featured_projects.title')}
      </h2>
      <div className="flex flex-col gap-y-16 mb-12">
        {data.map((item) => (
          <CardProject
            key={item.id}
            title={item.title}
            img={item.img}
            description={item.description}
            technologies={item.technologies}
            code_url={item.code_url}
            preview_url={item.preview_url}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects