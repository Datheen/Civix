function Header() {
  return (
    <header className="flex h-23 bg-[#1D2129] w-full mx-auto max-w-460 items-center justify-around">
      <div>
        <img
          className="w-35 hover:cursor-pointer"
          src="/img/logo.webp"
          alt="CIVIX"
        />
      </div>

      <nav id="nav" className="h-23 items-center justify-center w-169 text-white/80 font-medium flex gap-10">
        <a className="hover:text-[#d0af6c] hover:cursor-pointer transtion-all duration-500">
          Home
        </a>
        <a className="hover:text-[#d0af6c] hover:cursor-pointer transtion-all duration-500">
          Sobre
        </a>
        <a className="hover:text-[#d0af6c] hover:cursor-pointer transtion-all duration-500">
          Serviços
        </a>
        <a className="hover:text-[#d0af6c] hover:cursor-pointer transtion-all duration-500">
          Blog
        </a>
        <a className="hover:text-[#d0af6c] hover:cursor-pointer transtion-all duration-500">
          Atendimento
        </a>
      </nav>

      <div
        id="botao-contato"
        className="flex opacity-80 text-white w-41.75 h-12.5  bg-[linear-gradient(to_right,#ffff_0%,#ffff_42%,#d0af6c_42%,#d0af6c_100%)] justify-center items-center gap-10 hover:cursor-pointer hover:opacity-100 active:invert-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#d0af6c"
        >
          <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
        </svg>
        <p>Contato</p>
      </div>
    </header>
  );
}

export default Header;
