function SearchInput({ className, placeholder }) {
    return (
        <>
            <select className={`px-5 py-2 ${className} rounded-lg outline-none`}>
                <option >{placeholder}</option>
                <option value="">Options...</option>
            </select>
        </>
    )
}

export default SearchInput