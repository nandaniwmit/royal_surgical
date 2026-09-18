export interface SiteConfig {
  businessName: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  mapsUrl: string;
  googleMapsEmbed: string;
  workingHours: {
    weekdays: string;
    sunday: string;
    emergency: string;
  };
  establishedYear: string;
  drugLicenseNumber: string;
  gstNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    justdial: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  businessName: "Royal Surgical",
  shortName: "RoyalSurg",
  category: "Pharmacy & Surgical Supplies",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  description: "Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Aurangabad, Bihar.",
  phone: "9572075812",
  displayPhone: "+91 95720 75812",
  whatsapp: "9572075812",
  email: "royalsurgical.aurangabad@gmail.com",
  address: {
    street: "Old GT Rd",
    landmark: "near Gupta Mini Theater",
    city: "Aurangabad",
    state: "Bihar",
    pincode: "824101",
    full: "Old GT Rd, near Gupta Mini Theater, Aurangabad, Bihar 824101"
  },
  mapsUrl: "https://maps.google.com/?q=Old+GT+Rd+near+Gupta+Mini+Theater+Aurangabad+Bihar+824101",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.485608754668!2d84.3644023!3d24.7554905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cdbf78f44d5ab%3A0x8e8334465aa9c60e!2sOld%20GT%20Rd%2C%20Aurangabad%2C%20Bihar%20824101!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  workingHours: {
    weekdays: "8:00 AM - 10:30 PM",
    sunday: "8:30 AM - 10:00 PM",
    emergency: "24/7 Available via WhatsApp Call & Emergency Dispatch"
  },
  establishedYear: "2014",
  drugLicenseNumber: "BR-AUR/20/DRUG-41829",
  gstNumber: "10AABCR7892P1Z4",
  socials: {
    facebook: "https://facebook.com/royalsurgicalaurangabad",
    instagram: "https://instagram.com/royalsurgical_aurangabad",
    justdial: "https://www.justdial.com/Aurangabad-Bihar/Royal-Surgical-Near-Gupta-Mini-Theater"
  },
  pwa: {
    enabled: true,
    appName: "Royal Surgical - Pharmacy & Surgical Supplies",
    shortName: "RoyalSurg",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  }
};

export interface WhatsAppOrderDetails {
  customerName: string;
  phone: string;
  email?: string;
  medicineRequired: string;
  quantity?: string;
  address: string;
  prescriptionUploaded?: boolean;
  preferredTime?: string;
  message?: string;
}

export function buildWhatsAppUrl(details: WhatsAppOrderDetails): string {
  const text = `*Hello Royal Surgical Medicine Order*
---------------------------------------
*Customer Name:* ${details.customerName || 'N/A'}
*Phone:* ${details.phone || 'N/A'}
*Medicine Required:* ${details.medicineRequired || 'General Inquiry'}
${details.quantity ? `*Quantity:* ${details.quantity}\n` : ''}*Delivery Address:* ${details.address || 'Aurangabad, Bihar'}
*Prescription Available:* ${details.prescriptionUploaded ? 'Yes (Will send photo in this chat)' : 'No / OTC Item'}
${details.preferredTime ? `*Preferred Delivery Time:* ${details.preferredTime}\n` : ''}${details.message ? `*Notes:* ${details.message}\n` : ''}---------------------------------------
_Sent via Royal Surgical Web Portal_`;

  return `https://wa.me/91${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}
