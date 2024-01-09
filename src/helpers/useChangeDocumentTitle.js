import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Kenji Saito | Personal Portfolio - ${pageTitle}`;
  }, [pageTitle]);
};
