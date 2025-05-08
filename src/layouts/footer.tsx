import type { FC } from "react";

interface Footer {
  title: string;
}

const Footer: FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
