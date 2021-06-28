import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//this will scroll to the top everytime the route switches


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;