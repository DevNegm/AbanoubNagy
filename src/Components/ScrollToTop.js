import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';

function ScrollToTop() {
    const [isVisable, setIsVisable] = useState(false)

    const toggleVisability = () => {
        if (window.pageYOffset > 300) {
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisability);
        return () => {
            window.removeEventListener('scroll', toggleVisability)
        }
    }, [])
  return (
    <div className="scrollTop">
            <button type="button" onClick={ScrollToTop} className={isVisable ? "scrollBtn" : "scrollBtnNone"}>
                <AiOutlineArrowUp  aria-hidden='true' />
            </button>
        </div>
  )
}

export default ScrollToTop