import styled, {keyframes} from "styled-components"

const ImageLoader = () => {
    return (
        <Body>
            <Shimmer/>
            
        </Body>
    )
}


const Body = styled.div`
background: #ddd;
width:100%;
height: 100%;
position: relative;
overflow: hidden;
`

const ShimmerLoader = keyframes`
0%{
    transform:translateX(-150%);
}
50%{
    transform:translateX(-60%);
}
100%{
    transform:translateX(150%);
}
`

const Shimmer = styled.div`
position: absolute;
background: rgba(255,255,255,0.8);

top: 0;
left: 0;
width: 40%;
height: 100%;
transform: skewX(-20deg);
animation: ${ShimmerLoader} 0.3s infinite;
`


export default ImageLoader
