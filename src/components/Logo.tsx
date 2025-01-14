'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LogoProps {
  size: number;
}

const Logo = ({ size }: LogoProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoLight = '/images/logoLight.png';
  const logoDark = '/images/logoDark.png';

  return (
    <Image
      src={theme === 'dark' ? logoDark : logoLight}
      alt="Logo"
      height={size}
      width={size}
      layout="intrinsic"
    />
  );
};

export default Logo;
