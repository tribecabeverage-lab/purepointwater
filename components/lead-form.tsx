'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
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

    const clientId = 'sb_564b20225c466bf596dc86f72c56b993';
    const domain = 'purepointwatersolutions.com';
    const endpoint = 'https://us-central1-sb-services-13a91.cloudfunctions.net/submitLead';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: clientId,
          domain: domain,
          leadData: {
            ...formData,
            source: 'hero-lead-form',
            timestamp: new Date().toISOString()
          }
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
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
        console.error('Lead submission failed:', result);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Card className="bg-green-50/95 backdrop-blur-sm shadow-lg border-4 border-green-400 max-w-md w-full">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-green-800 mb-4">Thank You!</h3>
          <p className="text-green-700">We'll be in touch shortly.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-blue-50/95 backdrop-blur-sm shadow-lg border-4 border-blue-400 max-w-md w-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get Your Free Quote</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="bg-white border-blue-200 focus:border-blue-400"
            />
            <Input
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="bg-white border-blue-200 focus:border-blue-400"
            />
          </div>
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="bg-white border-blue-200 focus:border-blue-400"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-white border-blue-200 focus:border-blue-400"
          />

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">I am a: *</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, customerType: 'home', company: '' }));
                }}
                className={`py-2 px-4 rounded border-2 transition-all ${
                  formData.customerType === 'home'
                    ? 'bg-blue-400 text-white border-blue-400'
                    : 'bg-white text-gray-700 border-blue-200 hover:border-blue-300'
                }`}
              >
                Homeowner
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, customerType: 'business' }))}
                className={`py-2 px-4 rounded border-2 transition-all ${
                  formData.customerType === 'business'
                    ? 'bg-blue-400 text-white border-blue-400'
                    : 'bg-white text-gray-700 border-blue-200 hover:border-blue-300'
                }`}
              >
                Business
              </button>
            </div>
          </div>

          {formData.customerType === 'business' && (
            <Input
              name="company"
              placeholder="Company Name *"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="bg-white border-blue-200 focus:border-blue-400"
            />
          )}
          <Input
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="bg-white border-blue-200 focus:border-blue-400"
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="bg-white border-blue-200 focus:border-blue-400 col-span-1"
            />
            <Input
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              className="bg-white border-blue-200 focus:border-blue-400"
            />
          </div>
          <Input
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleInputChange}
            className="bg-white border-blue-200 focus:border-blue-400"
          />
          {formData.customerType && (
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Service Interested In: *</Label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: '5-gallon' }))}
                  className={`w-full py-2 px-4 rounded border-2 text-left transition-all ${
                    formData.serviceType === '5-gallon'
                      ? 'bg-blue-400 text-white border-blue-400'
                      : 'bg-white text-gray-700 border-blue-200 hover:border-blue-300'
                  }`}
                >
                  5-Gallon Water Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: 'filtered-dispenser' }))}
                  disabled={formData.customerType === 'home'}
                  className={`w-full py-2 px-4 rounded border-2 text-left transition-all ${
                    formData.customerType === 'home'
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : formData.serviceType === 'filtered-dispenser'
                      ? 'bg-blue-400 text-white border-blue-400'
                      : 'bg-white text-gray-700 border-blue-200 hover:border-blue-300'
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
                  className={`w-full py-2 px-4 rounded border-2 text-left transition-all ${
                    formData.customerType === 'home'
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : formData.serviceType === 'open-to-both'
                      ? 'bg-blue-400 text-white border-blue-400'
                      : 'bg-white text-gray-700 border-blue-200 hover:border-blue-300'
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
          <Textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="bg-white border-blue-200 focus:border-blue-400"
          />
          <div className="flex items-start space-x-2">
            <Checkbox
              id="hero-consent"
              checked={formData.smsConsent}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, smsConsent: checked as boolean }))}
              className="mt-1"
            />
            <label
              htmlFor="hero-consent"
              className="text-xs text-gray-700 leading-tight cursor-pointer"
            >
              I agree to receive communications by text message regarding Water Services from Pure Point Water Solutions. You may opt out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> to learn how your data is used.
            </label>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Get Free Quote'}
          </Button>
        </form>
        <p className="text-xs text-gray-600 text-center mt-3">
          Your Full Service Water & Ice Provider
        </p>
      </CardContent>
    </Card>
  );
}