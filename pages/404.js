import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },5000)
    },[])

    return ( 
        <div>
            <h1>Oooops...</h1>
            <h2>The page can not be rendered.</h2>
            <p>Go back to home <Link href="/"><a>Home page</a></Link></p>
        </div>
     );
}
 
export default NotFound;