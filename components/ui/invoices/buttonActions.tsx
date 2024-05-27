'use client';

import { useState } from 'react';
import { UpdateInvoice, DeleteInvoice } from '@/components/ui/invoices/buttons';
import Modal from '../modal';
import { ConfirmDeleteInvoice } from '@/components/ui/invoices/buttons';

export default function ButtonActions({
  id,
  name,
  amount,
}: {
  id: string;
  name: string;
  amount: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal>
          <div>
            <h1 className="mb-4 text-2xl">Delete this invoice?</h1>
            <div>
              Name: <span className="font-bold">{name}</span>
            </div>
            <div>
              Amount: <span className="font-bold">{amount}</span>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="rounded-md border p-2 hover:border-black"
              >
                Cancel
              </button>
              {/* <button className="ml-4 rounded-md border-red-500 bg-red-500 px-3 py-1 text-white hover:bg-red-400 hover:text-black">
                Confirm
              </button> */}

              <ConfirmDeleteInvoice id={id} onClose={handleCloseModal} />
            </div>
          </div>
        </Modal>
      )}

      <UpdateInvoice id={id} />
      <div onClick={handleOpenModal}>
        <DeleteInvoice />
      </div>
    </>
  );
}
