import Image from "next/image";

export default function ProfileCard() {
  return (
    <div
      className="
      bg-white/10
      border
      border-white/20
      backdrop-blur-xl
      rounded-3xl
      p-8
      
      text-center
      "
    >
      <Image
        src="/myimage.jpeg"
        alt="Profile"
        width={250}
        height={250}
        className="
        rounded-full
        mx-auto
        border-4
        border-cyan-400
        "
      />

      <h2 className="text-3xl font-bold mt-8">
        Abere Oluwatomide
      </h2>

      <p className="text-gray-400 mt-4">
        Full Stack Developer & AI Enthusiast
      </p>
      <p className="text-gray-400 mt-6">
  Passionate about creating modern web
  applications, AI solutions, and interactive
  digital experiences.
</p>
    </div>
  );
}