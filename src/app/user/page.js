"use client"
import Link from 'next/link';
import {useRouter} from 'next/navigation';
const User = () => {
    const router = useRouter();
    const userList = [
        {id:1,name:'Jaidev'},
        {id:2,name:'Peter'},
        {id:3,name:'Parker'},
        {id:4,name:'Vivek'}
    ]
    return (
        <>
        <h1 className='heading'>User List</h1>
        <ul>
            {
                userList.map((item)=>{
                    return <li>
                        <Link href={'/user/'+item.id}>{item.name}</Link>
                    </li>
                })
            }
        </ul>
        <button onClick={()=>router.push("/")}>Go to Home</button>
        </>
    )
}

export default User;