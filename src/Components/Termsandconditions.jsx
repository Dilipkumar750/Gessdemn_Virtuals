import React from 'react'

const Termsandconditions = () => {
  return (
    
        <div className="min-h-screen py-16 px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
                    Terms and Conditions
                </h1>

                <p className="text-gray-700 text-lg text-center mb-10">
                    Welcome to Gessdemn Virtuals. By using our services, you agree to the following terms and conditions.
                </p>

                <div className="space-y-8">
                    {/* 1. Service Overview */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-3">
                            1. Services Provided
                        </h2>
                        <p className="text-gray-700">
                            Gessdemn Virtuals specializes in **real estate photo editing, virtual staging, and floor plan design**. 
                            Our services are intended to enhance property visuals, improve marketing efforts, and assist realtors, photographers, 
                            and property developers in presenting properties professionally.
                        </p>
                    </div>

                    {/* 2. Image Submission */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-3">
                            2. Image Submission & Editing
                        </h2>
                        <p className="text-gray-700">
                            - Clients must provide high-quality images for editing.  
                            - Gessdemn Virtuals reserves the right to reject any image that does not meet quality standards.  
                            - Virtual staging and floor plans will be designed based on the specifications provided by the client.  
                            - Any revisions must be requested within **48 hours** of delivery. Additional revisions may incur extra charges.
                        </p>
                    </div>

                    {/* 3. Turnaround Time */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-3">
                            3. Turnaround Time & Delivery
                        </h2>
                        <p className="text-gray-700">
                            - Standard delivery time for most services is **24-48 hours**.  
                            - Custom requests or bulk orders may require additional time.  
                            - Completed images will be provided in **high-resolution digital format**.  
                            - We are not responsible for delays caused by incomplete client instructions.
                        </p>
                    </div>

                    {/* 4. Payment & Pricing */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-3">
                            4. Pricing & Payments
                        </h2>
                        <p className="text-gray-700">
                            - Prices for services are displayed on our website or quoted upon request.  
                            - Payments must be made in full before image processing begins.  
                            - All transactions are non-refundable once editing work has started.  
                            - We accept payments through **secure online payment methods**.
                        </p>
                    </div>

                    {/* 5. Copyright & Usage */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-3">
                            5. Copyright & Ownership
                        </h2>
                        <p className="text-gray-700">
                            - Clients retain ownership of the original images they submit.  
                            - Gessdemn Virtuals holds the rights to use completed images for **portfolio and marketing** purposes unless the client requests otherwise in writing.  
                            - Edited images cannot be resold, redistributed, or used for illegal purposes.
                        </p>
                    </div>

                    {/* 6. Liability Disclaimer */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-3">
                            6. Liability & Disclaimer
                        </h2>
                        <p className="text-gray-700">
                            - Gessdemn Virtuals is not responsible for any **misrepresentation of property details** caused by edits.  
                            - We do not guarantee increased sales or interest in a property.  
                            - Any modifications made after delivery are the client’s responsibility.
                        </p>
                    </div>

                    {/* 7. Termination of Service */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-3">
                            7. Termination of Services
                        </h2>
                        <p className="text-gray-700">
                            - We reserve the right to refuse or terminate services for clients who **fail to provide accurate details, violate copyrights, or engage in fraudulent activity**.  
                            - Any misuse of our services may lead to legal action.
                        </p>
                    </div>

                    {/* 8. Changes to Terms */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-3">
                            8. Changes to Terms & Conditions
                        </h2>
                        <p className="text-gray-700">
                            - We may update these Terms and Conditions at any time. Clients will be notified of significant changes.  
                            - Continued use of our services after changes constitutes acceptance of the updated terms.
                        </p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-10 text-center">
                    <p className="text-gray-700">
                        If you have any questions about our Terms and Conditions, please contact us at  
                        <span className="font-bold text-orange-600"> support@gessdemnvirtuals.com</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Termsandconditions;