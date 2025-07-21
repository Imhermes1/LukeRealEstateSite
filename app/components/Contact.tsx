'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    console.log('Submitting form data:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      const result = await response.json();
      console.log('Response data:', result);

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactMethod: 'email',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Discuss Your Property Goals</h3>
            <p>Ready to buy, sell, or invest in Melbourne's premium property market? I'm here to help you achieve your real estate objectives.</p>
            <div className="contact-details">
              <p><strong>Phone:</strong> 0423 633 740</p>
              <p><strong>Email:</strong> luke.f@makrealty.com.au</p>
              <p><strong>Office:</strong> MAK REALTY, 495 Main Street, Mordialloc</p>
            </div>
          </div>
          <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-control" 
                required 
                aria-describedby="name-help"
                value={formData.name}
                onChange={handleChange}
              />
              <div id="name-help" className="form-help">Please enter your full name</div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-control" 
                required 
                aria-describedby="email-help"
                value={formData.email}
                onChange={handleChange}
              />
              <div id="email-help" className="form-help">We'll use this to contact you</div>
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-control" 
                aria-describedby="phone-help"
                value={formData.phone}
                onChange={handleChange}
              />
              <div id="phone-help" className="form-help">Optional phone number</div>
            </div>
            <div className="form-group">
              <fieldset className="contact-method-fieldset">
                <legend className="form-label">Preferred Contact Method</legend>
                <div className="radio-group">
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="email" 
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                    />
                    Email
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="phone" 
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleChange}
                    />
                    Phone
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="either" 
                      checked={formData.contactMethod === 'either'}
                      onChange={handleChange}
                    />
                    Either
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-control" 
                rows={4} 
                required 
                aria-describedby="message-help"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div id="message-help" className="form-help">Tell us about your property needs</div>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="form-success">
                ✅ Thank you! Your message has been received. We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-error">
                ❌ {errorMessage}
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn btn-primary btn-full-width"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 
