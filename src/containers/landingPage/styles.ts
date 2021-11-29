import styled from "styled-components";

interface StyleProps {
    img?: string;
}

export const LandingWrapper = styled.section`
    /* width: 1280px; */
    margin: 0 auto;
    `
export const LandingTop = styled.div`
    width: 100%;
    background-color: rgba(0,0,0,0.6);
    height: 400px;
    position: relative;
    > div {
        display: flex;
        flex-direction: column;
        > i {
            position: absolute;
            top: -75px;
            left: -81px;
        }
        > p {
            font-family: 'BM Kirang Haerang';
            font-size: 40px;
            line-height: 44px;
            color: #ffffff;
            position: absolute;
            bottom: 135px;
            left: 66px;
        }
    }
`
export const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid #ffffff;
    position: absolute;
    bottom: 60px;
`
export const LaindingMain = styled.div`
    background-image: url(${(props: StyleProps) => props.img});
    width: 100%;
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
`
export const LoginBox = styled.div`
    width: 350px;
    height: 250px;
    background-color: #ffffff;
    border: 1px solid #707070;
    border-radius: 10px;
    margin: 85px 65px 0 auto;
    > p {
        margin: 50px auto 0 auto;
        font-family: 'BM Kirang Haerang';
        font-size: 23px;
        line-height: 25px;
        color: #707070;
        width: 222px;
        text-align: center;
    }
`
export const LoginBtn = styled.div`
    width: 303px;
    height: 88px;
    background-color: #B1A18F;
    border: 1px solid #707070;
    color: #ffffff;
    margin: 47px auto 0 auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: 'BM Kirang Haerang';
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
`