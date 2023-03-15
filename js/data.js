const TITLE_DETAIL = [
  "비디오 게임",
  "장난감 및 게임",
  "공구 및 주택 개조",
  "스포츠 및 야외 활동",
  "소프트웨어",
  "애완동물 용품",
  "영화 및 TV",
  "여행 가방",
  "산업용 및 과학용",
  "가정 및 주방",
  "건강 및 가정용품",
  "남아용 의류",
  "여아용 의류",
  "남성 패션",
  "여성 패션",
  "뷰티 및 퍼스널 케어",
  "유아",
  "자동차 용품",
];

const SIDEBAR_DETAIL = {
  "Amazon Music": [
    "음악 스트리밍",
    "Amazon Music Unlimited",
    "Amazon Music HD",
    "Podcast",
    "웹 플레이어 열기",
    "웹 플레이어 열기",
    "Download the app",
  ],
  "Kindle E-Reader 및 도서": [
    "Kindle E-Reader",
    "All-new Kindle Kids",
    "All-new Kindel",
    "Kindel Paperwhite",
    "Kindel Oasis",
    "Introducing Kindle Scribe",
    "액세서리",
  ],
  "안드로이드 앱스토어": [
    "안드로이드 앱스토어",
    "모든 앱 및 게임",
    "게임",
    "Amazon 코인",
    "Amazon Appstore 다운로드",
    "Amazon 앱",
    "앱 및 구독",
  ],
  전자: [
    "전자",
    "액세서리 및 용품",
    "카메라 및 사진",
    "자동차 및 전자기기",
    "휴대폰 및 액세서리",
    "컴퓨터 및 액세서리",
    "GPS 및 내비게이션",
    "헤드폰",
    "홈 오디오",
    "사무실 전자제품",
    "휴대용 오디오 및 비디오",
    "보안 및 감시",
    "서비스 플랜",
    "TV 및 비디오",
    "비디오 게임 콘솔 및 액세서리",
    "비디오 프로젝터",
    "웨어러블 테크 제품",
    "전자책 리더 및 액세서리",
  ],
  컴퓨터: [
    "컴퓨터",
    "컴퓨터 액세서리 및 주변기기",
    "컴퓨터 구성품",
    "컴퓨터 및 태블릿",
    "데이터 스토리지",
    "데이터 스토리지",
    "외부 구성 요소",
    "랩톱 액세서리",
    "모니터",
    "네트워킹 제품",
    "멀티 탭 및 서지 방지기",
    "프린터",
    "스캐너",
    "서버",
    "태블릿 및 액세서리",
    "태블릿 부품(교체용)",
    "품질보증 및 서비스",
  ],
  "Alexa 스마트 홈": [
    "Alexa 스마트 홈",
    "Amazon 스마트홈",
    "스마트 홈 조명",
    "스마트 잠금 및 입력",
    "보안 카메라 및 시스템",
    "플러그 및 콘센트",
    "새로운 스마트 기기",
    "냉난방",
    "감지기 및 센서",
    "홈 엔터테인먼트",
    "애완동물",
    "음성 어시스턴트 및 허브",
    "주방용품",
    "진공 청소기 및 대걸레",
    "잔디 및 정원",
    "WI-FI 및 네트워크",
    "기타 솔루션",
  ],
  "예술 및 공예": [
    "예술 및 공예",
    "회화, 드로잉 및 미술 용품",
    "비즈 및 주얼리 제작",
    "공예",
    "직물",
    "직물 장식",
    "뜨개질 및 코바늘 뜨개질",
    "바느질",
    "정리, 수납, 운반",
    "판화",
    "스크랩북 제작 및 스탬핑",
    "바느질",
    "파티 장식 및 용품",
    "선물 포장 용품",
  ],
  "자동차 용품": [
    "자동차 용품",
    "자동차 관리",
    "자동차 전자기기 및 액세서리",
    "실외용품 액세서리",
    "인테리어 액세서리",
    "램프 및 조명 액세서리",
    "오토바이 및 파워스포츠 차량 용품",
    "오일 및 유체",
    "페인트 및 도장용품",
    "퍼포먼스 부품 및 액세서리",
    "교체용 부품",
    "RV 부품 및 액세서리",
    "타이어 및 휠",
    "공구 및 장비",
    "자동차 매니아용 상품",
    "대형차 및 상용차 장비",
  ],
  유아: [
    "유아",
    "놀이 및 오락",
    "의류 및 액세서리",
    "유아 및 아기 장난감",
    "유아",
    "아기 문구류",
    "카 시트 및 액세서리",
    "기저귀",
    "수유",
    "기프트",
    "유아용",
    "배변 훈련",
    "임신 및 임산부",
    "안전",
    "유모차 및 액세서리",
    "여행 용품",
  ],
  "뷰티 및 퍼스널 케어": [
    "뷰티 및 퍼스널 케어",
    "메이크업",
    "스킨 케어",
    "헤어 케어",
    "향수",
    "풋, 핸드 및 네일 케어",
    "도구 및 액세서리",
    "면도 및 제모",
    "퍼스널 케어",
    "구강 케어",
  ],
  "여성 패션": [
    "여성 패션",
    "의류",
    "신발",
    "보석",
    "시계",
    "핸드백",
    "액세서리",
    "남성 패션",
    "여아용 의류",
    "남아용 의류",
  ],
  "남성 패션": [
    "남성 패션",
    "의류",
    "신발",
    "시계",
    "액세서리",
    "여성 패션",
    "여아용 의류",
    "남아용 의류",
  ],
  "여아용 의류": [
    "여아용 의류",
    "의류",
    "신발",
    "보석",
    "시계",
    "액세서리",
    "교복",
    "여성 패션",
    "남성 패션",
    "남아용 의류",
  ],
  "남아용 의류": [
    "남아용 의류",
    "의류",
    "신발",
    "보석",
    "시계",
    "액세서리",
    "교복",
    "여성 패션",
    "남성 패션",
    "여아용 의류",
  ],
  "건강 및 가정용품": [
    "건강 및 가정용품",
    "케어",
    "핼스 케어",
    "가정용품",
    "의료용품 및 장비",
    "구강 케어",
    "퍼스널 케어",
    "성 웰니스",
    "스포츠 영양",
    "문구류 및 선물 포장 제품",
    "시력 관리",
    "비타민 및 영양 보충제",
    "웰니스 및 휴식",
  ],
  "가정 및 주방": [
    "가정 및 주방",
    "아동용품 매장",
    "주방 및 다이닝 용품",
    "침구",
    "욕실",
    "비품",
    "홈 데코",
    "벽면 장식 용품",
    "조명 및 천장 팬",
    "계절별 데코용품",
    "이벤트 및 파티 용품",
    "냉난방 및 공기 질",
    "다리미 및 스팀 건조기",
    "진공 청소용품 및 바닥 관리용품",
    "수납 및 정리",
    "청소용품",
  ],
  "산업용 및 과학용": [
    "산업용 및 과학용",
    "연마재 및 피니싱 제품",
    "적충 제조(3D 프린팅) 관련 제품",
    "상업용 도어 제품",
    "절삭 공구",
    "패스너",
    "여과",
    "외식 업소용 장비 및 용품",
    "유압, 공압 및 배관",
    "산업용 전기",
    "산업용 전동 및 수공구",
    "일반 관리 및 위생용품",
    "실험실 및 과학 제품",
    "재료 취급 제품",
    "직업 보건 및 안전 제품",
    "포장 및 배송 용품",
    "동력 변속기 부품",
    "전문 치과 용품",
    "전문 의료 용품",
    "원자재",
    "소매점 설비 및 장비",
    "로봇 공학",
    "과학 교육",
    "테이프, 접착제 및 실런트",
    "테스트, 측정 및 검사",
  ],
  "여행 가방": [
    "여행 가방",
    "캐리온",
    "백팩",
    "옷가방",
    "여행용 토트",
    "여행 가방 세트",
    "랩톱 백",
    "여행 가방",
    "아동용 러기지",
    "메신저 백",
    "우산",
    "더플",
    "여행 액세서리",
  ],
  "영화 및 TV": [
    "영화 및 TV",
    "영화",
    "TV 프로그램",
    "블루레이",
    "4K 울트라 HD",
    "베스트셀러",
    "오늘의 딜",
    "신규 출시",
    "사전 주문",
    "어린이 및 가족",
    "Prime Video",
  ],
  "애완동물 용품": [
    "애완동물 용품",
    "강아지",
    "고양이",
    "물고기 및 수중 애완동물",
    "조류",
    "말",
    "파충류 및 양서류",
    "소형 동물",
  ],
  소프트웨어: [
    "소프트웨어",
    "회계 및 재무",
    "안티바이러스 및 보안",
    "기업 및 사무소",
    "아동용",
    "디자인 및 일러스트레이션",
    "디지털 소프트웨어",
    "교육 및 참고 자료",
    "게임",
    "라이프스타일 및 취미",
    "음악",
    "네트워킹 및 서비스",
    "운영 체제",
    "사진",
    "프로그래밍 및 웹 개발",
    "세금 준비",
    "유틸리티",
    "비디오",
  ],
  "스포츠 및 야외 활동": [
    "스포츠 및 야외 활동",
    "스포츠 및 야외 활동",
    "야외 활동",
    "스포츠 및 피트니스",
    "팬 숍",
  ],
  "공구 및 주택 개조": [
    "공구 및 주택 개조",
    "공구 및 주택 개조",
    "가전 제품",
    "건축 용품",
    "전기",
    "부속 장치",
    "주방 및 욕실 설비",
    "전구",
    "조명 및 천장 팬",
    "계량 및 레이아웃 용구",
    "도장 용품 및 벽면 처리",
    "전동 및 수공구",
    "거친 배관",
    "안전 및 보안",
    "수납용품 및 가정용 정리용품",
    "용접 및 납 땜",
  ],
  "장난감 및 게임": [
    "장난감 및 게임",
    "액션 피규어 및 조각상",
    "예술 및 공예",
    "유아 및 아기 장난감",
    "조립 장난감",
    "인형 및 액세서리",
    "드레스업 및 가상 놀이",
    "아동용 전자기기",
    "게임",
    "성인용 장난감",
    "취미",
    "아동용 가구, 데코 및 수납공간",
    "학습 및 교육",
    "이색 및 개그 토이",
    "파티용품",
    "꼭두각시",
    "퍼즐",
    "스포츠 및 실외 놀이",
    "동물 인형 및 봉제 장난감",
    "장난감 RC 및 놀이용 자동차",
    "세발 자전거, 스쿠터 및 왜건",
    "비디오 게임",
  ],
  "비디오 게임": [
    "비디오 게임",
    "비디오 게임",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox One",
    "Xbox 360",
    "Nintendo Switch",
    "Wii U",
    "Wii",
    "PC",
    "Mac",
    "Nintendo 3DS 및 2DS",
    "Nintendo DS",
    "PlayStation Vita",
    "Sony PSP",
    "복고 게임 및 마이크로콘솔",
    "액세서리",
    "디지털 게임",
    "어린이 및 가족",
  ],
};
