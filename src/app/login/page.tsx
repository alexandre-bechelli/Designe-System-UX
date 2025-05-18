'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import Logo from '@/assets/images/logo.svg'
import LogoApple from '@/assets/images/logo_apple.svg'
import LogoFacebook from '@/assets/images/logo_facebook.svg'
import LogoGoogle from '@/assets/images/logo_google.svg'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function Page() {

    const router = useRouter()

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    return(

        <>
            <div className="flex flex-col gap-10">
                <Section id="logo">
                    <div className="flex flex-row justify-center w-full">
                        <Image
                            src={Logo}
                            alt="Motel"
                            width={200}
                        />
                    </div>
                </Section>

                <Section id="form">
                    <div className='flex flex-col gap-4'>
                        <Input
                            type="text"
                            placeholder="Login"
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                        />

                        <Input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />

                        <div className="flex flex-row justify-end w-full">
                            <a href="#" className="text-[12px] text-white-primary cursor-pointer hover:underline">Esqueci minha senha</a>
                        </div>
                    </div>
                </Section>

                <Section id="actions">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row justify-end w-full border-t border-white pt-2">
                            <a href="#" className="text-[16px] text-white-primary hover:underline">Registre-se</a>
                        </div>

                        <Button
                            label="Entrar"
                            onClick={() => {
                                router.push('/home')
                            }}
                        />
                    </div>
                </Section>

                <Section id="social">
                    <div className='flex flex-row justify-end gap-2 w-full'>
                    <Image
                            src={LogoApple}
                            alt="Apple"
                            height={30}
                        />
                    <Image
                            src={LogoFacebook}
                            alt="Facebook"
                            height={30}
                        />
                    <Image
                            src={LogoGoogle}
                            alt="Google"
                            height={30}
                        />
                    </div>
                </Section>

                <Section id="copyright">
                    <div className="flex flex-col items-center gap-2">
                        <a href="#" className="text-[16px] text-white-primary cursor-pointer hover:underline">Termos de Uso</a>

                        <p className="text-white-primary text-center text-[10px] cursor-pointer">℗ Copyright 2024-{new Date().getFullYear()} 8AOJR S.A</p>
                    </div>
                </Section>
            </div>
        </>


    )

}