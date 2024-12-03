import BtnProjects from "./BtnProjects"
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import BadgeTecno from "./BadgeTecno";

type Props = {
    title: string;
    img: string
    technologies: string[];
    description: string;
    code_url?: string;
    preview_url?: string;
}

const CardProject = ({title,img,technologies,description,code_url,preview_url}: Props) => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
        <div className="md:w-1/2">
            <div className="rounded-xl overflow-clip">
                <img 
                    className="object-cover h-64 w-full"
                    src={img}
                    alt={title}
                />
            </div>
        </div>
        <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">
                {title}
            </h3>
            <div>
                <ul className="flex gap-1 py-2">
                    {technologies.map((techno)=>(
                        <li>
                            <BadgeTecno type={techno}/>
                        </li>
                    ))}
                </ul>
                <p className="dark:text-slate-300">
                    {description}
                </p>
                <div className="flex gap-4 mt-4">
                    {code_url ? 
                        <BtnProjects label="Code" url={code_url}>
                            <FaGithub />
                        </BtnProjects>
                        : ""
                    }
                    {preview_url ? 
                        <BtnProjects label="Preview" url={preview_url}>
                            <IoIosLink />
                        </BtnProjects>
                        : ""
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardProject