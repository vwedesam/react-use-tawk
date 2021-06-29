
# React Use Tawk

react integration for tawk.to

Tawk.to is a Web Chat platform that allows site users to communicate instantly with your business. 

## Installation

```js
    /~$ npm install react-use-tawk
```

## Usage

> **react-use-tawk** should be used outside **react hooks**

> this also works for **Next.js**

```js

    import React from "react";
    import reactUseTawk from "react-use-tawk";

    const tawk_url = process.env.TAWK_URL;

    function App({props}) {

        reactUseTawk(tawk_url);

        return (
            <div>
            // code goes here
            </div>
        );

    }

```


