import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing:border-box;
        background-color:${(props) => props.theme.white};
        overflow-x:hidden
    }
    
`;

export default Global;