export default function Segment({params}:any){
    const slug = params.slug

    return(
        <div>
            {slug === 'csr' && <Csr />}
            {slug === 'isr' && <Isr />}
        </div>
    )
}

const Csr = () => {
    return(
        <>
            <h1>Csr</h1>
            <h5 className="text-blue-500 text-center">Client Side Rendering</h5>

        </>
    )
}
const Isr = () => {
    return(
        <>
            <h1>Isr</h1>
            <h5 className="text-blue-500 text-center">Incremental Static Regeneration</h5>

        </>
    )
}
