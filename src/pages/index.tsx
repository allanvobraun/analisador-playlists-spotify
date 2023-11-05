import { SpotifyLoginBtn } from "@/components/spotify-login-btn";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-start p-10">
      <h1 className={`font-pacifico text-7xl `}>Spotify Vinil</h1>
      <div id="content" className="flex h-full flex-col justify-center">
        <SpotifyLoginBtn></SpotifyLoginBtn>
      </div>
    </div>
  );
}
