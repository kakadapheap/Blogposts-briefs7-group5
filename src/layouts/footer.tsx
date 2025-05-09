import type { FC } from "react";

interface FooterProps {
  title?: string;
}

const Footer: FC<FooterProps> = ({ title = "BlogPost" }) => {
  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 text-center lg:text-left">
          {/* Company Info */}
          <div className="space-y-4 w-full lg:w-auto">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-400">
              Explore the best content and connect with us for more!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Blog", "Blogdetail", "Sponsore"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Digital Marketing",
                "Cloud Solutions",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 w-full lg:w-auto">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:blogPost@company.com"
                  className="hover:text-white transition"
                >
                  blogPost@company.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition"
                >
                  +1 (123) 456-7890
                </a>
              </p>
            </address>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-4 text-gray-400">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="hover:text-white transition"
                    aria-label={platform}
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
