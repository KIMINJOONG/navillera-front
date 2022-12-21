import Image from "next/image";
import styled from "styled-components";
import { color, media } from "styles/theme";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import moment, { min } from 'moment'


const MainSectionBottom = styled.section`
  height: 394px;
  background-image: url('images/main_bottom_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 67%;

  ${media.mobile} {
    height: 494px;
    background-position: 60%;

  }
`;

interface INews {
    title: string
    created_at: Date
}

interface IHistoryTitle {
    title: string
    histories: Array<IHistory>
}

interface IHistory {
    content: string
}

interface IHomeData {
    news: Array<INews>
    histories: Array<IHistoryTitle>
}

interface IProps {
    data: IHomeData | undefined
}

const Container = styled.div`
display: flex;
flex-direction: column;
padding-top:60px;
background-color: white;
`;

const TopSection = styled.section`
background-color: #F8F8F8;
height: 699px;
`;

const TopSectionContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    position: relative;

    ${media.mobile} {
        max-width: 576px;
        overflow: hidden;
    }
`;

const HRContainer = styled.div`
    z-index: 1;

    ${media.mobile} {
        padding-left: 28px;
    }
`;

const HR = styled.hr`
    left: ${(props: { left: string, borderColor: string }) => props.left};
    height: calc(100% - 4px);
    border: 0.5px solid ${(props) => props.borderColor};
    position: absolute;

    ${media.mobile} {
        display: none;
    }
`;

const TopSectionContentContainer = styled.div`
    padding-top: 160px;
    z-index: 2;
    position: relative;
    

    ${media.mobile} {
        padding-top: 48px;
        padding-left: 28px;
    }


`;

const TopSectionContentTitle = styled.p`
    font-size: 50px;
    font-weight: 600;

    ${media.mobile} {
        font-size: 32px;
    }
`;

const TopSectionContentDescriptionContainer = styled.div`
    margin-top: 28px;
`;

const TopSectionContentDescription = styled.p`
    font-size: 18px;
    font-weight: 300;

    ${media.mobile} {
        font-size: 15px;
    }
`;

const MainTextContainer = styled.div`
    position: absolute;
    top: -60px;
    right: 0px;
    margin-right: 104px;

    ${media.mobile} {
        top: -80px;
        right: -110px;
        margin-right: 0px;

    }
`;

const MainTextImage = styled(Image)`
    width: 254px;
    height: 259px;

    ${media.mobile} {
        width: 205px;
        height: 209px;
    }
