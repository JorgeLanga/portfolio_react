import { Menu } from "lucide-react";


export const Header=()=>{

    return(
        <header className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="flex fixed bg-header w-full px-3 md:px-20 py-8">
            <div >
            <span className="text-white font-bold text-3xl ">JORGE</span>
          </div>

          <div className="flex justify-end flex-1 md:hidden text-white">

            <Menu />
          </div>

          <div className="items-end flex-1 text-white font-bold hidden md:flex ">
            <nav className="flex-1">
                <ul className="flex justify-end flex-1">
                    <li className="px-4"><a href="#">Sobre-mim</a></li>
                    <li className="px-4"><a href="#">Tecnologias</a></li>
                    <li className="px-4"><a href="#">Projectos</a></li>
                    <li className="px-4"><a href="#">Contacto</a></li>
                </ul>
            </nav>
          </div>
        </div>
      </header>
    )
}