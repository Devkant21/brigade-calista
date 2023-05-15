import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import House3 from "@/assets/House3.png"
import brigade1 from "@/assets/brigade-apartment.jpg"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "About",
        description: 
            "Brigade Calista is a new-launch apartment project coming up in the untouched environs of Budigere Cross, East Bangalore. The project has sprawled across a vast terrain, providing premium 2 BHK and 3 BHK abodes.Brigade Calista East Bangalore is an elegant residential project and the most exemplary model of the existing structural plan merged with standard hooks. It is a remarkable milestone presently open for pre-launch meetings at pleasing costs.This apartment project best illustrates the current building layout, joined with conventional standpoints. The development is in Budigere Cross, which includes significant city IT hubs with numerous tech parks. The residential needs in this area are always high due to its closeness to the workstation.The project presents state-of-the-art conveniences like a gymnasium, Swimming Pool, Children’s Play Area, Tennis Court, Yoga & Meditation area, Jogging Track, AV Room, Spa, etc. The model flats will be available momentarily for the buyers to encounter the joy of their living space. The Maintainenece fees are to be yielded by the residents and will be completely under the supervision of Brigade Group authority."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Location",
        description: 
            "Brigade Calista is located in the City's eastern part, which is among the prominent localities for real estate investments in the current market trend. Due to the inception of IT hubs and major tech parks in the vicinity, Budigere Cross showcases a trustworthy area that aims at providing maximum return on investments for home buyers. The presence of multi-national companies, IT industries, and numerous commercial industries around the region has given a lot of real estate investments. An ample number of renowned educational institutions, excellent health care facilities, Shopping centers, and sufficient entertainment hubs are situated in the locality, offering enough reasons to choose this place for residential living."
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Connectivity",
        description: 
            "Budigere Cross has excellent connectivity to Bangalore center through two vital 4-lane roads, Mahadevpura Road and Varthur Road. The accessible railway station is about 3 km from Budigere Cross Main Bus Stop, and the nearest airport to Budigere Cross is the Kempegowda International Airport at approximately 40 km. The locality has connectivity through all transportation mechanisms like BMTC buses, private taxis, cabs, and many more. Also, with the current progress in line with Namma Metro developments in the vicinity, Budigere Cross will enjoy a hassle-free commute to all city regions."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}>
                <HText>Key points of the project</HText>
                {/* <p className="my-5 text-sm">
                    Key points of the project : 
                </p> */}
            </motion.div>
            {/* Benefits */}
            <motion.div className="mt-5 items-center justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* Graphic */}
            <div>
                <img src={brigade1} alt="Home-Desgin" />
                {/* Description */}
                <div>
                    {/* title */}
                    <div className="relative">
                        <div className="before:absolut">

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  );
};

export default Benefits