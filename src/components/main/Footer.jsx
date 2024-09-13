import {
  TwitterOutlined,
  FacebookFilled,
  InstagramFilled,
  MailFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We are a company dedicated to providing high-quality services and
              products to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Cookie Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Impressum
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FacebookFilled size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <TwitterOutlined size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <InstagramFilled size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <MailFilled size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          <p className="mt-2">
            Impressum: Your Company Name | Address: 123 Main St, City, Country |
            Phone: +1 234 567 890 | Email: contact@yourcompany.com | Registered:
            City Court | Registration Number: 12345
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
