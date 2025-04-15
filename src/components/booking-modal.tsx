
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Clock, CreditCard, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  stationName: string;
  connectorTypes: string[];
}

export function BookingModal({ isOpen, onClose, stationName, connectorTypes }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [selectedConnector, setSelectedConnector] = useState<string | null>(connectorTypes[0] || null);
  const [step, setStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);

  const timeSlots = [
    { id: 1, time: '8:00 AM - 9:00 AM', available: true },
    { id: 2, time: '9:00 AM - 10:00 AM', available: true },
    { id: 3, time: '10:00 AM - 11:00 AM', available: true },
    { id: 4, time: '11:00 AM - 12:00 PM', available: true },
    { id: 5, time: '12:00 PM - 1:00 PM', available: false },
    { id: 6, time: '1:00 PM - 2:00 PM', available: true },
    { id: 7, time: '2:00 PM - 3:00 PM', available: true },
    { id: 8, time: '3:00 PM - 4:00 PM', available: true },
    { id: 9, time: '4:00 PM - 5:00 PM', available: false },
    { id: 10, time: '5:00 PM - 6:00 PM', available: true },
    { id: 11, time: '6:00 PM - 7:00 PM', available: true },
    { id: 12, time: '7:00 PM - 8:00 PM', available: true },
  ];

  const handleNext = () => {
    if (step === 3) {
      // Complete booking
      setBookingComplete(true);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    // Reset the state when closing
    setDate(new Date());
    setSelectedSlot(null);
    setSelectedConnector(connectorTypes[0] || null);
    setStep(1);
    setBookingComplete(false);
    onClose();
  };

  const isNextDisabled = () => {
    if (step === 1) return !date;
    if (step === 2) return selectedSlot === null;
    return false;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
        {!bookingComplete ? (
          <>
            <DialogHeader>
              <DialogTitle>Book a Charging Slot</DialogTitle>
              <DialogDescription>
                {stationName} | Step {step} of 3
              </DialogDescription>
            </DialogHeader>
            
            {step === 1 && (
              <div className="py-4">
                <h4 className="text-sm font-medium mb-3">Select Date</h4>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border mx-auto"
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
              </div>
            )}
            
            {step === 2 && (
              <div className="py-4">
                <h4 className="text-sm font-medium mb-3">Select Time Slot</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.id}
                      variant={selectedSlot === slot.id ? "default" : "outline"}
                      className={`flex items-center justify-center ${
                        selectedSlot === slot.id 
                          ? "bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo border-transparent" 
                          : ""
                      } ${!slot.available ? "opacity-50 cursor-not-allowed" : ""}`}
                      onClick={() => slot.available && setSelectedSlot(slot.id)}
                      disabled={!slot.available}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {slot.time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="py-4">
                <h4 className="text-sm font-medium mb-3">Connector Type & Payment</h4>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Select Connector Type</p>
                  <div className="flex flex-wrap gap-2">
                    {connectorTypes.map((type) => (
                      <Badge
                        key={type}
                        variant={selectedConnector === type ? "default" : "outline"}
                        className={`cursor-pointer py-2 px-3 ${
                          selectedConnector === type 
                            ? "bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo" 
                            : ""
                        }`}
                        onClick={() => setSelectedConnector(type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-md border p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Booking Summary</span>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span>Date:</span>
                      <span>{date?.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Time:</span>
                      <span>{timeSlots.find(slot => slot.id === selectedSlot)?.time}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Connector:</span>
                      <span>{selectedConnector}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Station:</span>
                      <span>{stationName}</span>
                    </div>
                    <div className="border-t mt-2 pt-2 flex justify-between font-medium">
                      <span>Total:</span>
                      <span>$15.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 border rounded-md bg-gray-50">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm">Payment will be processed upon arrival</span>
                </div>
              </div>
            )}
            
            <DialogFooter className="flex justify-between">
              {step > 1 ? (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div></div> // Empty div for spacing
              )}
              <Button 
                className="bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo"
                onClick={handleNext} 
                disabled={isNextDisabled()}
              >
                {step === 3 ? 'Complete Booking' : 'Next'}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="py-10 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Booking Confirmed!
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your charging slot has been successfully booked. 
                  You'll receive a confirmation email with all the details.
                </p>
              </div>
              <div className="mt-6">
                <Button 
                  className="w-full bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo"
                  onClick={handleClose}
                >
                  View My Bookings
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
