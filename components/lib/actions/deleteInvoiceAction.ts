'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { paths } from '@/components/routes/path';

export async function deleteInvoiceAction(id: string) {
  // throw new Error('Failed to Delete Invoice');
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice' };
  }

  revalidatePath(`${paths.invoices.root}`);
}
