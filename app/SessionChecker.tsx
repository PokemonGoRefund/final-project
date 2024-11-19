'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SessionChecker = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('sessionToken');
    if (!token) {
      // หากไม่มี token ให้ redirect ไปที่หน้าเข้าสู่ระบบ
      router.push('/');
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ''; // แสดงกล่องยืนยัน
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [router]);

  return null; // ไม่ต้องการ render อะไร
};

export default SessionChecker;