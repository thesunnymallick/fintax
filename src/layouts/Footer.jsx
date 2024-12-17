import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* PRODUCTS Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">PRODUCTS</h3>
          <ul>
            <li className="font-semibold text-gray-400 mb-2">Individuals</li>
            <li>Income Tax e Filing</li>
            <li>Tax Planning</li>
            <li>ClearInvestment</li>
            <li>ClearServices</li>
            <li>Mutual Funds & ITR e-filing App</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Income Tax Filing</h3>
          <ul>
            <li>Income Tax App android</li>
            <li>Income Tax</li>
            <li>Section 80 Deductions</li>
            <li>Income tax for NRI</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">ClearGST</h3>
          <ul>
            <li>GST</li>
            <li>GST Login</li>
            <li>GST software</li>
            <li>New GST returns</li>
            <li>e-invoicing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Enterprises</h3>
          <ul>
            <li>ClearGST</li>
            <li>ClearE-Waybill</li>
            <li>e-Invoicing Software</li>
            <li>ClearTDS</li>
            <li>eWay Bill Registration</li>
          </ul>
        </div>

        {/* Additional Sections */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Media & Press</li>
            <li>Engineering blog</li>
            <li>Trust & Safety</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">CAs</h3>
          <ul>
            <li>CA Partner Program</li>
            <li>ClearGST</li>
            <li>ClearTDS</li>
            <li>ClearTaxCloud</li>
            <li>ClearPro App</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">SMEs</h3>
          <ul>
            <li>ClearGST</li>
            <li>ClearOne</li>
            <li>Billing Software</li>
            <li>Invoicing Software</li>
            <li>ClearOne App</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">HSN Lookup</h3>
          <ul>
            <li>HSN Code Finder</li>
            <li>Cement HSN Code</li>
            <li>Transport HSN Code</li>
            <li>Plastic HSN Code</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span>&copy; 2024 ClearTax. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
