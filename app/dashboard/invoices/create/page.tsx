import Form from '@/components/ui/invoices/create-form';
import Breadcrumbs from '@/components/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/components/lib/data';
import { paths } from '@/components/routes/path';

export default async function CreateInvoicePage() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: `${paths.invoices.root}` },
          {
            label: 'Create Invoice',
            href: `${paths.invoices.create}`,
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
