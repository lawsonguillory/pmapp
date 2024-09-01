import React from 'react';
import ProjectManagementAssistant from '@/components/ProjectManagementAssistant';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProjectManagementAssistant />
    </main>
  );
}