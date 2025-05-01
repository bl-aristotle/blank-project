// app/gallery/GalleryClient.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GalleryClient({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  useEffect(() => {
    router.refresh(); // Force a client-side refresh on mount
  }, [router]);

  return <>{children}</>;
}