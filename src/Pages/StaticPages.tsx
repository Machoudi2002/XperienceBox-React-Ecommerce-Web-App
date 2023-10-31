import {useEffect, useState} from "react";

interface markdown {
    fileName: string
}

const StaticPages = (props : markdown) => {
    const [page, setPage] = useState('');

    useEffect(() => {
        fetch(`../Markdown/${props.fileName}.md`)
          .then((response) => response.text())
          .then((text) => setPage(text))
          .catch((err) => console.log(err));
      }, [props.fileName]);

    return (
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: page }}></div>
        </div>
    );
}

export default StaticPages