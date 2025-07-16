'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DataDeletion() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    confirmation: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the deletion request to your backend
    console.log('Deletion request:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="section-title">Data Deletion Request</h1>
          
          <div style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            {!isSubmitted ? (
              <>
                <div style={{ marginBottom: '2rem' }}>
                  <h2>Your Right to Data Deletion</h2>
                  <p>
                    Under privacy laws, you have the right to request the deletion of your personal 
                    information that we hold. This form allows you to submit a formal deletion request.
                  </p>
                  
                  <h3>What We Will Delete</h3>
                  <ul>
                    <li>Your contact information (name, email, phone number)</li>
                    <li>Property preferences and requirements</li>
                    <li>Communication history and preferences</li>
                    <li>Account information (if applicable)</li>
                    <li>Analytics data associated with your IP address</li>
                  </ul>

                  <h3>Processing Time</h3>
                  <p>
                    We will process your deletion request within 30 days and send you a confirmation 
                    email once completed.
                  </p>

                  <h3>Important Notes</h3>
                  <ul>
                    <li>We may retain certain information if required by law or for legitimate business purposes</li>
                    <li>Deletion is permanent and cannot be undone</li>
                    <li>You may need to provide additional verification for security purposes</li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your phone number (optional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="reason" className="form-label">Reason for Deletion (Optional)</label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="form-control"
                      rows={4}
                      placeholder="Please let us know why you're requesting data deletion (optional)"
                    />
                  </div>

                  <div className="form-group">
                    <label className="radio-label">
                      <input
                        type="checkbox"
                        name="confirmation"
                        checked={formData.confirmation}
                        onChange={handleChange}
                        required
                      />
                      <span style={{ marginLeft: '8px' }}>
                        I confirm that I want to permanently delete my personal information. 
                        I understand this action cannot be undone. *
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full-width">
                    Submit Deletion Request
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h2>Thank You</h2>
                <p>
                  Your data deletion request has been submitted successfully. We will process your 
                  request within 30 days and send you a confirmation email once completed.
                </p>
                <p>
                  If you have any questions about your deletion request, please contact us at{' '}
                  <strong>privacy@lukefornieri.com.au</strong>
                </p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 