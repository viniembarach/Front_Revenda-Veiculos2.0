export default function titulo(props: any){
    return(
        <div className={`flex flex-col justify-center`}>
            <h1 className="px-5 py-2 text-2xl">{props.children}</h1>
            <hr className="border-2 border-indigo-400"/>
        </div>

    )
}