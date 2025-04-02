import Form from '@/app/ui/customers/create-from';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';

 
export default async function Page() {

 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}