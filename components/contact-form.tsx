'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    customerType: '',
    company: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    serviceType: '',
    message: '',
    smsConsent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms (configured to email info@tribecabeverage.com)
      const formBody = new URLSearchParams();
      formBody.append('form-name', 'contact');
      formBody.append('source', 'contact-form');
      Object.entries(formData).forEach(([k, v]) => {
        formBody.append(k, String(v));
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            customerType: '',
            company: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            serviceType: '',
            message: '',
            smsConsent: false,
          });
        }, 3000);
      } else {
        console.error('Form submission failed:', response.status);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reach Out to Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Headquartered in Greenwich, CT—serving customers within a 90-minute drive of NYC.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Ready to discuss your water solution needs?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <a href="tel:203-275-9009" className="text-primary hover:underline text-lg">
                      203-275-9009
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-600">
                      257 Sound Beach Ave<br />
                      Old Greenwich, CT 06870
                    </p>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-primary font-medium">Starting at $45/month</p>
                  <p className="text-sm text-gray-600">Bottleless cooler rentals with everything included</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>Tell us about your water solution needs</CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                      <p className="text-green-700">Thanks—our local team will be in touch shortly.</p>
                    </div>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} name="contact" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden"><label>Don&#39;t fill this out: <input name="bot-field" /></label></p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">I am a: *</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, customerType: 'home', company: '' }));
                        }}
                        className={`py-3 px-4 rounded border-2 transition-all ${
                          formData.customerType === 'home'
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary/50'
                        }`}
                      >
                        Homeowner
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, customerType: 'business' }))}
                        className={`py-3 px-4 rounded border-2 transition-all ${
                          formData.customerType === 'business'
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary/50'
                        }`}
                      >
                        Business
                      </button>
                    </div>
                  </div>

                  {formData.customerType === 'business' && (
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="streetAddress">Street Address</Label>
                    <Input
                      id="streetAddress"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {formData.customerType && (
                    <div>
                      <Label className="text-base font-medium">Service Interested In: *</Label>
                      <div className="mt-3 space-y-3">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, serviceType: '5-gallon' }))}
                          className={`w-full py-3 px-4 rounded border-2 text-left transition-all ${
                            formData.serviceType === '5-gallon'
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-primary/50'
                          }`}
                        >
                          5-Gallon Water Delivery
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, serviceType: 'filtered-dispenser' }))}
                          disabled={formData.customerType === 'home'}
                          className={`w-full py-3 px-4 rounded border-2 text-left transition-all ${
                            formData.customerType === 'home'
                              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                              : formData.serviceType === 'filtered-dispenser'
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-primary/50'
                          }`}
                        >
                          Filtered Water Dispenser
                          {formData.customerType === 'home' && (
                            <span className="text-xs block mt-1">Business customers only</span>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, serviceType: 'open-to-both' }))}
                          disabled={formData.customerType === 'home'}
                          className={`w-full py-3 px-4 rounded border-2 text-left transition-all ${
                            formData.customerType === 'home'
                              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                              : formData.serviceType === 'open-to-both'
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-primary/50'
                          }`}
                        >
                          Open to Both
                          {formData.customerType === 'home' && (
                            <span className="text-xs block mt-1">Business customers only</span>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your specific needs..."
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="smsConsent"
                      checked={formData.smsConsent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, smsConsent: checked as boolean }))}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="smsConsent"
                      className="text-sm text-gray-700 leading-tight cursor-pointer"
                    >
                      I agree to receive communications by text message regarding Water Services from Pure Point Water Solutions. You may opt out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> to learn how your data is used.
                    </Label>
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Request a Quote'}
                  </Button>
                </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}