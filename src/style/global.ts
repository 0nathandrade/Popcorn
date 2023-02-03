import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }
    
    body {
        background: #111;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }
    
    button {
        cursor: pointer;
    }
    
    :focus {
        outline: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    body, input, textarea, button {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`