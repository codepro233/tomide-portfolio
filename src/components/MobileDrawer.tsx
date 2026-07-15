// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// interface Props {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// }

// export default function MobileDrawer({
//   open,
//   setOpen,
// }: Props) {
//   const links = [
//     "About",
//     "Skills",
//     "Projects",
//     "Blog",
//     "Contact",
//   ];

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           {/* Overlay */}
//           <motion.div
//             className="
//             fixed inset-0
//             bg-black/60
//             backdrop-blur-sm
//             z-40
//             "
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setOpen(false)}
//           />

//           {/* Drawer */}
//           <motion.div
//             className="
//             fixed
//             top-0
//             right-0
//             h-screen
//             w-[280px]
//             bg-black/80
//             backdrop-blur-2xl
//             border-l
//             border-cyan-500/20
//             z-50
//             p-8
//             "
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{
//               duration: 0.4,
//               ease: "easeInOut",
//             }}
//           >
//             {/* Close button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="
//               text-3xl
//               text-white
//               absolute
//               top-6
//               right-6
//               "
//             >
//               ×
//             </button>

//             <div className="mt-20 flex flex-col gap-7">
//               {links.map((link) => (
//                 <Link
//                   key={link}
//                   href={`#${link.toLowerCase()}`}
//                   className="
//                   text-xl
//                   text-white
//                   hover:text-cyan-400
//                   transition
//                   "
//                   onClick={() => setOpen(false)}
//                 >
//                   {link}
//                 </Link>
//               ))}

//               {/* Theme Toggle */}
//               <button
//                 className="
//                 mt-4
//                 px-5
//                 py-3
//                 rounded-full
//                 bg-cyan-500/20
//                 border
//                 border-cyan-400/30
//                 text-cyan-300
//                 hover:bg-cyan-500/30
//                 transition
//                 "
//               >
//                 Theme Toggle
//               </button>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }