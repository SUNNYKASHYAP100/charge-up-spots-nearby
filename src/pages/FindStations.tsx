
import { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SearchFilters } from '@/components/search-filters';
import { StationCard } from '@/components/station-card';
import { MapView } from '@/components/map-view';
import { BookingModal } from '@/components/booking-modal';
import { mockStations } from '@/data/mock-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';

const FindStations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const stations = [...mockStations]; // In a real app, this would be filtered based on search/filters
  
  const selectedStation = stations.find(station => station.id === selectedStationId);
  
  const handleBookingClick = (stationId: string) => {
    setSelectedStationId(stationId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-ev-slate mb-6">Find Charging Stations</h1>
        
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center mb-4 relative">
              <MapPin className="absolute left-3 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter location or ZIP code"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-16"
              />
              <Button 
                className="absolute right-1 bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo"
                size="sm"
              >
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>
            </div>
            
            <SearchFilters />
            
            <div className="mt-6">
              <Tabs defaultValue="list">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="list" className="flex-1">List View</TabsTrigger>
                  <TabsTrigger value="map" className="flex-1">Map View</TabsTrigger>
                </TabsList>
                
                <TabsContent value="list">
                  <div className="grid gap-4">
                    {stations.map(station => (
                      <div 
                        key={station.id}
                        onClick={() => handleBookingClick(station.id)}
                        className="cursor-pointer"
                      >
                        <StationCard station={station} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="map">
                  <div className="h-[600px] rounded-lg overflow-hidden">
                    <MapView />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="hidden lg:block w-1/2">
            <div className="h-[600px] rounded-lg overflow-hidden">
              <MapView />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {selectedStation && (
        <BookingModal 
          isOpen={isBookingModalOpen} 
          onClose={() => setIsBookingModalOpen(false)}
          stationName={selectedStation.name}
          connectorTypes={selectedStation.connectorTypes}
        />
      )}
    </div>
  );
};

export default FindStations;
