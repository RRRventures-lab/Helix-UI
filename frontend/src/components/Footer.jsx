import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { socialLinks } from '../data/mockData';
import { 
  Instagram, 
  Music, 
  Play, 
  Cloud, 
  Video, 
  Facebook,
  Send 
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const getIcon = (iconName) => {
    const icons = {
      instagram: Instagram,
      music: Music,
      play: Play,
      cloud: Cloud,
      video: Video,
      facebook: Facebook
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Mock newsletter signup
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive updates about new releases and events.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Helix Records Logo/Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-blue-600 mb-4">
            HELIX RECORDS
          </h2>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              aria-label={social.name}
            >
              {getIcon(social.icon)}
            </a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Join our mailing list
          </h3>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Helix Records is a division of <strong>Payday Records, Inc</strong>
          </p>
          <p className="text-xs text-gray-500">
            All Rights Reserved. Helix Records. ©
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;