import { useEffect } from "react"

const DefaultTitle = "Nthity";
export const usePageTitle = (title: string) => {
    useEffect(() => {
        document.title = title ?? DefaultTitle;
        return () => {
            document.title = DefaultTitle;
        }
    }, [title]);
}