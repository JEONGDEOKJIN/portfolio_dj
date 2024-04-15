export const dummyProjectSTO = [
  {
    id: 1,

    projectName: "STO project",

    architectureImageHref: [
      { id: 0, type: "carousel", href: "/projects/sto/archi_market.png" },
      { id: 1, type: "carousel", href: "/projects/sto/archi_publish.png" },
      { id: 2, type: "carousel", href: "/projects/sto/archi_tracking.png" },
      { id: 3, type: "carousel", href: "/projects/sto/archi_vote.png" },
    ],

    stacks: [
      "Typesript",
      "Next.js",
      "React.js",
      "React-query",
      "Tailwind",
      "Node.js",
      "AWS EC2",
      "AWS Amplify",
      "PostgreSQL",
      "Solidity",
      "Express",
      "Figma",
    ],

    serviceDesc:
      "누구나 쉽게 부동산을 소유할 수 있는 부동산 조각투자 서비스로써, 부동산 자산을 불록체인 토큰화 하여 분양 받고, 매매 할 수 있는 STO 거래 플랫폼",

    architectureImageThumbnail: "/projects/sto/archi_thumbnail.png",

    team: {
      frontend: "3명",
      backend: "2명",
      etc: "컨트랙트 : 전원개발",
    },

    myRole: "Admin 페이지 제작(Frontend) & 프로젝트 UI/UX 기획",

    mainFeatureUI: [
      { id: 0, type: "carousel", href: "/projects/sto/archi_market.png" },
      { id: 1, type: "carousel", href: "/projects/sto/archi_publish.png" },
      { id: 2, type: "carousel", href: "/projects/sto/archi_tracking.png" },
      { id: 3, type: "carousel", href: "/projects/sto/archi_vote.png" },
    ],


    demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
    image: "image1.jpg",
    title: "gooe",
    repository: "www",
    projectDocuments: "www",
    demoVideo_2: "video1.mp4",
    category: "feature",
    fsd_smallcategory: "small category",
    fsd_mediumcategory: "project",
    startDate: "24.01.01",
    endDate: "24.02.01",
  },
];

export const dummyProjectList = [
  {
    projectId: 1, // 프로젝트 id
    name: "STO 프로젝트", // project 이름

    startDate: "2023-11-01", // 프로젝트 시작일
    endDate: "2023-12-01", // 프로젝트 시작일

    stacks: ["Node.js", "Next.js", "TailwindCSS"], // 사용 스택

    features: ["STO 발행", "추적", "거래"], // 프로젝트 주요 특징

    myRoles: ["FrontEnd(어드민)", "UI/UX 기획"], // 맡은 역할

    myRoles_Sub: [
      {
        mainRole: "FrontEnd(어드민)",
        subRole: "데이터 바인딩 및 인터랙션 UI 구현",
        techSolution: [
          "사용자의 인터랙션(TTI)보다 사용자가 빠르게 데이터(TTV)를 확인하는게 중요하다고 판단. 따라서, SSR 중 Static Site Genration 렌더링 방식으로 진행",
          "   ",
        ], // 주요 기술 과제를 어떻게 해결 했나
      },
      {
        mainRole: "FrontEnd(어드민)",
        subRole: "데이터 시각화",
      },
      {
        mainRole: "FrontEnd(어드민)",
        subRole: "사용자/거래이력/매물정보/게시글에 대한 '조회 및 생성'",
      },
      {
        mainRole: "FrontEnd(어드민)",
        subRole: "퍼블리싱'",
      },
    ],

    mainTechTasks: [
      {
        myRoles: "FrontEnd(어드민)",
        techTask: "",
      },
    ],
    // projectDesc : "", // 프로젝트 소개
    // projectDesc : "", // 프로젝트 소개
    // projectDesc : "", // 프로젝트 소개
    // projectDesc : "", // 프로젝트 소개
    imageSrc_1: "/img/50meru - Canopus.jpeg",
    imageSrc_2: "/img/50meru - Canopus.jpeg",
    imageSrc_3: "/img/50meru - Canopus.jpeg",
  },
  {
    name: "Vega",
    channelId: 1,
    channel: "50meru",
    src: "/music/50meru - Vega.mp4",
    imageSrc: "/img/50meru - Vega.jpeg",
  },
  {
    name: "aldebaran",
    channelId: 1,
    channel: "50meru",
    src: "/music/50meru - aldebaran.mp4",
    imageSrc: "/img/50meru - aldebaran.jpeg",
  },
  {
    name: "constellations",
    channelId: 1,
    channel: "50meru",
    src: "/music/50meru - constellations.mp4",
    imageSrc: "/img/50meru - constellations.jpeg",
  },
  {
    name: "불 붙인 양초",
    channelId: 2,
    channel: "CattyBGM",
    src: "/music/CattyBGM - 불 붙인 양초.mp4",
    imageSrc: "/img/CattyBGM - 불 붙인 양초.jpeg",
  },
  {
    name: "신난 양말",
    channelId: 2,
    channel: "CattyBGM",
    src: "/music/CattyBGM - 신난 양말.mp4",
    imageSrc: "/img/CattyBGM - 신난 양말.jpeg",
  },
  {
    name: "고양이 코",
    channelId: 2,
    channel: "CattyBGM",
    src: "/music/CattyBGM - 고양이 코.mp4",
    imageSrc: "/img/CattyBGM - 고양이 코.jpeg",
  },
  {
    name: "휴화산",
    channelId: 2,
    channel: "CattyBGM",
    src: "/music/CattyBGM - 휴화산.mp4",
    imageSrc: "/img/CattyBGM - 휴화산.jpeg",
  },
  {
    name: "butter",
    channelId: 3,
    channel: "ClearnEars",
    src: "/music/ClearnEars - butter.mp4",
    imageSrc: "/img/ClearnEars - butter.jpeg",
  },
  {
    name: "크리스마스",
    channelId: 3,
    channel: "ClearnEars",
    src: "/music/ClearnEars - Christmas.mp4",
    imageSrc: "/img/ClearnEars - Christmas.jpeg",
  },
  {
    name: "붕 뜬 코끼리",
    channelId: 4,
    channel: "daldam music",
    src: "/music/daldam music - 붕 뜬 코끼리.mp4",
    imageSrc: "/img/daldam music - 붕 뜬 코끼리.jpeg",
  },
  {
    name: "밥",
    channelId: 4,
    channel: "daldam music",
    src: "/music/daldam music - 밥.mp4",
    imageSrc: "/img/daldam music - 밥.jpeg",
  },
  {
    name: "차",
    channelId: 4,
    channel: "daldam music",
    src: "/music/daldam music - 차.mp4",
    imageSrc: "/img/daldam music - 차.jpeg",
  },
  {
    name: "목욕오리",
    channelId: 4,
    channel: "daldam music",
    src: "/music/daldam music - 목욕오리.mp4",
    imageSrc: "/img/daldam music - 목욕오리.jpeg",
  },
];
