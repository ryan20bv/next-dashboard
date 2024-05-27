import Form from '@/components/ui/invoices/edit-form';
import Breadcrumbs from '@/components/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/components/lib/data';

import { paths } from '@/components/routes/path';

export default async function EditInvoicePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: `${paths.invoices.root}` },
          {
            label: 'Edit Invoice',
            href: `${paths.invoices.edit(id)}`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
