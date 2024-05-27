import Form from '@/components/ui/invoices/edit-form';
import Breadcrumbs from '@/components/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/components/lib/data';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
