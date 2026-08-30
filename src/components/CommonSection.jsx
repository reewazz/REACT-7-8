// src/components/CommonSection.jsx
const CommonSection = () => {
  return (
    <section className="w-full rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Common Section
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          This is a reusable section for all pages.
        </p>
      </div>

      <div className="rounded-lg bg-gray-50 p-5">
        <p className="text-gray-700">
          Common content goes here.
        </p>
      </div>
    </section>
  );
};

export default CommonSection;
