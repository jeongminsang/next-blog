"use client";

import { RefObject, useEffect, useRef, useState } from "react";

// interface ObserverProps {
//   ref: boolean;
//   target?: Element | RefObject<Element> | any;
//   root?: Element | null;
//   rootMargin?: string;
//   threshold?: number | number[];
// }

// export const useObserver = ({
//   target,
//   root = null,
//   rootMargin = "0px",
//   threshold = 1.0,
// }: ObserverProps) => {
//   // const containerRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const callbackFunction = (entries: any) => {
//     const [entry] = entries;
//     setIsVisible(entry.isIntersecting);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(callbackFunction, {
//       root,
//       rootMargin,
//       threshold,
//     });
//     if (target.current) observer.observe(target.current);

//     return () => {
//       if (target.current) observer.unobserve(target.current);
//     };
//   }, [target, root, rootMargin, threshold]);
//   return isVisible;
// };

// export const useObserver = () => {
//   const observerRef = useRef<any>(null);

//   useEffect(() => {
//     const updateIndicator = (entries: any[], observer: any) => {
//       const indicator: any = document.querySelector(".indicator");

//       entries.forEach(
//         (entry: {
//           target: { id: string };
//           isIntersecting: boolean | undefined;
//         }) => {
//           if (entry.target.id) {
//             const el = indicator.querySelector(`${entry.target.id}`);
//             el && el.classList.toggle("on", entry.isIntersecting);
//             console.log("tlqkf");
//           }
//         }
//       );
//     };

//     observerRef.current = new IntersectionObserver(updateIndicator);

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, []);

//   return (elementRef: any) => {
//     if (observerRef.current && elementRef) {
//       observerRef.current.observe(elementRef);
//     }
//   };
// };

// export const useObserver = (options?: IntersectionObserverInit) => {
//   const targetRef = useRef<any>(null);
//   const indicator: any = document.querySelector(".indicator");
//   useEffect(() => {
//     if (!targetRef.current) return;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         console.log(entry.target);
//       });
//     }, options);

//     observer.observe(targetRef.current);
//   }, [options]);

//   return targetRef;
// };

export const useIntersectionObserver = (
  targetRef: any,
  onIntersect: any,
  options: any = {}
) => {
  const observer = useRef<any>(null);

  useEffect(() => {
    const target = targetRef.current;

    if (!target) {
      return;
    }

    const handleIntersect = (
      entries: any[],
      observer: { unobserve: (arg0: any) => void }
    ) => {
      entries.forEach((entry: { target: any }) => {
        console.log(entry.target.id);
        const name2Element = entry.target.querySelector("#뭘-만들까");
        if (name2Element) {
          console.log(name2Element.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);
    observer.current.observe(target);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef, onIntersect, options]);

  return observer.current;
};