`;

const MainImageContainer = styled.div`
    margin-top: 66px; 
    z-index: 2; 
    position: relative;

    ${media.mobile} {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

const MainImage = styled(Image)`
    width: 1100px; 
    height: 438px;

    ${media.mobile} {
        width: 100%;
        height: 387px;
    }
`;

const MainBannerContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;

    ${media.mobile} {
        display: none;
    }
`;

const MainBanner = styled.div`
    padding: 36px 13px 121px 14px;
    background-color: ${color.brand};
`;

const MainBannerText = styled.span`
    text-orientation: sideways;
    writing-mode: vertical-lr;
    letter-spacing: 15px;
`;

const NewsSection = styled.section`
    height: 679px;

    ${media.mobile} {
        height: 914px;
    }
    
`;

const NewsSectionContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 0;

    ${media.mobile} {
        max-width: 375px;
        flex-direction: column;
    }
`;

const NewsImageContainer = styled.div`
    margin-top: 288px;
    z-index: 2;
    position: relative;

    ${media.mobile} {
        order: 2;
        margin-top: 65px;
    }
`;

const NewsImage = styled(Image)`
    width: 367px;
    height: 477px;

    ${media.mobile} {
        margin-top: 65px;
        width: 256px;
        height: 333px;
    }
`;

const NewsContentContainer = styled.div`
    margin-left: 92px;
    margin-top: 304px;
    flex: 1;
    position: relative;
    z-index: 2;

    ${media.mobile} {
        margin-top: 71px;
        margin-left: 0px;
        padding: 0px 16px 0px 15px;
        order: 1;
    }
`;

const NewsBadgeTextContainer = styled.div`
    position: relative;
    ${media.mobile} {
        padding-left: 16px;
    }

`;

const TextBadge = styled.i`
    position: absolute;
    top: -5px;
    left: -15px;
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background-color: ${color.brand};

    ${media.mobile} {
        left: 0px;
    }
`;

const NewsText = styled.span`
    font-size: 50px;
    z-index: 1;
    position: relative;

    ${media.mobile} {
        font-size: 32px;
    }
`;

const NewsContentUl = styled.ul`
    margin-top: 33px;
    z-index: 2;
    position: relative;
`;

const NewsContentLi = styled.li`
    display: flex;
    flex-direction: row;
    padding-top: ${(props: { index: number }) => props.index === 0 ? 0 : 15}px;
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-color: black;
    border-bottom-style: solid;

    ${media.mobile} {
        flex-direction: column;
    }
`;

const NewsContentTitle = styled.p`
    flex: 1;
    font-size: 15px;
    font-weight: 300;
    color: ${color.N50};

    ${media.mobile} {
        font-size: 14px;
        font-weight: 400;

    }
`;

const NewsContentDate = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${color.N50};

    ${media.mobile} {
        margin-top: 8px;
        font-size: 12px;
        font-weight: 300;

    }
`;

const VisionSection = styled.section`
    background-color: ${color.N40};
`;

const VisionContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    position: relative;
    height: 1152px;

    ${media.mobile} {
        max-width: 576px;
        height: 1085px;
    }
`;

const MissionCardContainer = styled.div`
    ${media.mobile} {
        display: flex;
        justify-content: ${(props: { justifyContent: string }) => props.justifyContent};
    }
`;

const MissionCard = styled.div`
    position: absolute;
    top: 132px;
    right: 52px;
    background-color: #FDFDFD;
    padding: 33px 0px 60px 33px;
    
    ${media.mobile} {
        position: initial;
        top: 0px;
        left: 0px;
        padding: 37px 0px 25px 29px;
        order: 2;
    }
`;

const VisionCard = styled.div`
    position: absolute;
    top: 313px;
    left: 370px;
    background-color: #FDFDFD;
    padding: 33px 0px 60px 33px;

    ${media.mobile} {
        margin-top: 31px;
        position: initial;
        top: 0px;
        left: 0px;
        order: 1;
    }
`;

const ValueCard = styled.div`
    position: absolute;
    bottom: 146px;
    right: 67px;
    background-color: #FDFDFD;
    padding: 48px 0px 60px 33px;

    ${media.mobile} {
        margin-top: 31px;
        position: initial;
        bottom: 0px;
        right: 0px;
        order: 3;
    }
`;

const MissionCardImageContainer = styled.div`
    padding: 0px 103px 0px 0px;

    ${media.mobile} {
        padding: 0px 162px 0px 0px;
    }
`;
const VisionCardImageContainer = styled.div`
    padding: 0px 137px 0px 0px;

    ${media.mobile} {
        padding: 0px 180px 0px 0px;
    }
`;
const ValueCardImageContainer = styled.div`
    padding: 0px 136px 0px 0px;

    ${media.mobile} {
        padding: 0px 192px 0px 0px;
    }
`;

const MissionCardImage = styled(Image)`
    width: 139px;
    height: 91px;

    ${media.mobile} {
        width: 84px;
        height: 56px;
    }
`;

const VisionCardImage = styled(Image)`
    width: 104px;
    height: 98px;

    ${media.mobile} {
        width: 65px;
        height: 61px;
    }
`;

const ValueCardImage = styled(Image)`
    width: 91px;
    height: 89px;

    ${media.mobile} {
        width: 53px;
        height: 52px;
    }
`;

const CardContentContainer = styled.div`
    margin-top: 61px;

    ${media.mobile} {
        margin-top: 23px;
    }
`;

const CardContentTitle = styled.span`
    font-size: 25px;
    font-weight: 700;
    color: ${color.N60}

    ${media.mobile} {
        font-size: 20px;
    }
`;

const CardContentDescription = styled.p`
    margin-top: 20px;
    max-width: 211px;
    font-size: 16;
    font-weight: 300;
    color: ${color.N60};

    ${media.mobile} {
        margin-top: 14px;
        max-width: 204px;
        font-size: 14px;

    }

`;

const HistorySection = styled.section`
    background-color: ${color.N0};
    padding-top: 106px;
    padding-bottom: 40px;

    ${media.mobile} {
        padding-top: 71px;
        padding-bottom: 48px;
    }
`;

const HistoryContainer = styled.div`
    max-width: 1100px;
    margin: auto;
`;

const HistoryInnerContainer = styled.div`
    margin-left: 92px;
    flex: 1;
    position: relative;
    z-index: 0;

    ${media.mobile} {
        margin-left: 0px;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

const HisotryBadgeTextContainer = styled.div`
    position: relative;
    margin-bottom: 103px;

    ${media.mobile} {
        margin-bottom: 76px;
    }

`;

const HistoryText = styled.span`
    font-size: 50px;
    position: relative;
    font-weight: 500;

    ${media.mobile} {
        font-size: 32px;
    }
`;

const HistoryContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${(props: { index: number }) => props.index === 0 ? 0 : 103};
    border-top: 1px solid black;
    padding: 30px 0px 30px 0px;

    ${media.mobile} {
        flex-direction: column;
    }

`;

const HisotryContentTitleContainer = styled.div`
    padding-left: 91px;
    ${media.mobile} {
        padding-left: 29px;
    }

`;


const HisotryContentTitle = styled.span`
    font-size: 35px;
    font-weight: 700;
`;

const HisotryContentDescriptionContainer = styled.div`
    margin-left: 182px;
    flex: 1;

    ${media.mobile} {
        margin-left: 0px;
        padding: 17px 15px 0px 32px;
    }

`;

const HisotryContentDescription = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: ${color.N50};
`;

const MainBottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: auto;
    padding: 76px 0px 68px 0px;

    ${media.mobile} {
        flex-direction: column;
        padding: 72px 0px 75px 14px;
    }
`;

const MainBottomTitle = styled.span`
    font-size: 45px;
    font-weight: 700;
    color: ${color.N60};

    ${media.mobile} {
        font-size: 32px;
    } 

`;

const MainBottomContentContainer = styled.div`
    margin-left: 92px;
    padding-top: 114px;
    display: flex;
    flex-direction: row;

    ${media.mobile} {
        margin-left: 0px;
        padding-top: 52px;
        flex-wrap: wrap;
    }
`;

const MainBottomDescriptionContainer = styled.div`
    width: 50%;
`;

const MainBottomDescriptionTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${color.N50};


`;

const MainBottomDescriptionContentContainer = styled.div`
    margin-top: 14px;
`;

const MainBottomDescriptionContent = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: ${color.N60};
`;



const Home = ({ data }: IProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <Header />
            <Container>
                <TopSection>
                    <TopSectionContainer >
                        <HRContainer style={{ zIndex: 1 }}>
                            <HR left={'0%'} borderColor={'#F0F0F0'} />
                            <HR left={'33.6%'} borderColor={'#F0F0F0'} />
                            <HR left={'70.2%'} borderColor={'#F0F0F0'} />
                            <HR left={'100%'} borderColor={'#F0F0F0'} />
                        </HRContainer>
                        <TopSectionContentContainer>
                            <div>
                                <TopSectionContentTitle>문화를 통해 공간을</TopSectionContentTitle>
                                <TopSectionContentTitle>재생하다.</TopSectionContentTitle>
                            </div>
                            <TopSectionContentDescriptionContainer>
                                <TopSectionContentDescription >지역 역사와 문화의 고유한 가치를 콘텐츠로 개발하여</TopSectionContentDescription>
                                <TopSectionContentDescription >지역사회의 가치를 상승시키고 시민들의 삶의 질을 높이고자 합니다.</TopSectionContentDescription>

                            </TopSectionContentDescriptionContainer>
                        </TopSectionContentContainer>

                        <MainImageContainer>
                            <MainImage src={require('../../assets/images/main.png')} alt={'main'} />
                        </MainImageContainer>
                        <MainTextContainer>
                            <MainTextImage className="img" src={require('../../assets/images/main_text.png')} alt={'main_text'} />
                        </MainTextContainer>

                        <MainBannerContainer>
                            <MainBanner style={{ padding: '36px 13px 121px 14px', backgroundColor: color.brand }}>
                                <MainBannerText style={{ textOrientation: 'sideways', writingMode: 'vertical-lr', letterSpacing: 15 }}>NABILERA</MainBannerText>
                            </MainBanner>
                        </MainBannerContainer>
                    </TopSectionContainer>

                </TopSection>
                <NewsSection>
                    <NewsSectionContainer>
                        <div style={{ zIndex: 1 }}>
                            <HR left={'0%'} borderColor={'#F0F0F0'} />
                            <HR left={'33.6%'} borderColor={'#F0F0F0'} />
                            <HR left={'70.2%'} borderColor={'#F0F0F0'} />
                            <HR left={'100%'} borderColor={'#F0F0F0'} />
                        </div>
                        <NewsImageContainer>
                            <NewsImage src={require('../../assets/images/main_news.png')} alt={'main'} />
                        </NewsImageContainer>
                        <NewsContentContainer>
                            <NewsBadgeTextContainer>
                                <TextBadge />
                                <NewsText>News</NewsText>
                            </NewsBadgeTextContainer>

                            <NewsContentUl>
                                {
                                    data?.news.map((item, index) => (
                                        <NewsContentLi key={index} index={index}>

                                            <NewsContentTitle>{item.title}</NewsContentTitle>
                                            <NewsContentDate>{moment(item.created_at).format('YYYY.MM.DD')}</NewsContentDate>
                                        </NewsContentLi>
                                    ))
                                }

                            </NewsContentUl>
                        </NewsContentContainer>
                    </NewsSectionContainer>

                </NewsSection>
                <VisionSection>
                    <VisionContainer style={{}}>
                        <div style={{ zIndex: 1 }}>
                            <HR left={'0%'} borderColor={'#625E5C'} />
                            <HR left={'33.6%'} borderColor={'#625E5C'} />
                            <HR left={'70.2%'} borderColor={'#625E5C'} />
                            <HR left={'100%'} borderColor={'#625E5C'} />
                        </div>
                        <MissionCardContainer justifyContent="flex-start">
                            <MissionCard>
                                <MissionCardImageContainer>
                                    <MissionCardImage src={require('../../assets/images/mission.png')} alt={'main'} />
                                </MissionCardImageContainer>
                                <CardContentContainer>
                                    <CardContentTitle>미션</CardContentTitle>
                                    <CardContentDescription>
                                        지역의 문화자원을 창의적 사고와 끝없는 도전을 통해 콘텐츠를 개발함으로써 지역의 문화를 바꾼다.
                                    </CardContentDescription>
                                </CardContentContainer>
                            </MissionCard>
                        </MissionCardContainer>




                        <MissionCardContainer justifyContent="flex-end">
                            <VisionCard>
                                <VisionCardImageContainer>
                                    <VisionCardImage src={require('../../assets/images/vision.png')} alt={'main'} />
                                </VisionCardImageContainer>
                                <CardContentContainer>
                                    <CardContentTitle>비전</CardContentTitle>
                                    <CardContentDescription>
                                        지역 역사와 문화를 통해 공간을 재생하여 국내 및 해외 관광객들에게 지역 문화 콘텐츠 제공
                                    </CardContentDescription>
                                </CardContentContainer>
                            </VisionCard>
                        </MissionCardContainer>



                        <MissionCardContainer justifyContent="flex-start">
                            <ValueCard>
                                <ValueCardImageContainer>
                                    <ValueCardImage src={require('../../assets/images/value.png')} alt={'main'} />
                                </ValueCardImageContainer>
                                <CardContentContainer>
                                    <CardContentTitle>가치</CardContentTitle>
                                    <CardContentDescription>
                                        #지역 #문화 #재생
                                    </CardContentDescription>
                                </CardContentContainer>
                            </ValueCard>
                        </MissionCardContainer>
                    </VisionContainer>
                </VisionSection>
                <HistorySection>
                    <HistoryContainer>
                        <HistoryInnerContainer>
                            <HisotryBadgeTextContainer>
                                <TextBadge />
                                <HistoryText>History</HistoryText>
                            </HisotryBadgeTextContainer>

                            {data?.histories.map((hi, key) =>
                                <HistoryContentContainer key={key} index={key}>
                                    <HisotryContentTitleContainer>
                                        <HisotryContentTitle>{hi.title}</HisotryContentTitle>
                                    </HisotryContentTitleContainer>
                                    <HisotryContentDescriptionContainer>
                                        <ul>
                                            {
                                                hi.histories.map((item, index) => (
                                                    <li key={index} style={{ marginTop: index === 0 ? 0 : 15, listStyle: 'initial', listStyleType: 'disc' }}>
                                                        <HisotryContentDescription>{item.content}</HisotryContentDescription>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </HisotryContentDescriptionContainer>
                                </HistoryContentContainer>
                            )}
                        </HistoryInnerContainer>
                    </HistoryContainer>
                </HistorySection>
                <MainSectionBottom>
                    <MainBottomContainer>
                        <div>
                            <MainBottomTitle>Contact us !</MainBottomTitle>
                        </div>
                        <MainBottomContentContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>Address</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>Hongseong. Korea</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>Email</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>nabilera2020@naver.com</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>Tel</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>041-406-8998</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>SNS</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>Instagram</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>Facebook</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>Blog</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>Youtube</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                        </MainBottomContentContainer>
                    </MainBottomContainer>

                </MainSectionBottom>
            </Container>
            <Footer />
        </div >
    );
};

export default Home;
