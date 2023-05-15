import Logo from "@/assets/brigade-calista.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Artist's impressions. Images and materials shown are indicative. This final product may differ based on availability.
          </p>
          <p>© 2023 Brigade Enterprise Ltd All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Active Livings</p>
          <p className="my-5">Calm Island</p>
          <p>Naturescapes</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Address</h4>
          <p className="my-5">
            Sy. No. 165, Devanahalli Airport Road, Bommenahalli village, next to
            Saint Gobain Pvt. Ltd, opp. Brigade Buena vista, Bengaluru,
            Karnataka 560049
          </p>
          <p>(+91) 90353-00700</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
