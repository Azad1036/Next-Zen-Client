const HowItWorks = () => {
  return (
    <section className="py-10 bg-gray-100 text-center mt-12">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold">1️⃣ Create a Campaign</h3>
          <p className="text-gray-600">
            Set up a fundraising campaign with details and images.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold">2️⃣ Share & Promote</h3>
          <p className="text-gray-600">
            Use social media and word of mouth to spread the campaign.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold">3️⃣ Receive Donations</h3>
          <p className="text-gray-600">
            Supporters can donate securely, and you can track progress.
          </p>
        </div>
      </div>
      <p className="text-blue-500 mt-6 cursor-pointer hover:underline">
        📖 Read FAQs
      </p>
    </section>
  );
};

export default HowItWorks;
