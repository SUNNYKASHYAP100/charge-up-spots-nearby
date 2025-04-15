
export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "ElectricChargeHub has completely transformed how I plan my trips. I never worry about finding a charging station anymore.",
      author: "Sarah K.",
      role: "Tesla Model 3 Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      quote: "As someone who travels frequently for work, this app has been a game-changer. Booking charging slots in advance gives me peace of mind.",
      author: "Michael T.",
      role: "Nissan Leaf Driver",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      quote: "The real-time availability feature is incredible. I've saved countless hours that I would have spent driving to unavailable stations.",
      author: "Emma R.",
      role: "Kia EV6 Owner",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-ev-blue">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by EV drivers
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
                <blockquote className="text-gray-700">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.image} alt="" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
