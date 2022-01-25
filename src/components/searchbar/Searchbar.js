

const Searchbar = () => {
    return ( 
        <>
            <div class="w-full max-w-xl relative flex">
                <span class="absolute left-4 top-3 text-lg text-gray-200">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text" class="w-full border border-primary border-r-0 pl-12 py-3 rounded-l-md focus:outline-none" placeholder="Buscar"/>
                <button class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Buscar</button>
            </div>
        </>
     );
}
 
export default Searchbar;