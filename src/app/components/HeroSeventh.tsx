import Image from "next/image";

function HeroSeventh() {
  // List of countries with their ISO codes and names
  const countries = [
    { code: "us", name: "United States", email: "contact@us-region.com" },
    { code: "in", name: "India", email: "support@india-region.com" },
    { code: "fr", name: "France", email: "info@france-region.com" },
    { code: "jp", name: "Japan", email: "help@japan-region.com" },
    { code: "de", name: "Germany", email: "service@germany-region.com" },
    { code: "au", name: "Australia", email: "contact@australia-region.com" },
    { code: "cn", name: "China", email: "support@china-region.com" },
    { code: "br", name: "Brazil", email: "info@brazil-region.com" },
    { code: "ru", name: "Russia", email: "help@russia-region.com" },
    { code: "za", name: "South Africa", email: "service@southafrica-region.com" },
  ];
  return (
    <div className="ml-28 mr-20 mt-5">
      <h1 className="text-2xl font-bold mb-4">Suppliers by Region</h1>
      {/* Use grid layout to ensure 5 items per row */}
      <div className="grid grid-cols-5 gap-4">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Flag using Next.js Image */}
            <Image
              src={`https://flagcdn.com/w40/${country.code}.png`}
              alt={`${country.name} flag`}
              width={40}
              height={25}
              className="rounded-sm"
            />
            {/* Country name */}
            <div className="flex flex-col">
                  <p className="text-sm font-medium">{country.name}</p>
            <p className="text-xs text-gray-500">{country.email}</p>

            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSeventh;
