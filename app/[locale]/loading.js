import React from 'react';
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black w-full h-screen">
     
      <Spinner label="Loading..." color="secondary" size="lg" />
      
    </div>
  );
}
