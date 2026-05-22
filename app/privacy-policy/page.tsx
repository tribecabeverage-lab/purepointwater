import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Pure Point Water Solutions',
  description: 'Privacy policy for Pure Point Water Solutions. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <div className="text-gray-600 space-y-1">
              <p className="font-semibold">Pure Point Water Solutions</p>
              <p>257 Sound Beach Ave, Suite G</p>
              <p>Old Greenwich, CT 06870</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Pure Point Water Solutions ("Pure Point," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you interact with our website, purchase our products, or communicate with us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect and How We Use It</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you place an order, request service, sign up for delivery, or otherwise engage with us, we collect the information necessary to complete your transaction. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name</li>
              <li>Billing and service address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use this information to process payments, coordinate deliveries, provide customer support, and fulfill our contractual obligations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, certain information may be collected automatically, including your IP address, browser type, device type, and operating system. This helps us better understand how visitors use our website and improve functionality and user experience.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you opt in to receive communications from us, we may send emails or text messages about promotions, service updates, new offerings, or other relevant company news. You may unsubscribe at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Consent</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How We Obtain Consent</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you provide personal information to complete a purchase, schedule delivery, verify payment, or request service, you are consenting to our use of that information for those specific purposes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If we request information for marketing or other secondary purposes, we will either request your express consent or provide you with a clear opportunity to decline.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Withdrawing Consent</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may withdraw your consent for marketing communications or request that we stop collecting or using your information (where legally permitted) at any time by contacting us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:dylan@purepointwatersolutions.com" className="text-blue-600 hover:text-blue-700">dylan@purepointwatersolutions.com</a></p>
              <p className="text-gray-700 mt-2"><strong>Mail:</strong></p>
              <p className="text-gray-700">Pure Point Water Solutions</p>
              <p className="text-gray-700">257 Sound Beach Ave, Suite G</p>
              <p className="text-gray-700">Old Greenwich, CT 06870</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclosure of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>When required to comply with applicable laws, regulations, or legal processes</li>
              <li>To enforce our Terms of Service or other agreements</li>
              <li>To protect the rights, safety, or property of Pure Point Water Solutions, our customers, or others</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Service Providers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with select third-party providers to help operate our business, including payment processors, website hosting providers, analytics platforms, and marketing tools.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Analytics tools (such as Google Analytics or similar platforms) help us understand how visitors use our website so we can improve performance and usability. These tools are used for internal analysis and do not intentionally collect sensitive personal information.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment processors and financial institutions handle payment transactions securely. These providers have their own privacy policies governing how they manage your data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please note that some third-party providers may operate in jurisdictions outside your state or country. As a result, your information may be subject to the laws of those jurisdictions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you leave our website or are redirected to a third-party site, this Privacy Policy no longer applies. We encourage you to review the privacy policies of any external websites you visit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies and Online Advertising</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and support marketing efforts.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies may be used to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Remember session information</li>
              <li>Analyze website traffic</li>
              <li>Track marketing campaign effectiveness</li>
              <li>Deliver relevant advertisements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use services such as Google Ads, Meta (Facebook) advertising tools, and other digital marketing platforms. These third parties may use cookies or similar technologies to display ads based on your previous visits to our website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can manage or opt out of certain targeted advertising through:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Google Ads Settings</li>
              <li>The Network Advertising Initiative opt-out page (www.aboutads.info/choices)</li>
              <li>European users: www.youronlinechoices.eu</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can also adjust your browser settings to disable cookies, though doing so may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Age Requirements</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By using our website, you confirm that you are at least the age of majority in your state of residence. If you are the age of majority and allow a minor dependent to use this website, you accept responsibility for their activity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement commercially reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure. While no online system can be guaranteed to be 100% secure, we take appropriate steps to safeguard your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or operational needs. Updates will be posted on this page with an updated effective date. Continued use of our website after changes are posted constitutes acceptance of the revised policy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If Pure Point Water Solutions is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Your Rights and Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you would like to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Access, review, or correct your personal information</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>File a complaint</li>
              <li>Ask questions about this Privacy Policy</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                <a href="mailto:dylan@purepointwatersolutions.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                  dylan@purepointwatersolutions.com
                </a>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-center mt-12 pt-8 border-t border-gray-200">
              Thank you for trusting Pure Point Water Solutions with your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
