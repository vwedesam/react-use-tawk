import { useEffect } from "react";

const reactUseTawk = (url, parent = 'script') => {

    const Tawk_API = {}, Tawk_LoadStart = new Date();

    useEffect(() => {

        if (url) {
            let s1 = document.createElement("script"),
                s0 = document.getElementsByTagName(parent)[0];
            s1.async = true;
            s1.src = url;
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        }

    }, [url, parent]);

    return null;

};

export default reactUseTawk;
