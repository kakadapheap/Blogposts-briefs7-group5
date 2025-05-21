import BirdLogo from "../assets/bird.png";
import MinimalLogo from "../assets/minimal.png";
import YourLogo from "../assets/your-logo.png";
import AirbusLogo from "../assets/airbus.png";
import AbstractLogo from "../assets/abstrack.png";
import CRSIFYLogo from "../assets/crsify.png";
import ZeroxLogo from "../assets/zerox.png";
import RapapeLogo from "../assets/rapape.png";
import PebootLogo from "../assets/peboot.png";
import ShimanoLogo from "../assets/shimano.png";
import SramLogo from "../assets/sram.png";

const SponsorPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Page title */}
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold">Event Sponsors</h1>
        <p className="text-sm text-gray-500">Home / Events / Sponsor</p>
      </div>

      {/* Gold Sponsors */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold mb-4">Gold Sponsor</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img src={BirdLogo} alt="Bird" className="h-25" />
          <img src={MinimalLogo} alt="Minimal" className="h-25" />
          <img src={YourLogo} alt="Your Logo" className="h-25" />
        </div>
      </div>

      {/* Bronze Sponsors */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold mb-4">Bronze Sponsor</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img src={AirbusLogo} alt="Airbus" className="h-25" />
          <img src={AbstractLogo} alt="Abstract" className="h-25" />
          <img src={CRSIFYLogo} alt="CRSIFY" className="h-25" />
          <img src={ZeroxLogo} alt="Zerox" className="h-25" />
        </div>
      </div>

      {/* Social Event Sponsors */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold mb-4">Social Events Sponsor</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img src={RapapeLogo} alt="Rapape" className="h-25" />
          <img src={PebootLogo} alt="Peboot" className="h-25" />
          <img src={ShimanoLogo} alt="Trapape" className="h-25" />
          <img src={SramLogo} alt="Papestra" className="h-25" />
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
