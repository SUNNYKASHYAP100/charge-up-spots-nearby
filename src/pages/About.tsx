
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-ev-blue/10 to-ev-green/10 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Mission</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We're making electric vehicle charging accessible, convenient, and stress-free.
              </p>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-ev-blue">About ElectricChargeHub</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Revolutionizing EV Charging</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    ElectricChargeHub was born from a simple frustration - the difficulty in finding and securing reliable charging spots for electric vehicles. We saw firsthand how range anxiety and charging uncertainty were holding back EV adoption.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our platform connects drivers with charging stations, offering real-time availability and advanced booking to eliminate the uncertainty in the EV charging experience.
                  </p>
                  
                  <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div>
                      <h3 className="font-semibold text-gray-900">Founded by EV Enthusiasts</h3>
                      <p className="mt-2">
                        Our team consists of passionate EV owners who understand the challenges and joys of electric vehicle ownership. We've built the solution we wished existed when we first started driving electric.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Values</h3>
                      <p className="mt-2">
                        We believe in sustainable transportation, exceptional customer experiences, and building technology that makes a positive impact on the environment and society.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Growing Network</h3>
                      <p className="mt-2">
                        We're constantly expanding our network of charging stations and partners to provide the most comprehensive coverage and best service for our users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:flex lg:flex-col lg:justify-center">
                <img
                  src="https://images.unsplash.com/photo-1638887232075-33691d8de7d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Team working on electric vehicle charging solutions"
                  className="w-full rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership Team
            </h2>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Emma Johnson',
                  role: 'Co-Founder & CEO',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
                  description: 'Former Tesla engineer with 10+ years in the EV industry.'
                },
                {
                  name: 'Michael Chen',
                  role: 'Co-Founder & CTO',
                  image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                  description: 'Software architect specializing in mapping and location-based services.'
                },
                {
                  name: 'Sarah Williams',
                  role: 'COO',
                  image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                  description: 'Sustainability expert with background in renewable energy infrastructure.'
                },
              ].map((person) => (
                <div key={person.name} className="flex flex-col items-center">
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.image} alt={person.name} />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-ev-blue">{person.role}</p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-center">{person.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
