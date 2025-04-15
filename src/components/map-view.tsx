
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MapView() {
  // This is a placeholder component for a map view
  // In a real application, you would use a mapping library like Mapbox, Google Maps, or Leaflet
  
  const [showMessage, setShowMessage] = useState(false);
  
  return (
    <div className="relative h-full w-full bg-gray-100 rounded-lg overflow-hidden">
      <div 
        className="h-full w-full bg-gray-200 flex items-center justify-center"
        onClick={() => setShowMessage(true)}
      >
        <div className="text-center">
          <MapPin className="mx-auto h-12 w-12 text-ev-blue opacity-50" />
          <p className="mt-2 text-gray-500">Map would be displayed here with charging station locations</p>
          <Button 
            className="mt-4 bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo"
            onClick={() => setShowMessage(true)}
          >
            Show nearby stations
          </Button>
        </div>
      </div>
      
      {showMessage && (
        <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
          <div className="text-center max-w-md p-4">
            <h3 className="text-lg font-medium text-gray-900">Interactive Map Feature</h3>
            <p className="mt-2 text-gray-600">
              In a complete application, this would be an interactive map showing charging stations,
              their availability, and allowing you to select them for booking.
            </p>
            <Button 
              className="mt-4 bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo"
              onClick={() => setShowMessage(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
