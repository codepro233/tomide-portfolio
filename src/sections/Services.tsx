export default function Services() {
  const services = [
    "AI Applications",
    "Web Development",
    "Automation Systems",
    "Admin Dashboards",
    "Business Websites",
    "AI Chatbots",
  ];

  return (
    <section className="py-32">
      <h2 className="text-5xl text-center mb-12">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white/10 rounded-3xl p-8"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}