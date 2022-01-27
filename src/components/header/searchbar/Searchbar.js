

const Searchbar = () => {
    return ( 
        <div className="">
            <div class=" container w-full relative flex h-10">
                <span class="absolute m-2 text-lg text-gray-200">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text" class="w-full border border-primary border-r-0 pl-12 py-3 rounded-l-md focus:outline-none" placeholder="Buscar"/>
                <button class="bg-gray-400 border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Buscar</button>
            </div>
        </div>
     );
}
 
export default Searchbar;