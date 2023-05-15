import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { AboutType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Apartment from "@/assets/brigade-apartment.jpg"
import About from "./About";

const abouts: Array<AboutType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "About",
    description:
      "Brigade Calista is a new-launch apartment project coming up in the untouched environs of Budigere Cross, East Bangalore. The project has sprawled across a vast terrain, providing premium 2 BHK and 3 BHK abodes.Brigade Calista East Bangalore is an elegant residential project and the most exemplary model of the existing structural plan merged with standard hooks. It is a remarkable milestone presently open for pre-launch meetings at pleasing costs.This apartment project best illustrates the current building layout, joined with conventional standpoints. The development is in Budigere Cross, which includes significant city IT hubs with numerous tech parks. The residential needs in this area are always high due to its closeness to the workstation.The project presents state-of-the-art conveniences like a gymnasium, Swimming Pool, Childrens Play Area, Tennis Court, Yoga & Meditation area, Jogging Track, AV Room, Spa, etc. The model flats will be available momentarily for the buyers to encounter the joy of their living space. The Maintainenece fees are to be yielded by the residents and will be completely under the supervision of Brigade Group authority.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Location",
    description:
      "Brigade Calista is located in the City's eastern part, which is among the prominent localities for real estate investments in the current market trend. Due to the inception of IT hubs and major tech parks in the vicinity, Budigere Cross showcases a trustworthy area that aims at providing maximum return on investments for home buyers. The presence of multi-national companies, IT industries, and numerous commercial industries around the region has given a lot of real estate investments. An ample number of renowned educational institutions, excellent health care facilities, Shopping centers, and sufficient entertainment hubs are situated in the locality, offering enough reasons to choose this place for residential living.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Connectivity",
    description:
      "Budigere Cross has excellent connectivity to Bangalore center through two vital 4-lane roads, Mahadevpura Road and Varthur Road. The accessible railway station is about 3 km from Budigere Cross Main Bus Stop, and the nearest airport to Budigere Cross is the Kempegowda International Airport at approximately 40 km. The locality has connectivity through all transportation mechanisms like BMTC buses, private taxis, cabs, and many more. Also, with the current progress in line with Namma Metro developments in the vicinity, Budigere Cross will enjoy a hassle-free commute to all city regions.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Abouts = ({ setSelectedPage }: Props) => {
  return (
    <section id="abouts" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Abouts)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>WHY THIS SHOULD BE YOUR HOME?</HText>
          {/* <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p> */}
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {abouts.map((about: AboutType) => (
            <About
              key={about.title}
              icon={about.icon}
              title={about.title}
              description={about.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={Apartment}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    IMPORTANT <span className="text-primary-500">FACTS</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                RERA STATUS: RERA Registration No.:
                PRM/KA/RERA/1251/446/PR/030223/005683 available at
                https://rera.karnataka.gov.in/.
              </p>
              <p className="mb-5">
                SUPER BUILT-UP AREA: 675 sqft - 1789 sqft (62.74 sqm - 166.25
                sqm)
              </p>
              <p className="mb-5">
                CARPET AREA: 445 sqft – 1191 sqft ( 41.34 sqm – 110.68 sqm)
              </p>
              <p className="mb-5">Note: (1 Sq.m = 10.764 Sq.ft)</p>
              <p className="mb-5">
                Features Multi-Purpose Hall, Convenience Store, Indoor Play
                Area, Indoor Games Area, Gym, Business Centre, Badminton court,
                Terrace for Parties, and more
              </p>
              <p className="mb-5">
                ADDRESS: Sy. No. 165, Devanahalli Airport Road, Bommenahalli
                village, next to Saint Gobain Pvt. Ltd, opp. Brigade Buena
                vista, Bengaluru, Karnataka 560049
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Abouts;
