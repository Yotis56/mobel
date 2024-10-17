import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from './styles.module.css'

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
}
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const ImageSlider = ({ images, setViewModal = null}) => {
    const [[page, direction], setPage] = useState([0, 0])
    const imageIndex = wrap(0, images.length, page)
    const paginate = (newDirection) => {
        setPage( p => [p[0] + newDirection, newDirection]);
    }

    useEffect( () => {
      const handleKeyDown = e => {
        if (e.key === 'ArrowRight') {
          paginate(1)
        }
        if (e.key === 'ArrowLeft') {
         paginate(-1)
        } else if (e.key === 'Escape') {
          setViewModal(false)
        }
      }
      document.addEventListener('keydown', handleKeyDown)

      return () => {document.removeEventListener('keydown', handleKeyDown)}
    }, [])


    return (
        <div className={styles.container}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 150, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
    
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
          <div className={styles.next} onClick={() => paginate(1)}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
          <div className={styles.prev} onClick={() => paginate(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          {
            setViewModal && 
            <div className={styles.close} onClick={() => setViewModal(false)}>
              <span className="material-symbols-outlined">close</span>
            </div>

          }
        </div>
      )
}