
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Zap, Clock, Star } from 'lucide-react';

export interface StationProps {
  id: string;
  name: string;
  address: string;
  distance: string;
  rating: number;
  powerOutput: string;
  connectorTypes: string[];
  availableNow: number;
  price: string;
  amenities: string[];
}

export function StationCard({ station, onBookingClick }: { 
  station: StationProps; 
  onBookingClick: (stationId: string) => void;
}) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{station.name}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1 text-gray-500" />
              {station.address}
            </CardDescription>
          </div>
          <Badge variant={station.availableNow > 0 ? "default" : "secondary"} className={station.availableNow > 0 ? "bg-ev-green" : ""}>
            {station.availableNow > 0 ? `${station.availableNow} Available` : 'Busy'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex justify-between text-sm mb-2">
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1 text-ev-blue" />
            <span>{station.powerOutput}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-ev-blue" />
            <span>{station.distance}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            <span>{station.rating}</span>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap mb-3">
          {station.connectorTypes.map(type => (
            <Badge key={type} variant="outline" className="text-xs bg-gray-50">
              {type}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {station.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {station.amenities.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{station.amenities.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        <span className="font-medium">{station.price}</span>
        <Button 
          size="sm" 
          className="bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo"
          onClick={() => onBookingClick(station.id)}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
