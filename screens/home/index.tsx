
import { color } from "styles/theme";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import moment from 'moment'
import { CardContentContainer, CardContentDescription, CardContentTitle, Container, HisotryBadgeTextContainer, HisotryContentDescription, HisotryContentDescriptionContainer, HisotryContentTitle, HisotryContentTitleContainer, HistoryContainer, HistoryContentContainer, HistoryInnerContainer, HistorySection, HistoryText, HR, HRContainer, MainBanner, MainBannerContainer, MainBannerText, MainBottomContainer, MainBottomContentContainer, MainBottomDescriptionContainer, MainBottomDescriptionContent, MainBottomDescriptionContentContainer, MainBottomDescriptionTitle, MainBottomTitle, MainImage, MainImageContainer, MainSectionBottom, MainTextContainer, MainTextImage, MissionCard, MissionCardContainer, MissionCardImage, MissionCardImageContainer, NewsBadgeTextContainer, NewsContentContainer, NewsContentDate, NewsContentLi, NewsContentTitle, NewsContentUl, NewsImage, NewsImageContainer, NewsSection, NewsSectionContainer, NewsText, TextBadge, TopSection, TopSectionContainer, TopSectionContentContainer, TopSectionContentDescription, TopSectionContentDescriptionContainer, TopSectionContentTitle, ValueCard, ValueCardImage, ValueCardImageContainer, VisionCard, VisionCardImage, VisionCardImageContainer, VisionContainer, VisionSection } from "./styles";
import { useCallback } from "react";


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





const Home = ({ data }: IProps) => {
    const onClickSocial = useCallback((url: string) => {
        window.open(url);
    }, []);
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
                                <TopSectionContentTitle>????????? ?????? ?????????</TopSectionContentTitle>
                                <TopSectionContentTitle>????????????.</TopSectionContentTitle>
                            </div>
                            <TopSectionContentDescriptionContainer>
                                <TopSectionContentDescription >?????? ????????? ????????? ????????? ????????? ???????????? ????????????</TopSectionContentDescription>
                                <TopSectionContentDescription >??????????????? ????????? ??????????????? ???????????? ?????? ?????? ???????????? ?????????.</TopSectionContentDescription>

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
                    <VisionContainer>
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
                                    <CardContentTitle>??????</CardContentTitle>
                                    <CardContentDescription>
                                        ????????? ??????????????? ????????? ????????? ????????? ????????? ?????? ???????????? ?????????????????? ????????? ????????? ?????????.
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
                                    <CardContentTitle>??????</CardContentTitle>
                                    <CardContentDescription>
                                        ?????? ????????? ????????? ?????? ????????? ???????????? ?????? ??? ?????? ?????????????????? ?????? ?????? ????????? ??????
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
                                    <CardContentTitle>??????</CardContentTitle>
                                    <CardContentDescription>
                                        #?????? #?????? #??????
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
                        <div className="contact-us">
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
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => window.open('tel:0414068998')}>041-406-8998</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>SNS</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => onClickSocial('https://instagram.com/nabilera.official?igshid=YmMyMTA2M2Y=')}>Instagram</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => onClickSocial('https://www.facebook.com/nabilera.official?mibextid=ZbWKwL')}>Facebook</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => onClickSocial('https://m.blog.naver.com/PostList.naver?blogId=nabilera2020')}>Blog</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => onClickSocial('https://youtube.com/channel/UC69_LSbhYcZFuaprQuXkFnA')}>Youtube</MainBottomDescriptionContent>
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
