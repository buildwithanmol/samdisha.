'use client'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

const AdminLogout = () => {
    const router = useRouter();
    return (
        <button onClick={() => {
            Cookie.remove('x-admin-token')
            router.refresh();
            router.replace('/admin/signin')
        }}>
            Logout
        </button>
    )
}

export default AdminLogout