export default function ResumeButton() {
  return (
    <a
      href="/Oluwatomide Abere Resume.pdf"
      download
      className="
      inline-flex
      items-center
      justify-center
      px-10
      py-4
      rounded-2xl
      bg-cyan-500
      text-black
      font-semibold
      hover:bg-cyan-400
      transition-all
      duration-300
      shadow-lg
      shadow-cyan-500/30
      "
    >
      Download Resume
    </a>
  );
}