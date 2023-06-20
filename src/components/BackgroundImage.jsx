import React, {  useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { ThemeProvider, css} from '@emotion/react';

const BackgroundImage = ({theme}) => {
    const location = useLocation();
    
    //background style based on if router location changes
    const backgroundStyle = useMemo(() => {
        //determine the current page and remove the /
        const page = location.pathname.replace('/','');

        //get the theme esignated by pathname above
        const pageTheme = theme[page];
    
        //if the theme exists
        if (pageTheme) {
            console.log("theme found");
            //return the css to change the background image
            return css({ backgroundImage: pageTheme.backgroundImage });
        }
        //default background image
        return css({ backgroundImage: 'url("../images/paint.jpg'})
    },[location]);

    return (
         <div css=
        {css`
            ${backgroundStyle}
            background-size: cover;
            background-repeat: no-repeat;
`        }/>
    )
}

export default BackgroundImage;