import { useEffect, useState } from "react";
import Markdown from 'react-markdown'




const StaticPages = (props : {pageLink : string}) => {
    const [page, setPage] = useState("")

    const fetchMarkdown = (Link : string) => {

        fetch(Link)
        .then((response) => response.text())
        .then((result) => {
          setPage(result);
        })
        .catch((error) => {
          console.error('Error fetching and rendering Markdown:', error);
        });
    }

    useEffect(() => {
        if (props.pageLink === "PrivacyPolicy") {
            fetchMarkdown("https://raw.githubusercontent.com/Machoudi2002/XperienceBox-React-Ecommerce-Web-App/main/src/Markdown/PrivacyPolicy.md")
        } if (props.pageLink === "TermsOfService") {
            fetchMarkdown("https://raw.githubusercontent.com/Machoudi2002/XperienceBox-React-Ecommerce-Web-App/main/src/Markdown/TermsConditions.md")
        } else {
            fetchMarkdown("https://raw.githubusercontent.com/Machoudi2002/XperienceBox-React-Ecommerce-Web-App/main/src/Markdown/ReturnPolicy.md")
        }

      }, [props.pageLink]);
  return (
    <>
        <div className="container markdownStyles">
            <Markdown>{page}</Markdown>
        </div>
    </>
  )
}

export default StaticPages