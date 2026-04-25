import { PiSuitcaseSimple } from "react-icons/pi";
import TimeLine from "../../components/TimeLine";
import { useTranslation } from "react-i18next";


interface Job {
    id: string;
    job: string;
    company: string;
    time: string;
    description: string;
}

const Experience = () => {
    const { t } = useTranslation();
    const jobs = t('experience.jobs', { returnObjects: true }) as Job[];

  return (
    <section className="pb-12">
        <h2 className="text-3xl flex items-center gap-2 font-bold mb-8">
            <PiSuitcaseSimple/>
            {t('experience.title')}
        </h2>
        <ul className="relative">
            {jobs.map((item) =>{
                return (
                    <li key={item.id} className="group transition-all duration-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 p-4 -mx-4 rounded-2xl">
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