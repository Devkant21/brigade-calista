import { SelectedPage, PlanType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Plan from "./Plan";

const plans: Array<PlanType> = [
  {
    name: "The core that holds all the magic",
    description:
      "The Grand Central Courtyard, which covers almost 2.5 acres**, is surrounded by a driveway on the periphery so your kids get uninterrupted playtime and you, a worry-free evening.",
    image: image1,
  },
  {
    name: "Master Plan",
    description: " Designed To bring everything closer To you",
    image: image2,
  },
  {
    name: "Plans",
    description: "Homes Designed Around Your Life's Finest Moments",
    image: image3,
  },
  // {
  //   name: "Adventure Classes",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   image: image4,
  // },
  // {
  //   name: "Fitness Classes",
  //   image: image5,
  // },
  // {
  //   name: "Training Classes",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   image: image6,
  // },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurPlans = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourplans" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurPlans)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>HOMES DESIGNED AROUND YOUR LIFE’S FINEST MOMENTS</HText>
            <p className="py-5">
              Brigade Calista has most of its greenery at its centre. You don’t
              just get a home but also get to unfold all the layers of nature
              and its colours. The enchanting groves, orchards and gardens are
              proof of that. The Grand Central Courtyard, which covers almost
              approx. 2.5 acres, is surrounded by a driveway on the periphery so
              your kids get uninterrupted playtime and you, a worry-free
              evening. 1.5,2 & 3 bedroom homes make room for ample sunlight and
              fresh breeze along with the promise of future forward facilities.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {plans.map((item: PlanType, index) => (
              <Plan
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurPlans;
