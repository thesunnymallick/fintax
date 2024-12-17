import React from "react";

const MilestonesSection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Numbers & milestones</h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Metric 1 */}
            <div>
              <p className="text-4xl font-bold">400K+</p>
              <p className="text-gray-500 mt-2">GROWING BUSINESSES</p>
            </div>
            {/* Metric 2 */}
            <div>
              <p className="text-4xl font-bold">6M+</p>
              <p className="text-gray-500 mt-2">TAX FILERS</p>
            </div>
            {/* Metric 3 */}
            <div>
              <p className="text-4xl font-bold">4000+</p>
              <p className="text-gray-500 mt-2">LARGE ENTERPRISES</p>
            </div>
            {/* Metric 4 */}
            <div>
              <p className="text-4xl font-bold">80K+</p>
              <p className="text-gray-500 mt-2">TAX EXPERTS</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">IRP certification</h3>
          <p className="text-gray-600 mb-6">
            Official Invoice Registration Portal (IRP) provider, approved by the GST network
            in India.
          </p>
          <h4 className="text-xl font-semibold mb-2">
            SAP<sup>&reg;</sup> Certified
          </h4>
          <p className="text-gray-600 mb-6">
            Seamlessly integrate your SAP ERP workloads across our GST, e-Invoicing and ITC
            reconciliation modules. We integrate with your ERP, and other data sources too.
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center space-x-4">
      
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
              alt="Oracle"
              className="h-5"
            />
  
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesSection;
