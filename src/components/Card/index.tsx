'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import IconStar from '@/assets/images/star.svg';
import ImageSuite3 from '@/assets/images/suite-3.png';
import { useRouter } from 'next/navigation';

interface CardProps {
  title: string;
  rating: number;
  router?: ReturnType<typeof useRouter>;
}

export default function Card({ title, rating, router }: CardProps) {
  const nextRouter = router || useRouter();

  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-white-primary text-2xl font-bold">{title}</h1>

      <div className="relative w-full rounded">
        <div className="z-[1] absolute top-[-15px] right-0 flex flex-row gap-2">
          {Array.from({ length: rating }).map((_, index) => (
            <Image key={index} src={IconStar} alt="Estrela" width={30} />
          ))}
        </div>
        <Image src={ImageSuite3} alt="Foto da suíte" className="w-full" />
      </div>

      <div className="flex w-full px-8">
        <Button
          label="Reservar"
          onClick={() => {
            nextRouter.push('/login');
          }}
        />
      </div>
    </div>
  );
}
