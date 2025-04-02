import { lusitana } from "@/app/ui/fonts";
import { fetchAllCustomers } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { PlusIcon , ArrowUpRightIcon} from '@heroicons/react/24/outline';

export default async function Page() {
  const customers = await fetchAllCustomers();

  return (
    <div className="w-full px-6 py-8">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className={`${lusitana.className} text-3xl font-bold`}>Customers</h1>

        <div className="mt-4 flex items-center md:mt-8">
          <Link 
          href="/dashboard/customers/create"
          className="bg-blue-500 flex px-2 py-1 rounded-md space-x-1 text-white text-center"
          >
          <p><PlusIcon className="h-5 md:ml-4 text-left" /></p>
          Add Customer
          </Link>
          </div>
      </div>

      {/* Customers Grid */}
      <div className="bg-white p-6">
        {customers && customers.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="relative flex flex-col items-center rounded-lg bg-gray-50 p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {/* View Details Link Icon */}
                <Link
                  href={`/dashboard/customers/${customer.id}/view`}
                  className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                >
                  <ArrowUpRightIcon className="w-5 h-5" />
                </Link>

                {/* Customer Profile Image */}
                <Image
                  src={customer.image_url}
                  alt={`${customer.name}'s profile picture`}
                  className="mb-3 rounded-full border border-gray-200 shadow-sm"
                  width={60}
                  height={60}
                />

                {/* Customer Info */}
                <div className="text-center">
                  <p className="mb-1 text-lg font-semibold text-gray-800">{customer.name}</p>
                  <p className="text-sm text-gray-500">{customer.email}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 text-center">No customers found.</p>
        )}
      </div>
    </div>
  );
}
