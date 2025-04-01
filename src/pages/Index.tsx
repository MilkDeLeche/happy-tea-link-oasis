
import React from "react";
import Logo from "@/components/Logo";
import LinkButton from "@/components/LinkButton";
import SocialLinks from "@/components/SocialLinks";
import BubbleBackground from "@/components/BubbleBackground";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  MapPin, 
  ShoppingBag, 
  Phone, 
  Calendar, 
  Star, 
  Clock, 
  Image 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BubbleBackground />
      
      <div className="container max-w-md mx-auto px-4 py-10 flex flex-col items-center">
        <Logo />
        
        <h1 className="text-3xl font-bold mb-2 font-poppins text-tea-dark text-center">
          Happy Tea
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Bubble tea that makes you happy!
        </p>
        
        <div className="w-full space-y-3">
          <LinkButton 
            href="https://happytea.com/menu" 
            icon={<BookOpen />} 
            label="Our Menu" 
          />
          
          <LinkButton 
            href="https://happytea.com/order" 
            icon={<ShoppingBag />} 
            label="Order Online" 
          />
          
          <LinkButton 
            href="https://maps.google.com" 
            icon={<MapPin />} 
            label="Find Us" 
          />
          
          <LinkButton 
            href="tel:+123456789" 
            icon={<Phone />} 
            label="Call Us" 
          />
          
          <LinkButton 
            href="https://happytea.com/reservation" 
            icon={<Calendar />} 
            label="Make a Reservation" 
          />
          
          <LinkButton 
            href="https://happytea.com/gallery" 
            icon={<Image />} 
            label="Tea Gallery" 
          />
          
          <LinkButton 
            href="https://happytea.com/reviews" 
            icon={<Star />} 
            label="Leave a Review" 
          />
          
          <LinkButton 
            href="https://happytea.com/hours" 
            icon={<Clock />} 
            label="Opening Hours" 
          />
        </div>
        
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
