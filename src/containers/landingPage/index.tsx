import React from 'react'
import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
import BackGround from '../../assets/images/landing/background.svg'
function Landing() {
    return (
        <S.LandingWrapper>
            <S.LandingTop>
                <div>
                    <i><img src={Logo} alt="" /></i>
                    <p>정윤이의 다이어리</p>
                </div>
                <S.Line />
            </S.LandingTop>
            <S.LaindingMain img={BackGround}>
                <S.LoginBox>
                    <p>더 많은 서비스를 이용하시려면 로그인이 필요합니다</p>
                    <S.LoginBtn>로그인 / 회원가입 바로가기</S.LoginBtn>
                </S.LoginBox>
            </S.LaindingMain>
        </S.LandingWrapper>
    )
}
export default Landing