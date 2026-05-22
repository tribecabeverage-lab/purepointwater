export default function CustomerLogos() {
  const logos = [
    {
      name: 'Coldwell Banker',
      image: '/Untitled design (41).png',
    },
    {
      name: 'Town of Newtown',
      image: '/Untitled design (40).png',
    },
    {
      name: 'State Farm',
      image: '/Untitled design (39).png',
    },
    {
      name: 'Waterstone on High Ridge',
      image: '/Untitled design (38).png',
    },
    {
      name: 'Hartford HealthCare',
      image: '/Untitled design (37).png',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of businesses across Connecticut and New York who trust Pure Point for their water solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
