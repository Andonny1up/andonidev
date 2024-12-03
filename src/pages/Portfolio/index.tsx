import { FaCode } from 'react-icons/fa6'
import CardProject from '../../components/CardProject'
import usePortfolio from './usePortfolio'

type Props = {}

const Portfolio = (props: Props) => {
    const {data} = usePortfolio()
  return (
    <div className='pt-40'>
        <h2 className="text-3xl flex items-center gap-2 mb-4">
            <FaCode />
            Proyectos Destacados
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

export default Portfolio