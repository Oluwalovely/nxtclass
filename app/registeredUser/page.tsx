import { getAllUsers } from "../actions/user.actions"

export default async function UsersPage() {
    const users = await getAllUsers()

    return (
        <div>
            {users.map((user) => (
                <div key={user._id} className="border border-gray-300 w-1/5 rounded-2xl p-3 flex gap-3 /basis-1/2 hover:shadow">
                    <div >
                        <p>{user.firstname}</p>
                        <p>{user.lastname}</p>
                        <code>{user.email}</code>
                    </div>
                </div>
            ))}
        </div>
    )
}





