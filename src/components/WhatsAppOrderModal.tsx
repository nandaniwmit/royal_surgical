import React, { useState } from 'react';
import { X, MessageCircle, PhoneCall, UploadCloud, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = '',
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine);
  const [quantity, setQuantity] = useState('1');
  const [hasPrescription, setHasPrescription] = useState(false);
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState('Within 2-3 Hours');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  // Update prefilled medicine if changed
  React.useEffect(() => {
    if (prefilledMedicine) {
      setMedicineName(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setFormError('Please enter your full name');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!medicineName.trim()) {
      setFormError('Please enter the medicine or item required');
      return;
    }

    setFormError('');

    const url = buildWhatsAppUrl({
      customerName,
      phone: mobileNumber,
      email: email.trim(),
      medicineRequired: medicineName,
      quantity,
      address: address.trim() || 'Aurangabad, Bihar',
      prescriptionUploaded: hasPrescription || !!prescriptionFile,
      preferredTime: preferredDeliveryTime,
      message: message.trim() + (prescriptionFile ? ' [Prescription attached as photo in chat]' : ''),
    });

    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div className="relative my-8 w-full max-w-xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <button
          id="close-whatsapp-order-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div>
            <h3 id="order-modal-title" className="text-xl font-bold text-slate-900 dark:text-white">
              WhatsApp Medicine Order
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct dispatch to your home in Aurangabad with instant pharmacist confirmation
            </p>
          </div>
        </div>

        {formError && (
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-xs text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="customer-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name *
              </label>
              <input
                id="customer-name"
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="customer-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number *
              </label>
              <input
                id="customer-phone"
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="customer-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                id="customer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ramesh@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="customer-delivery-time" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                id="customer-delivery-time"
                value={preferredDeliveryTime}
                onChange={(e) => setPreferredDeliveryTime(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="Urgent (Within 1 Hour)">Urgent (Within 1 Hour)</option>
                <option value="Within 2-3 Hours">Within 2-3 Hours</option>
                <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                <option value="Tomorrow Morning (9 AM - 12 PM)">Tomorrow Morning (9 AM - 12 PM)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="customer-medicine" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Medicine Name / Surgical Items Required *
              </label>
              <input
                id="customer-medicine"
                type="text"
                required
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                placeholder="e.g. Dolo 650, Telma 40, Surgical Gauze..."
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="customer-quantity" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Quantity / Packs
              </label>
              <input
                id="customer-quantity"
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 2 Strips / 1 Box"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="customer-address" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address (Aurangabad Local)
            </label>
            <input
              id="customer-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Near Ramesh Chowk / MG Road, Aurangabad"
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Upload Prescription / Toggle */}
          <div className="rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 p-4 dark:border-emerald-800/80 dark:bg-emerald-950/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <UploadCloud className="h-4 w-4 text-emerald-600" />
                Prescription Upload
              </span>
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 dark:text-slate-300">
                <input
                  id="has-prescription-checkbox"
                  type="checkbox"
                  checked={hasPrescription}
                  onChange={(e) => setHasPrescription(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>I have a doctor&apos;s prescription</span>
              </label>
            </div>

            <div className="mt-2.5 flex items-center gap-3">
              <input
                id="prescription-file-input"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setPrescriptionFile(e.target.files[0]);
                    setHasPrescription(true);
                  }
                }}
                className="text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer"
              />
              {prescriptionFile && (
                <span className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                  Attached: {prescriptionFile.name}
                </span>
              )}
            </div>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              You can also directly attach the photo in WhatsApp once the chat opens!
            </p>
          </div>

          <div>
            <label htmlFor="customer-notes" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Notes or Special Instructions (Optional)
            </label>
            <textarea
              id="customer-notes"
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Please send generic or branded substitute if available..."
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white resize-none"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-2">
            <button
              id="send-whatsapp-order-btn"
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 active:scale-95 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Send via WhatsApp</span>
            </button>
            <a
              id="call-now-order-btn"
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              <PhoneCall className="h-4 w-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
