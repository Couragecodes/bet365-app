import React from 'react';

type Toast = {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'info';
};

export type ToasterContextType = {
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
};

export const ToasterContext = React.createContext<ToasterContextType | undefined>(undefined);

export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  // to add toaster

  function addToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    // have to make the id a date as it unique in its way and can avoid recurrision
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);

    // to remove the toaster

    setTimeout(() => removeToast(id), 5000);
  }

  function removeToast(id: string) {
    // this function checks/ find id and then removes it
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
    <ToasterContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToasterContext.Provider>
  );
}
