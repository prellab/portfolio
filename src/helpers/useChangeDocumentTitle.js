import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Chris Johnson | Personal Portfolio - ${pageTitle}`;
  }, [pageTitle]);
};
