import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Form from '@/components/ui/invoices/edit-form';
import Breadcrumbs from '@/components/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/components/lib/data';

import { paths } from '@/components/routes/path';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

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

  if (!invoice) {
    notFound();
  }

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
      <Suspense fallback={<p>Fetching Information...</p>}>
        <Form invoice={invoice} customers={customers} />
      </Suspense>
    </main>
  );
}
