import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "assets/utils/ENV";
import Footer from "components/Footer";
import Header from "components/Header";
import InputLabel from "components/InputLabel";
import React from "react";
import { color } from "styles/theme";
import { ContactContainer } from "./styles";

interface IProps {
    query: IContactQuery;
    params: object;
    data?: object;
}

interface IContactQuery {
    type?: number;
}

const containerStyle = {
    width: '100%',
    height: '338px'
};

const center = {
    lat: 37.5233278,
    lng: 126.9234386
};

const ContactScreen = ({ query = {}, params = {} }: IProps) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return (
        <div>
            <Header type={3} />
            <ContactContainer>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '81px 0px 121px 0px', borderBottom: '1px solid black' }}>
                    <div style={{ position: 'relative', zIndex: 0 }}>
                        <i style={{ position: 'absolute', top: -25, left: -37, width: 60, height: 60, borderRadius: 30, backgroundColor: color.brand }} />
                        <span style={{ fontSize: 50, position: 'relative', fontWeight: 500 }}>Contact</span>
                    </div>

                </div>
                <div style={{ padding: '45px 80px 126px 80px' }}>
                    <p style={{ textAlign: 'center' }}>도움이 필요하신 내용이나 궁금하신 사항을 상세히 알려주세요.</p>
                    <div style={{ marginTop: 80 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
                                    <InputLabel text="회사명/단체명" />
                                    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}>
                                        <TextField id={'standard-basic'} variant={'standard'} placeholder={'회사명이나 단체명을 입력해주세요.'} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 45 }}>
                                    <InputLabel text="연락처" />
                                    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}>
                                        <TextField id={'standard-basic'} variant={'standard'} placeholder={'연락처를 입력해주세요.'} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 45 }}>
                                    <InputLabel text="예산규모" />
                                    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}>
                                        <TextField id={'standard-basic'} variant={'standard'} placeholder={'예산을 입력해주세요.'} />
                                    </div>
                                </div>

                            </div>
                            <div style={{ flex: 1, marginLeft: 183 }}>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <InputLabel text="성함/직책" />
                                    </div>
                                    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}>
                                        <TextField id={'standard-basic'} variant={'standard'} placeholder={'담당자 성함/직책을 입력해주세요.'} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 45 }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <InputLabel text="E-mail" />
                                    </div>
                                    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', }}>
                                        <TextField id={'standard-basic'} variant={'standard'} placeholder={'이메일을 입력해주세요.'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 45 }}>
                            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <InputLabel text="사업문의" />
                                </div>
                                <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column' }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={6}
                                        placeholder={'구체적으로 문의하실 내용을 기재해주세요.'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 46 }}>
                            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <InputLabel text="개인정보 수집 및 이용 동의" />
                                </div>
                                <div style={{ marginTop: 24, height: 119, overflowX: 'scroll', padding: '32px 20px 32px 20px', border: '1px solid #ABABAB' }}>
                                    <p style={{ fontSize: 13, color: color.N50, fontWeight: 300, lineHeight: 1.56, letterSpacing: 1.3 }}>

                                        제1조 개인정보 수집에 대한 동의<br />
                                        Vivade (‘URL’이하 ‘사이트’) 은(는) 고객은 사이트 회원 가입시 회원 약관, 개인정보 수집 및 이용 내용에 대해 「동의함」 버튼을 클릭할 수 있는 절차를 마련하여, 「동의함」 버튼을 클릭하면 개인정보 수집 및 이용에 대해 동의한 것으로 봅니다.

                                        제2조 개인정보의 수집 항목 및 이용 목적"개인정보"는 생존하는 개인에 관한 정보로서 해당 정보에 포함된 성명, 주민등록번호 등의 사항으로 해당 개인
                                    </p>

                                </div>
                                <div style={{ marginTop: 14, paddingLeft: 15 }}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="개인정보 수집 및 이용에 동의합니다." />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button variant="outlined" style={{ padding: '26px 103px 25px 103px', border: `1px solid ${color.N50}` }} >
                                <span style={{ fontSize: 17, color: color.N50 }}>문의하기</span>
                            </Button>
                        </div>
                    </div>
                    <div style={{ marginTop: 126 }}>
                        {
                            isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                    onLoad={onLoad}
                                    onUnmount={onUnmount}
                                >
                                    { /* Child components, such as markers, info windows, etc. */}
                                    <></>
                                </GoogleMap>
                            ) : <></>
                        }
                    </div>
                </div>
            </ContactContainer>
            <Footer />
        </div>
    );
};

export default ContactScreen;