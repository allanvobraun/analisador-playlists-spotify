import { signIn } from "next-auth/react";
import Image from "next/image";

export function SpotifyLoginBtn() {
  return (
    <button
      onClick={() => {
        signIn("spotify");
      }}
      className="focus:shadow-outline mt-4 flex h-14 w-full items-center justify-center 
      rounded-lg border-2 border-black bg-white px-4 text-xl font-semibold text-black
      transition-colors duration-300 hover:bg-slate-200"
    >
      <Image
        src="./spotify.svg"
        alt="Spotify logo"
        width={30}
        height={30}
      ></Image>
      <span className="ml-4">Entre com spotify</span>
    </button>
  );
}
