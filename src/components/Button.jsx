import "./Button.css"
function Button ({name}) {
    return (
        <>
        <button className="bg-blue-400 px-4 py-2 text-white font-semibold rounded-sm">{name}</button>
        </>
    )
}
export default Button