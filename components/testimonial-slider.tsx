export default function ReviewWidget() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Real feedback from businesses we serve across NY & CT
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-816d80cb-8521-4139-a5a0-862a3aa1538b" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}