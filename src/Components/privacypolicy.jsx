import React from 'react'

const privacypolicy = () => {
  return (
    
            <div className="min-h-screen py-16 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
                        Privacy Policy
                    </h1>
    
                    <p className="text-gray-700 text-lg text-center mb-10">
                        At Gessdemn Virtuals, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
                    </p>
    
                    <div className="space-y-8">
                        {/* 1. Data Collection */}
                        <div>
                            <h2 className="text-2xl font-bold text-orange-600 mb-3">
                                1. Information We Collect
                            </h2>
                            <p className="text-gray-700">
                                - **Personal Information**: Name, email address, phone number, and payment details when you use our services.  
                                - **Uploaded Images**: Photos and materials provided for editing.  
                                - **Usage Data**: Website interactions, preferences, and technical logs collected through cookies and analytics tools.
                            </p>
                        </div>
    
                        {/* 2. Use of Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-orange-600 mb-3">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-gray-700">
                                - To provide and enhance our **real estate photo editing, virtual staging, and floor plan services**.  
                                - To process payments and communicate with customers.  
                                - To improve our website functionality and personalize user experience.  
                                - To comply with legal and security obligations.
                            </p>
                        </div>
    
                        {/* 3. Data Security */}
                        <div>
                            <h2 className="text-2xl font-bold text-orange-600 mb-3">
                                3. Data Protection & Security
                            </h2>
                            <p className="text-gray-700">
                                - We implement **industry-standard encryption and security measures** to protect your personal and image data.  
                                - We **never store payment information**—all transactions are securely processed via trusted third-party payment gateways.  
                                - Unauthorized access to customer data is strictly prohibited.
                            </p>
                        </div>
    
                        {/* 4. Third-Party Sharing */}
                        <div>
                            <h2 className="text-2xl font-bold text-orange-600 mb-3">
                                4. Third-Party Services & Data Sharing
                            </h2>
                            <p className="text-gray-700">
                                - We **do not sell, trade, or rent** your personal information.  
                                - We may share necessary details with **payment processors, cloud storage providers, and analytics tools** for service optimization.  
                                - Any third-party services used comply with strict privacy and security policies.
                            </p>
                        </div>
    
                        {/* 5. Cookies & Tracking */}
                        <div>
                            <h2 className="text-2xl font-bold text-orange-600 mb-3">
                                5. Cookies & Tracking Technologies
                            </h2>
                            <p className="text-gray-700">
                                - Our website uses cookies to enhance user experience and track website performance.  
                                - Users can **disable cookies** via browser settings, but some features may not function properly.  
                                - We use **Google Analytics** and similar tools to understand website traffic and improve services.
                            </p>
                        </div>
    
                        {/* 6. User Rights */}
                        <div>
                            <h2 className="text-2xl font-bold text-orange-600 mb-3">
                                6. Your Rights & Choices
                            </h2>
                            <p className="text-gray-700">
                                - You have the right to **access, update, or delete** your personal data.  
                                - You can request **removal of edited images** after project completion.  
                                - To exercise your rights, contact us at <span className="font-bold text-orange-600">privacy@gessdemnvirtuals.com</span>.
                            </p>
                        </div>
    
                        {/* 7. Policy Updates */}
                        <div>
                            <h2 className="text-2xl font-bold text-orange-600 mb-3">
                                7. Changes to This Privacy Policy
                            </h2>
                            <p className="text-gray-700">
                                - We may update this Privacy Policy from time to time.  
                                - Any significant changes will be notified via email or website announcements.  
                                - Continued use of our services implies acceptance of the updated policy.
                            </p> 
                        </div>
                    </div>
    
                    {/* Contact Information */}
                    <div className="mt-10 text-center">
                        <p className="text-gray-700">
                            If you have any questions about our Privacy Policy, please contact us at  
                            <span className="font-bold text-orange-600"> privacy@gessdemnvirtuals.com</span>.
                        </p>
                    </div>
                </div>
            </div>
        );
    };
    
    export default PrivacyPolicy;
  
