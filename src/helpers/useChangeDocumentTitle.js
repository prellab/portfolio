import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Larry Wayne Hayes | Personal Portfolio - ${pageTitle}`;
  }, [pageTitle]);
};
