import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-5 right-7 p-3 bg-slate-900 rounded-full ${
          visible ? "inline" : "opacity-0"
        } `}
        onClick={() => {
            toggleVisible()
          window.scrollTo({top: 0, behavior: 'smooth'});
   
        }}
      >
        <IoIosArrowUp size={20} className="text-cyan-500" />
      </div>
    </>
  );
};

export default ScrollButton;
