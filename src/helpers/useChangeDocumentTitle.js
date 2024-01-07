import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Brazos Kylene Hamilton | Personal Portfolio - ${pageTitle}`;
  }, [pageTitle]);
};
