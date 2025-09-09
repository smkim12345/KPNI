import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

export const BackFooterSection = () => {
  return (
    <Box
            sx={{
                width: '100%',
                height: '70px',
                backgroundColor: THEME.colors.lightGray,
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* 왼쪽 푸터 내용 */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        marginLeft: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                        //backgroundColor: 'red'
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: THEME.colors.white,
                            border: '2px solid ' + THEME.colors.primary,
                            padding: '2px',
                            borderRadius: '4px',
                        }}
                    >
                        <img
                            src="/src/images/qrcode.png"
                            alt="QR 코드"
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'block'
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            color: THEME.colors.text,
                            fontSize: '8px',
                            fontWeight: '500',
                        }}
                    >
                        blog.kpri.kr
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 6,
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    color: THEME.colors.primaryDark,
                                    fontSize: '10px',
                                }}
                            >
                                같이의 가치를 믿는
                            </Typography>
                            <Typography
                                sx={{
                                    color: THEME.colors.primaryDark,
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                }}
                            >
                                한국심리연구소
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    color: THEME.colors.primaryDark,
                                    fontSize: '10px',
                                }}
                            >
                                Believing in the value of togetherness, KPR
                            </Typography>
                            <Typography
                                sx={{
                                    color: THEME.colors.primaryDark,
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                }}
                            >
                                KPR: Korean Psychological Research Institute
                            </Typography>
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            color: THEME.colors.primaryDark,
                            fontSize: '10px',
                        }}
                    >
                        한국심리연구소는 사람의 마음에 한 걸음 더 다가가고자 노력하고 있습니다.
                    </Typography>
                </Box>
            </Box>
            {/* 오른쪽 푸터 내용 */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderLeft: '12px solid ' + THEME.colors.primaryDark,
                    height: 40,
                    paddingLeft: 1,
                    marginLeft: '230px',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        color: THEME.colors.text,
                        fontSize: '12px',
                        fontWeight: '500',
                    }}
                >
                    <strong>주 소 :</strong> (42752) 대구광역시 달서구 조암로 14 휴플러스 506호
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                    }}
                >
                    <Typography
                        sx={{
                            color: THEME.colors.text,
                            fontSize: '12px',
                            fontWeight: '500',
                        }}
                    >
                        <strong>대표전화 :</strong> 070-7121-0474
                    </Typography>
                    <Typography
                        sx={{
                            color: THEME.colors.text,
                            fontSize: '12px',
                            fontWeight: '500',
                        }}
                    >
                        <strong>FAX :</strong> 070-7610-7330
                    </Typography>
                </Box>
            </Box>
            {/* 로고 */}
            <Box
                sx={{
                    marginLeft: '150px',
                }}
            >
                <img
                    src="/src/images/logo.png"
                    alt="한국심리연구소 로고"
                    style={{
                        width: '200px',
                        height: '50px',
                        objectFit: 'contain'
                    }}
                />
            </Box>
        </Box>
    );
};