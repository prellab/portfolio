import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Kevin Lee | Personal Portfolio - ${pageTitle}`;
  }, [pageTitle]);
};
