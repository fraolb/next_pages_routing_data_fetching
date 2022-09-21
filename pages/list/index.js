import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { names: data}
    }
}
const List = ({names}) => {

    return ( 
        <div>
            <h1>Lists</h1>  
                {names.map(name=>(
                    <Link href={'/list/' + name.id}key={name.id}>
                        <a>
                             <h2>{name.name}</h2>
                        </a>
                    </Link>
                ))}
        </div>
    );
}
 
export default List;