import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { ShieldCheck, Users, Mail, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    experience: '',
    instagram: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const experienceOptions = [
    'All experiences',
    'Bordeaux, France',
    'Ribera Del Duero, Spain', 
    'Piedmont, Italy', 
    'Toscana, Italy', 
    'Mendoza, Argentina'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.experience) newErrors.experience = 'Please select an experience';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Please check your details",
        description: "Some fields require your attention.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('The waiting list')
        .insert([
          { 
            full_name: formData.fullName,
            email: formData.email,
            country_residence: formData.country,
            experience_interest: formData.experience,
            instagram: formData.instagram || null,
            source: 'contact_form'
          }
        ]);

      if (error) throw error;
      
      // PERSISTENCE: Save to localStorage as backup/analytics
      const existingSubmissions = JSON.parse(localStorage.getItem('waitingList') || '[]');
      const submission = { ...formData,
        submittedAt: new Date().toISOString(),
        source: 'ContactPage'
      };
      existingSubmissions.push(submission);
      localStorage.setItem('waitingList', JSON.stringify(existingSubmissions));
      
      toast({
        title: "Request Received",
        description: "We've added you to our priority waiting list."
      });
      
      setFormData({
        fullName: '',
        email: '',
        country: '',
        experience: '',
        instagram: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Something went wrong. Please email us at info@thewinetrips.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev,
      [name]: value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev,
      [name]: ''
    }));
  };

  return (
    <>
      <Helmet>
        <title>Join Our Waiting List - The Wine Trips</title>
        <meta name="description" content="Secure your place for exclusive wine experiences." />
        <link rel="canonical" href="https://thewinetrips.com/contact" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewinetrips.com/contact" />
        <meta property="og:title" content="Join Our Waiting List - The Wine Trips" />
        <meta property="og:description" content="Secure your place for exclusive wine experiences with The Wine Trips." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/contact" />
        <meta property="twitter:title" content="Join Our Waiting List - The Wine Trips" />
        <meta property="twitter:description" content="Secure your place for exclusive wine experiences with The Wine Trips." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      <div className="min-h-screen bg-white pt-0">
        {/* Hero Section */}
        <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80" alt="Wine cellar with oak barrels at exclusive vineyard estate" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
            <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
              Limited Availability
            </span>
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
              The Waiting List
            </h1>
            <p className="text-base md:text-lg font-light text-white/80 max-w-xl mx-auto leading-relaxed font-sans">
              Our journeys are intimate by design. Join the list to secure priority access to upcoming allocations.
            </p>
          </motion.div>
        </section>

        {/* Main Content Split Layout */}
        <div className="flex flex-col lg:flex-row w-full bg-white">
          
          {/* Left Column: Contact Form */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-100 flex items-center justify-center bg-white">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-xl">
              <h2 className="text-2xl font-serif text-gray-900 mb-8 text-center lg:text-left">Request Access</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8 font-sans">
                {/* 1. Full Name */}
                <div className="group">
                  <label htmlFor="fullName" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-lg placeholder-gray-300 focus:outline-none font-sans disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="Enter your full name" 
                  />
                  {errors.fullName && <p className="mt-2 text-xs text-red-500">{errors.fullName}</p>}
                </div>

                {/* 2. Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-lg placeholder-gray-300 focus:outline-none font-sans disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="name@example.com" 
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* 3. Country */}
                <div className="group">
                  <label htmlFor="country" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    Country of Residence
                  </label>
                  <input 
                    type="text" 
                    id="country" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-lg placeholder-gray-300 focus:outline-none font-sans disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="Enter your country" 
                  />
                  {errors.country && <p className="mt-2 text-xs text-red-500">{errors.country}</p>}
                </div>

                {/* 4. Experience Interest */}
                <div>
                  <label htmlFor="experience" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    Experience Interest
                  </label>
                  <select 
                    id="experience" 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-lg focus:outline-none cursor-pointer font-sans disabled:opacity-50 disabled:bg-gray-50"
                  >
                    <option value="" className="text-gray-400">Select an experience</option>
                    {experienceOptions.map(exp => <option key={exp} value={exp}>
                        {exp}
                      </option>)}
                  </select>
                  {errors.experience && <p className="mt-2 text-xs text-red-500">{errors.experience}</p>}
                </div>

                {/* 5. Instagram Handle (Optional) */}
                <div>
                  <label htmlFor="instagram" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    Instagram (Optional)
                  </label>
                  <input 
                    type="text" 
                    id="instagram" 
                    name="instagram" 
                    value={formData.instagram} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-lg placeholder-gray-300 focus:outline-none font-sans disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="@username" 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1a1a1a] text-white rounded-none text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-500 mt-6 shadow-lg hover:shadow-xl font-sans flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    'Join Waiting List'
                  )}
                </button>

                {/* Disclaimer Text */}
                <p className="text-[10px] text-gray-400 text-center mt-4 leading-tight font-light max-w-md mx-auto">
                  I agree to receive email updates from TheWineTrips and consent to the processing of my personal data in accordance with the privacy policy.
                </p>
              </form>

              {/* Trust Badges - CENTERED PER REQUEST */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row flex-wrap justify-center gap-6 font-sans">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-light">
                  <ShieldCheck className="w-4 h-4 text-[#c9a96e]" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-light">
                  <Users className="w-4 h-4 text-[#c9a96e]" />
                  <span>Max 8 guests</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-light">
                  <Mail className="w-4 h-4 text-[#c9a96e]" />
                  <span>Priority access</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Calendly Widget */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-6 md:p-12 lg:p-20 flex flex-col items-center justify-center">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full max-w-xl h-full flex flex-col">
              <div className="text-center mb-10">
                <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
                  Direct Contact
                </span>
                <h2 className="text-3xl font-serif text-gray-900 mb-4">Meet Our Experts</h2>
                <p className="text-gray-500 font-light text-sm max-w-md mx-auto">
                  Prefer to speak with someone? Schedule a complimentary consultation to discuss your specific requirements.
                </p>
              </div>
              
              <div className="flex-grow w-full min-h-[600px] bg-white shadow-lg rounded-sm overflow-hidden relative">
                 <iframe 
                  src="https://calendly.com/thewinetrips-info" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  title="Schedule a consultation with The Wine Trips" 
                  className="w-full h-full min-h-[600px]"
                ></iframe>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
};
export default ContactPage;