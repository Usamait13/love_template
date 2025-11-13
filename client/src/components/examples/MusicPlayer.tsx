import MusicPlayer from "../MusicPlayer";

export default function MusicPlayerExample() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
      <p className="text-center text-muted-foreground">
        Music player appears in the bottom-right corner
      </p>
      <MusicPlayer />
    </div>
  );
}
