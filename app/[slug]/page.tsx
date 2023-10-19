export default function Segment({params}:any){
    const slug = params.slug

    return(
        <div>
            {slug === 'ssr' && <Ssr />}
            {slug === 'csr' && <Csr />}
            {slug === 'isr' && <Isr />}
        </div>
    )
}

const Ssr = () => {
    return(
        <>
            <h1>Ssr</h1>
        </>
    )
}
const Csr = () => {
    return(
        <>
            <h1>Csr</h1>
        </>
    )
}
const Isr = () => {
    return(
        <>
            <h1>Isr</h1>
        </>
    )
}