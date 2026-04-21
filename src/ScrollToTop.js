import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToTop = () => {
  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathnamew])
  return null;  
}