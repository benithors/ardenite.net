import React from "react";

function getBrowserVisibilityProp() {
  if (typeof document.hidden !== "undefined") {
    // Opera 12.10 and Firefox 18 and later support
    return "visibilitychange";

    // @ts-ignore
  } else if (typeof document.msHidden !== "undefined") {
    return "msvisibilitychange";

    // @ts-ignore
  } else if (typeof document.webkitHidden !== "undefined") {
    return "webkitvisibilitychange";
  }
}

function getBrowserDocumentHiddenProp() {
  if (typeof document.hidden !== "undefined") {
    return "hidden";

    // @ts-ignore
  } else if (typeof document.msHidden !== "undefined") {
    return "msHidden";

    // @ts-ignore
  } else if (typeof document.webkitHidden !== "undefined") {
    return "webkitHidden";
  }
}

function getIsDocumentHidden() {
  if (typeof window !== "undefined") {
    // @ts-ignore
    return !document[getBrowserDocumentHiddenProp()];
  } else {
    return false;
  }
}
export function usePageVisibility() {
  const [isVisible, setIsVisible] = React.useState(getIsDocumentHidden());
  const onVisibilityChange = () => setIsVisible(getIsDocumentHidden());

  React.useEffect(() => {
    const visibilityChange = getBrowserVisibilityProp();

    // @ts-ignore
    document.addEventListener(visibilityChange, onVisibilityChange, false);
    return () => {
      // @ts-ignore
      document.removeEventListener(visibilityChange, onVisibilityChange);
    };
  });

  return isVisible;
}
