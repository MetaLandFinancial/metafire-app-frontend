import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/nft-financing');
  }, [router]); // The empty array ensures this effect runs once on mount

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
