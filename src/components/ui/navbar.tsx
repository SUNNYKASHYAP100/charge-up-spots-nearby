import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { Button } from './button';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Successfully logged out!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-ev-blue to-ev-green bg-clip-text text-transparent">
                ElectricChargeHub
              </span>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link to="/find-stations" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Find Stations
            </Link>
            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <div className="relative group">
              <button 
                type="button" 
                className="text-gray-500 group inline-flex items-center text-base font-medium hover:text-gray-900"
              >
                <span>EVs & Charging</span>
                <ChevronDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </button>
              <div className="absolute z-10 hidden group-hover:block -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Link to="/charging-guides" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Charging Guides</p>
                        <p className="mt-1 text-sm text-gray-500">Learn about different charging options available</p>
                      </div>
                    </Link>
                    <Link to="/ev-models" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">EV Models</p>
                        <p className="mt-1 text-sm text-gray-500">Browse compatible electric vehicles</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {user ? (
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            ) : (
              <>
                <Link to="/auth" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </Link>
                <Link to="/auth">
                  <Button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-ev-blue to-ev-green bg-clip-text text-transparent">
                    ElectricChargeHub
                  </span>
                </div>
                <div className="-mr-2">
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/find-stations" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Find Stations</span>
                  </Link>
                  <Link to="/about" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">About</span>
                  </Link>
                  <Link to="/charging-guides" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Charging Guides</span>
                  </Link>
                  <Link to="/ev-models" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">EV Models</span>
                  </Link>
                  <Link to="/contact" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {user ? (
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </Button>
                ) : (
                  <>
                    <Link to="/auth" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Sign in
                    </Link>
                    <Link to="/auth">
                      <Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-ev-blue to-ev-green hover:from-ev-blue hover:to-ev-indigo">
                        Sign up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
