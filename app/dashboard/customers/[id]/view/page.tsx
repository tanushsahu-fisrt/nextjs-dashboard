import { lusitana } from "@/app/ui/fonts";
import { fetchCustomerById } from "@/app/lib/data";
import Image from "next/image";

interface PageProps {
  params: { id: string };
}

export default async function Page( { params }: PageProps ){
  
  const data = await fetchCustomerById(params.id); // Fetch data asynchronously

  if (!data || data.length === 0) {
    return <p>No customer data found.</p>;
  }


  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customer Details</h1>
      </div>

      {/* Display Customer Data */}
      <div className="mt-4">
        {/* Profile Image */}
        <Image
          src={data[0].image_url}
          alt={`${data[0].name}'s profile picture`}
          className="mb-3 rounded-full mx-auto"
          width={100}
          height={100}
        />
        <p className="text-xl">Name: {data[0].name}</p>
        <p className="text-xl">Email: {data[0].email}</p>

        {/* Invoices Table */}
        {data.length > 0 && (
          <table className="mt-4 w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Amount</th>
                <th className="border border-gray-400 px-4 py-2">Status</th>
                <th className="border border-gray-400 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-400 px-4 py-2">{ele.amount || "N/A"}</td>
                  <td className="border border-gray-400 px-4 py-2">{ele.status || "N/A"}</td>
                  <td className="border border-gray-400 px-4 py-2">{new Date(ele.date).toLocaleDateString() || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
