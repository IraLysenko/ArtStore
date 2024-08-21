import React from 'react';
import { Transition } from '@headlessui/react';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={onClose}></div>
      )}

      {/* Drawer */}
      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl z-50"
      >
        <div className="flex flex-col h-full p-6">
          <button onClick={onClose} className="self-end text-gray-500 hover:text-gray-700">
            Close
          </button>
          <div className="mt-4 flex-grow">{children}</div>
        </div>
      </Transition>
    </>
  );
};

export default Drawer;
