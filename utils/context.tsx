'use client'

import { RecoilRoot } from "recoil"

export const Context = ({ children }: { children: Readonly<React.ReactNode> }) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}