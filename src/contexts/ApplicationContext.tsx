import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ApplicationContextType {
  isApplyModalOpen: boolean;
  openApplyModal: () => void;
  closeApplyModal: () => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const openApplyModal = () => setIsApplyModalOpen(true);
  const closeApplyModal = () => setIsApplyModalOpen(false);

  return (
    <ApplicationContext.Provider value={{ isApplyModalOpen, openApplyModal, closeApplyModal }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationModal = () => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useApplicationModal must be used within an ApplicationProvider');
  }
  return context;
};
