import FloatingHearts from "../FloatingHearts";

export default function FloatingHeartsExample() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <FloatingHearts count={20} size="md" speed="medium" />
    </div>
  );
}
