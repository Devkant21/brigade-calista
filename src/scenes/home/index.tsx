import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import ConKriti from "@/assets/ConKriti.png";
import ConKriti1 from "@/assets/ConKriti1.png";
import brigade from "@/assets/brigade-calista.jpg";
import brigade1 from "@/assets/brigade-apartment.jpg";
import House1 from "@/assets/House1.png";
import House2 from "@/assets/House2.png";
import House3 from "@/assets/House3.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    
    return <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* Image and Main Header */}
        <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* Main Header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* Headings */}
                <motion.div className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                     }}
                >
                    <div className="relative">
                        {/* <div className="before:absolute before:-top-20 before:content-evolvetext">
                            <img alt="home-page-text" src={brigade1}/>
                        </div> */}
                    </div>
                    <p className="mt-8 text-lg md:text-start">Brigade Calista is an upcoming pre-launch premium apartment development in the City most popular residential location Budigere Cross. Brigade Calista offers spacious 1 BHK, 2 BHK and 3 BHK apartments sprawled across vast acres of land area.
                    This part of East Bangalore is a hub for IT and residential developments with some prominent residency creations. There are numerous tech parks and IT companies located in and around Budigere Cross, inviting a lot of potential investments.
                    Brigade Group is a notable name in the realty market with pioneer creations and landmark developments. The company always thrives on dreaming and stylishly designed homes, combined with the latest innovations and highlights
                    </p>
                </motion.div>
                {/* Action */}
                <div className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Request Details
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end p-4">
                <img alt="home-pageGraphic" src={brigade} />
            </div>
        </motion.div>
        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        {/* <img src={House2} alt="house2" /> */}
                        {/* <img src={House2} alt="house2" /> */}
                        {/* <img src={House2} alt="house2" /> */}
                    </div>
                </div>
            </div>
        )}
    </section>
  
};

export default Home