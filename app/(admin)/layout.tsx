import { Context } from '@/utils/context'
import React from 'react'

const AdminLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
    return (
        <main>
            <Context>
                {children}
            </Context>
        </main>
    )
}

export default AdminLayout