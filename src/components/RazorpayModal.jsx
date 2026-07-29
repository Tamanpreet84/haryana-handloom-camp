import React, { useState } from 'react';
import { X, ShieldCheck, CreditCard, Smartphone, CheckCircle, Lock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RazorpayModal({ isOpen, onClose, amount, shippingAddress, onPaymentSuccess }) {
  const [method, setMethod] = useState('upi'); // 'upi', 'card', 'netbanking'
  const [upiId, setUpiId] = useState('9215211025@upi');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8892');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePayNow = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti effect triggered');
      }

      const paymentDetails = {
        paymentId: `pay_${Math.random().toString(36).substring(2, 11)}`,
        signature: `sig_${Math.random().toString(36).substring(2, 14)}`,
        paymentMethod: method === 'upi' ? `Razorpay UPI (${upiId})` : 'Razorpay Card/Netbanking',
        amountPaid: amount,
        shippingAddress
      };

      onPaymentSuccess(paymentDetails);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border-2 border-emerald-500/50 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl space-y-0">
        
        {/* Header Ribbon */}
        <div className="bg-[#0F172A] text-white p-5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              RZP
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm">Razorpay Secured</span>
                <span className="text-[9px] bg-amber-400 text-slate-950 font-extrabold px-1.5 py-0.5 rounded uppercase">
                  TEST MODE
                </span>
              </div>
              <p className="text-[10px] text-slate-300">Haryana Handloom Camp Merchant</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-slate-900 dark:text-white">
          
          {/* Amount Badge */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-emerald-800 dark:text-emerald-300 font-bold uppercase block">
                Total Payable Amount:
              </span>
              <span className="font-serif font-extrabold text-2xl text-emerald-900 dark:text-emerald-200">
                ₹{amount}
              </span>
            </div>
            <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>

          {/* Payment Method Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block uppercase">
              Select Payment Mode:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <button
                onClick={() => setMethod('upi')}
                className={`p-3 rounded-xl border flex items-center gap-2 transition-all ${
                  method === 'upi'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>UPI (GPay/PhonePe)</span>
              </button>
              <button
                onClick={() => setMethod('card')}
                className={`p-3 rounded-xl border flex items-center gap-2 transition-all ${
                  method === 'card'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <span>Debit / Credit Card</span>
              </button>
            </div>
          </div>

          {/* Inputs */}
          {method === 'upi' ? (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">VPA / UPI ID:</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
              />
            </div>
          ) : (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Card Details:</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handlePayNow}
            disabled={isProcessing}
            className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Verifying Payment with Bank...
              </span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Pay ₹{amount} via Razorpay</span>
              </>
            )}
          </button>

          <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
            <Lock className="w-3 h-3 text-emerald-500" />
            256-Bit SSL Encryption • Instant Merchant Confirmation
          </p>

        </div>
      </div>
    </div>
  );
}
