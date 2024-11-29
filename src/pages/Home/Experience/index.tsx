import { PiSuitcaseSimple } from "react-icons/pi";
import TimeLine from "../../../components/TimeLine";
import useExperience from "./useExperience";

type Props = {}

const Experience = (props: Props) => {
    const {data} = useExperience()
  return (
    <section>
        <h2 className="text-3xl flex items-center gap-2">
            <PiSuitcaseSimple/>
            Experiencia laboral
        </h2>
        <ul className="relative mt-10">
            {data.map((item) =>{
                return (
                    <li key={item.id}>
                        <div>
                            <TimeLine 
                                title={item.job}
                                subtitle={item.company}
                                timeTitle={item.time}
                            >
                                {item.description}
                            </TimeLine>
                        </div>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default Experience