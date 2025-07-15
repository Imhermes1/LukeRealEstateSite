import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-AU')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Luke Fornieri Real Estate ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website and use our services.
            </p>
            <p className="text-gray-700">
              By using our website, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Property preferences and requirements</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website information</li>
              <li>Usage patterns and preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 Social Media Integration</h3>
            <p className="text-gray-700 mb-4">
              Our website integrates with social media platforms to display content from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Instagram:</strong> We display your Instagram posts using the Instagram Basic Display API</li>
              <li><strong>YouTube:</strong> We display your YouTube videos using the YouTube Data API</li>
              <li><strong>Medium:</strong> We display your Medium articles using RSS feeds</li>
            </ul>
            <p className="text-gray-700">
              These integrations do not collect personal data from our visitors but may use cookies 
              and tracking technologies from the respective platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide and maintain our real estate services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you relevant property listings and market updates</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
              <li>In connection with a business transfer or merger</li>
              <li>With trusted service providers who assist in operating our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              These technologies help us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="text-gray-700">
              You can control cookie settings through your browser preferences. However, disabling 
              certain cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website integrates with third-party services that have their own privacy policies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Vercel Analytics:</strong> Website analytics and performance monitoring</li>
              <li><strong>Vercel Speed Insights:</strong> Performance monitoring and optimization</li>
              <li><strong>Instagram Basic Display API:</strong> Social media content display</li>
              <li><strong>YouTube Data API:</strong> Video content display</li>
              <li><strong>Medium RSS:</strong> Article content display</li>
            </ul>
            <p className="text-gray-700">
              We encourage you to review the privacy policies of these third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure data transmission protocols</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Deletion and Retention</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Right to Deletion</h3>
            <p className="text-gray-700 mb-4">
              You have the right to request the deletion of your personal information. We will delete your 
              personal information within 30 days of receiving your request, unless we have a legitimate 
              business reason to retain it.
            </p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 How to Request Deletion</h3>
            <p className="text-gray-700 mb-4">
              To request deletion of your personal information, you can:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Email us at: <strong>privacy@lukefornieri.com</strong></li>
              <li>Call us at: <strong>+61 3 1234 5678</strong></li>
              <li>Use our online deletion request form (if available)</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.3 What We Delete</h3>
            <p className="text-gray-700 mb-4">
              When you request deletion, we will remove:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Your contact information (name, email, phone number)</li>
              <li>Property preferences and requirements</li>
              <li>Communication history and preferences</li>
              <li>Account information (if applicable)</li>
              <li>Analytics data associated with your IP address</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.4 Data Retention</h3>
            <p className="text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain business records as required by law</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.5 Retention Periods</h3>
            <p className="text-gray-700 mb-4">
              Specific retention periods for different types of data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Contact Information:</strong> 7 years (for tax and legal compliance)</li>
              <li><strong>Property Inquiries:</strong> 3 years (for follow-up and service improvement)</li>
              <li><strong>Website Analytics:</strong> 2 years (for website optimization)</li>
              <li><strong>Communication Records:</strong> 5 years (for customer service and legal protection)</li>
              <li><strong>Social Media Integration Data:</strong> Deleted immediately upon request</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.6 Third-Party Data Deletion</h3>
            <p className="text-gray-700 mb-4">
              For data stored with third-party services, we will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Request deletion from our service providers</li>
              <li>Confirm deletion within 30 days</li>
              <li>Provide you with confirmation of deletion</li>
              <li>Maintain records of deletion requests for compliance</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.7 Exceptions to Deletion</h3>
            <p className="text-gray-700 mb-4">
              We may retain certain information if:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Required by law or regulation</li>
              <li>Necessary for legal proceedings</li>
              <li>Required for fraud prevention</li>
              <li>Needed for legitimate business purposes</li>
              <li>Required for tax or accounting purposes</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.8 Confirmation of Deletion</h3>
            <p className="text-gray-700 mb-4">
              After processing your deletion request, we will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Send you a confirmation email within 30 days</li>
              <li>Provide details of what was deleted</li>
              <li>Inform you of any data we could not delete and why</li>
              <li>Keep a record of the deletion request for compliance purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700">
              Our website is not intended for children under the age of 13. We do not knowingly 
              collect personal information from children under 13. If you believe we have collected 
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers comply with applicable data protection laws and implement 
              appropriate safeguards to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-700">
              We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Luke Fornieri Real Estate</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Website:</strong> https://lukefornieri.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@lukefornieri.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +61 3 1234 5678
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Melbourne, Victoria, Australia
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="text-gray-700">
              This Privacy Policy is governed by and construed in accordance with the laws of Victoria, 
              Australia. Any disputes arising from this policy will be subject to the exclusive 
              jurisdiction of the courts of Victoria, Australia.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 