import {MainContainer } from "./MainComponents";

export default function Main({children, ...restProps}) {
    return (
        <MainContainer restProps>
            {children}
        </MainContainer>
    )
}