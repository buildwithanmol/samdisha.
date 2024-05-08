import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AdminPage = () => {
    return (
        cookies().get('x-admin-token')?.value ? redirect('/admin/panel') : redirect('/admin/signin')
    )
}

export default AdminPage