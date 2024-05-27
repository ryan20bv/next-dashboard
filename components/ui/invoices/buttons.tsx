import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { paths } from '@/components/routes/path';
import { deleteInvoiceAction } from '@/components/lib/actions/deleteInvoiceAction';

export function CreateInvoice() {
  return (
    <Link
      href={`${paths.invoices.create}`}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`${paths.invoices.edit(id)}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice() {
  return (
    <button className="rounded-md border p-2 hover:bg-gray-100">
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  );
}

export function ConfirmDeleteInvoice({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const deleteInvoiceWithId = deleteInvoiceAction.bind(null, id);
  // onClose();

  return (
    <form action={deleteInvoiceWithId}>
      <button className="ml-4 rounded-md border bg-red-500 p-2 text-white hover:bg-red-400 hover:text-black ">
        <span>Delete</span>
        {/* <span className="sr-only">Delete</span> */}
        {/* <TrashIcon className="w-5" /> */}
      </button>
    </form>
  );
}
