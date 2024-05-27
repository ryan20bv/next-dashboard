'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { paths } from '@/components/routes/path';

export async function deleteInvoiceAction(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath(`${paths.invoices.root}`);
}
