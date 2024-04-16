export const dummyProjectSTO = [
  {
    id: 1,

    projectName: "STO project",

    projectDemo:
      "/projects/sto/demo/admin_realestate_subscriptoin_enrollSTOBtn.gif",
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

    // 테이블 UI 설명은 MainFeature.tsx 컴포넌트에서 진행
    mainFeatureUI: [
      {
        type: "carousel",
        desc: "Admin 페이지",
        href: "/projects/sto/features/admin_main.jpg",
      },
      {
        type: "carousel",
        desc: "User 페이지",
        href: "/projects/sto/features/user_main.jpg",
      },
      {
        type: "carousel",
        desc: "[STO 토큰 발행] Admin 매물등록 버튼",
        href: "/projects/sto/features/enrollbtn.jpg",
      },
      {
        type: "carousel",
        desc: "[STO 토큰 발행] Admin 매물등록 form 제출",
        href: "/projects/sto/features/formpage.jpg",
      },
      {
        type: "carousel",
        desc: "[STO 토큰 발행] Admin STO 발행",
        href: "/projects/sto/features/estate_list.jpg",
      },
      {
        type: "carousel",
        desc: "[STO 토큰 청약] User 청약 목록",
        href: "/projects/sto/features/subscription.JPG",
      },
      {
        type: "carousel",
        desc: "[STO 토큰 거래] User 마켓 목록",
        href: "/projects/sto/features/market_trade.JPG",
      },
      {
        type: "carousel",
        desc: "[투표] Admin 투표 등록",
        href: "/projects/sto/features/voteform.jpg",
      },
      {
        type: "carousel",
        desc: "[투표] User 투표",
        href: "/projects/sto/features/voteexample_2.JPG",
      },
      {
        type: "carousel",
        desc: "[어드민 게시판]",
        href: "/projects/sto/features/estate_list.jpg",
      },
      {
        type: "carousel",
        desc: "[어드민 게시판]",
        href: "/projects/sto/features/userSection.jpg",
      },
      {
        type: "carousel",
        desc: "[어드민 게시판]",
        href: "/projects/sto/features/transaction.jpg",
      },
      {
        type: "carousel",
        desc: "[어드민 대시보드]",
        href: "/projects/sto/features/market_week.jpg",
      },
      {
        type: "carousel",
        desc: "[어드민 대시보드]",
        href: "/projects/sto/features/user&trademoney.jpg",
      },
      {
        type: "carousel",
        desc: "[어드민 대시보드]",
        href: "/projects/sto/features/latest_transaction.jpg",
      },
      {
        type: "carousel",
        desc: "[어드민 대시보드]",
        href: "/projects/sto/features/carousel.jpg",
      },
      {
        type: "carousel",
        desc: "[어드민 대시보드]",
        href: "/projects/sto/features/blacklistUser.jpg",
      },
    ],

    // 주요 기술 과제 : MainFeature 컴포넌트
    // 협업방식 : Communication 컴포넌트

    deliverabes: {
      ERD: {
        linkHref: "https://dbdiagram.io/d/6541ab467d8bbd64653cf50b",
      },
      architecture: {
        linkHref:
          "https://tropical-trouser-a8d.notion.site/90a66e9808db41e892332443de8df96e?pvs=4",
      },
      API: {
        linkHref:
          "https://docs.google.com/spreadsheets/d/1iFLJDipgi4e4pgQSRhGDqBqiKsqijfc35rkt_J2TOSE/edit#gid=0",
      },
      UIUX: {
        linkHref:
          "https://www.figma.com/file/aBMZ7hFxCcddiVapcRQxbY/bounceCode_STO%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&mode=design&t=eKLWsCuHZjYrkAqI-0",
      },
      description: {
        linkHref:
          "https://docs.google.com/spreadsheets/d/12ZmKxAXc7FT7kGRa6ppcQjZ4lxzcqKPNQoAOcQuES2U/edit#gid=0",
      },
      userFlow: {
        linkHref:
          "https://tropical-trouser-a8d.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4%2F82cf0a7b-6943-48a8-99c4-3e1bd175cde6%2FUntitled.png?table=block&id=370bfb36-dda0-4d1e-9d5f-f6e756592fcc&spaceId=0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4&width=2000&userId=&cache=v2",
      },
      userDeploy: {
        linkHref: "https://bouncesto.site/home",
      },
      adminDeploy: {
        linkHref: "https://bs.admin.bouncesto.site/admin/dashboard",
      },
    },

    informationSection: {
      projectName: "STO project",
      startDate: "24.01.01",
      endDate: "24.02.01",
      projectRepository:
        "https://github.com/JEONGDEOKJIN/projects/tree/master/Real_estate_STO_project",
      projectDocuments:
        "https://tropical-trouser-a8d.notion.site/STO-Projects-9e51a7884f1b44248f6eb873f0cc44bf?pvs=4",
      DEVBlog: "https://deokjin.gitbook.io/dj",
      justStudyBlog: "https://hello-5200.tistory.com/",
    },

    demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
    image: "image1.jpg",
    title: "gooe",
    demoVideo_2: "video1.mp4",
    category: "feature",
    fsd_smallcategory: "small category",
    fsd_mediumcategory: "project",
  },
];

export const dummyNobrokerProject = [
  {
    id: 1,

    projectName: "Nobroker project",

    projectDemo: "/projects/nobroker/demo/nobroker_estateList.mp4",
    architectureImageHref: [
      {
        id: 0,
        type: "carousel",
        href: "/projects/nobroker/architecture/flowchart.png",
      },
      // { id: 1, type: "carousel", href: "/projects/sto/archi_publish.png" },
      // { id: 2, type: "carousel", href: "/projects/sto/archi_tracking.png" },
      // { id: 3, type: "carousel", href: "/projects/sto/archi_vote.png" },
    ],

    architectureImageThumbnail: "/projects/nobroker/architecture/flowchart.png",

    stacks: [
      "React.js",
      "Node.js",
      "AWS EC2",
      "MySQL",
      "Styled-components",
      "React-query",
      "NGINX",
      "Express",
      "Javascript",
    ],

    serviceDesc:
      "부동산 중개인 없이도 안전하게 거래할 수 있다면 거래 수수료를 아낄 수 있지 않을까 하는 생각으로 제작한 블록체인 기반의 탈중앙화된 부동산 거래 플랫폼",

    team: {
      frontend: "5명",
      backend: "5명",
      etc: "팀원 모두 FE/BE 개발",
    },

    myRole: "매물 리스트 페이지 & Admin 페이지",

    // 테이블 UI 설명은 MainFeature.tsx 컴포넌트에서 진행
    mainFeatureUI: [
      {
        type: "carousel",
        desc: "Admin 페이지",
        href: "/projects/nobroker/features/admin-nobroker.JPG",
      },
      {
        type: "carousel",
        desc: "매물 리스트",
        href: "/projects/nobroker/features/estatelist-nobroker.JPG",
      },
      {
        type: "carousel",
        desc: "매물 등록",
        href: "/projects/nobroker/features/estateEnroll.JPG",
      },
      {
        type: "carousel",
        desc: "투표 페이지",
        href: "/projects/nobroker/features/vote.JPG",
      },
      {
        type: "carousel",
        desc: "매물 상세",
        href: "/projects/nobroker/features/estateDetail.JPG",
      },
      {
        type: "carousel",
        desc: "마이페이지",
        href: "/projects/nobroker/features/nobroker_mypage.JPG",
      },
    ],

    // 주요 기술 과제 : MainFeature 컴포넌트
    // 협업방식 : Communication 컴포넌트

    deliverabes: {
      ERD: {
        linkHref:
          "https://www.notion.so/ERD-672996733e4f4c25af31ee5e15998ef6?pvs=4",
      },
      architecture: {
        linkHref:
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4%2Ff3865119-cfe0-4c7b-bc75-f643ea74401e%2FUntitled.png?table=block&id=63088755-a02e-4a4d-96cb-c2545330f527&spaceId=0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4&width=1920&userId=0e6154aa-c9b2-4203-b101-11edd2f4e75e&cache=v2",
      },
      PPT: {
        linkHref:
          "https://www.notion.so/PPT-3ba1b68af3654ca5b1a0e5a20cefce54?pvs=4",
      },
      deploy: {
        linkHref:
          "http://ec2-3-37-244-154.ap-northeast-2.compute.amazonaws.com/",
      },
      // description: {
      //   linkHref:
      //     "https://docs.google.com/spreadsheets/d/12ZmKxAXc7FT7kGRa6ppcQjZ4lxzcqKPNQoAOcQuES2U/edit#gid=0",
      // },
      // userFlow: {
      //   linkHref:
      //     "https://tropical-trouser-a8d.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4%2F82cf0a7b-6943-48a8-99c4-3e1bd175cde6%2FUntitled.png?table=block&id=370bfb36-dda0-4d1e-9d5f-f6e756592fcc&spaceId=0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4&width=2000&userId=&cache=v2",
      // },
    },

    informationSection: {
      projectName: "Nobroker project",
      startDate: "23.07.01",
      endDate: "23.08.01",
      projectRepository:
        "https://github.com/JEONGDEOKJIN/projects/tree/master/Nobroker",
      projectDocuments:
        "https://tropical-trouser-a8d.notion.site/Nobroker-54751106d7b24505bceb58209c1a44ec?pvs=4",
      DEVBlog: "https://deokjin.gitbook.io/dj",
      justStudyBlog: "https://hello-5200.tistory.com/",
    },

    demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
    image: "image1.jpg",
    title: "gooe",
    demoVideo_2: "video1.mp4",
    category: "feature",
    fsd_smallcategory: "small category",
    fsd_mediumcategory: "project",
  },
];

export const dummyMonamiProject = [
  {
    id: 1,

    projectName: "Monami project",

    projectDemo: "/projects/monami/demo/monami_boardList.mp4",
    architectureImageHref: [
      {
        id: 0,
        type: "carousel",
        href: "/projects/monami/architecture/monami_archi.png",
      },
      // { id: 1, type: "carousel", href: "/projects/sto/archi_publish.png" },
      // { id: 2, type: "carousel", href: "/projects/sto/archi_tracking.png" },
      // { id: 3, type: "carousel", href: "/projects/sto/archi_vote.png" },
    ],

    architectureImageThumbnail:
      "/projects/monami/architecture/monami_archi.png",

    stacks: [
      "Node.js",
      "HTML",
      "CSS",
      "Express",
      "MySQL",
      "Javascript",
      "NGINX",
    ],

    serviceDesc:
      "캐치 마인드 라는 게임에서 영감을 받은 서비스. 주어진 시간 내에 상대방이 그린 그림의 제목을 맞춰보고 '엥? 이게 이거라고?' 라는 재미를 느낄 수 있는 프로젝트",

    team: {
      frontend: "4명",
      backend: "4명",
      etc: "팀원 모두 FE/BE 개발",
    },

    myRole: "게시판 및 상세 페이지 Frontend & Backend 개발",

    // 테이블 UI 설명은 MainFeature.tsx 컴포넌트에서 진행
    mainFeatureUI: [
      {
        type: "carousel",
        desc: "게시판 페이지",
        href: "/projects/monami/features/monami_board.JPG",
      },
      {
        type: "carousel",
        desc: "상세 페이지",
        href: "/projects/monami/features/monami_detail.JPG",
      },
      {
        type: "carousel",
        desc: "회원 가입",
        href: "/projects/monami/features/register.png",
      },
      {
        type: "carousel",
        desc: "그림 그리기 방",
        href: "/projects/monami/features/drawingBoard.png",
      },
      {
        type: "carousel",
        desc: "그림 그리기",
        href: "/projects/monami/features/drawingPaint.png",
      },
    ],

    // 주요 기술 과제 : MainFeature 컴포넌트
    // 협업방식 : Communication 컴포넌트

    deliverabes: {
      ERD: {
        linkHref:
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4%2Fb8d75664-70aa-4909-8281-05e2a66c3dba%2FDB_monami.jpg?table=block&id=18c1860f-b436-4525-906e-84e8da3b5b7f&spaceId=0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4&width=1920&userId=0e6154aa-c9b2-4203-b101-11edd2f4e75e&cache=v2",
      },
      API: {
        linkHref:
          "https://docs.google.com/spreadsheets/d/1vhXxXnq8USwhTQ9C0xPuTlby4YMrF9Xb60H8jOam0qI/edit?usp=sharing",
      },
      PPT: {
        linkHref:
          "https://tropical-trouser-a8d.notion.site/9513359c529b4d69891c145e707ef57d?pvs=4",
      },
      deploy: {
        linkHref:
          "http://ec2-3-37-244-154.ap-northeast-2.compute.amazonaws.com/",
      },
      // description: {
      //   linkHref:
      //     "https://docs.google.com/spreadsheets/d/12ZmKxAXc7FT7kGRa6ppcQjZ4lxzcqKPNQoAOcQuES2U/edit#gid=0",
      // },
      userFlow: {
        linkHref:
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4%2F5897374c-8704-4241-9035-763603d037be%2FUntitled.png?table=block&id=6e741d4b-b93e-4c8d-b917-9ea8f17c7f28&spaceId=0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4&width=1920&userId=0e6154aa-c9b2-4203-b101-11edd2f4e75e&cache=v2",
      },
    },

    informationSection: {
      projectName: "Monami project",
      startDate: "23.06.01",
      endDate: "23.06.30",
      projectRepository:
        "https://github.com/JEONGDEOKJIN/projects/tree/master/Monami",
      projectDocuments:
        "https://tropical-trouser-a8d.notion.site/483e05ee8c4a492da02634bc280e83c2?pvs=4",
      DEVBlog: "https://deokjin.gitbook.io/dj",
      justStudyBlog: "https://hello-5200.tistory.com/",
    },

    demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
    image: "image1.jpg",
    title: "gooe",
    demoVideo_2: "video1.mp4",
    category: "feature",
    fsd_smallcategory: "small category",
    fsd_mediumcategory: "project",
  },
];
export const dummyAWAProject = [
  {
    id: 1,

    projectName: "AWA project",

    projectDemo: "/projects/AWA/demo/WesAnderson_ver2.mp4",

    // AWA 는 아키텍처 없으므로 생략
    // architectureImageHref: [
    //   {
    //     id: 0,
    //     type: "carousel",
    //     href: "/projects/monami/architecture/monami_archi.png",
    //   },
    //   // { id: 1, type: "carousel", href: "/projects/sto/archi_publish.png" },
    //   // { id: 2, type: "carousel", href: "/projects/sto/archi_tracking.png" },
    //   // { id: 3, type: "carousel", href: "/projects/sto/archi_vote.png" },
    // ],

    architectureImageThumbnail:
      "/projects/monami/architecture/monami_archi.png",

    stacks: ["HTML", "CSS", "Javascript"],

    serviceDesc:
      "'색감의 미학' 으로 알려진 웨스 앤더슨 감독. 그의 영화에 나올법한 사진 및 장소를 모아놓은 AWA 사이트(https://accidentallywesanderson.com)가 너무 아름다워서 시작한 클론 프로젝트",

    team: {
      frontend: "4명",
      backend: "0명",
      etc: "팀원 모두 FE 개발",
    },

    myRole: "main 페이지의 frontend 담당",

    // 테이블 UI 설명은 MainFeature.tsx 컴포넌트에서 진행
    mainFeatureUI: [
      {
        type: "carousel",
        desc: "메인 페이지",
        href: "/projects/AWA/features/WesMain.jpg",
      },
      {
        type: "carousel",
        desc: "메인 페이지",
        href: "/projects/AWA/features/Mainpage_2.png",
      },
      {
        type: "carousel",
        desc: "메인 페이지",
        href: "/projects/AWA/features/Mainpage_3.png",
      },
      {
        type: "carousel",
        desc: "메인 페이지",
        href: "/projects/AWA/features/Mainpage_4.png",
      },
      {
        type: "carousel",
        desc: "컬렉션 페이지",
        href: "/projects/AWA/features/detail_1.png",
      },
      {
        type: "carousel",
        desc: "컬렉션 페이지",
        href: "/projects/AWA/features/detail_2.png",
      },
    ],

    // 주요 기술 과제 : MainFeature 컴포넌트
    // 협업방식 : Communication 컴포넌트

    deliverabes: {
      ERD: {
        linkHref:
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4%2Fb8d75664-70aa-4909-8281-05e2a66c3dba%2FDB_AWA.jpg?table=block&id=18c1860f-b436-4525-906e-84e8da3b5b7f&spaceId=0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4&width=1920&userId=0e6154aa-c9b2-4203-b101-11edd2f4e75e&cache=v2",
      },
      API: {
        linkHref:
          "https://docs.google.com/spreadsheets/d/1vhXxXnq8USwhTQ9C0xPuTlby4YMrF9Xb60H8jOam0qI/edit?usp=sharing",
      },
      PPT: {
        linkHref:
          "https://tropical-trouser-a8d.notion.site/9513359c529b4d69891c145e707ef57d?pvs=4",
      },
      deploy: {
        linkHref:
          "http://ec2-3-37-244-154.ap-northeast-2.compute.amazonaws.com/",
      },
      // description: {
      //   linkHref:
      //     "https://docs.google.com/spreadsheets/d/12ZmKxAXc7FT7kGRa6ppcQjZ4lxzcqKPNQoAOcQuES2U/edit#gid=0",
      // },
      userFlow: {
        linkHref:
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4%2F5897374c-8704-4241-9035-763603d037be%2FUntitled.png?table=block&id=6e741d4b-b93e-4c8d-b917-9ea8f17c7f28&spaceId=0cae17fc-ff5c-424e-96d6-f2bfc4d7beb4&width=1920&userId=0e6154aa-c9b2-4203-b101-11edd2f4e75e&cache=v2",
      },
    },

    informationSection: {
      projectName: "AWA project",
      startDate: "23.04.01",
      endDate: "23.04.30",
      projectRepository:
        "https://github.com/JEONGDEOKJIN/projects/tree/master/WesAnderson_Project_MW",
      projectDocuments:
        "https://tropical-trouser-a8d.notion.site/Wes-Anderson-a0ee2ca54ac64a309940b7a5ad452d66?pvs=4",
      DEVBlog: "https://deokjin.gitbook.io/dj",
      justStudyBlog: "https://hello-5200.tistory.com/",
    },

    demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
    image: "image1.jpg",
    title: "gooe",
    demoVideo_2: "video1.mp4",
    category: "feature",
    fsd_smallcategory: "small category",
    fsd_mediumcategory: "project",
  },
];

export const dummyProjectList = [
  {
    projectId: 1, // 프로젝트 id
    name: "Monami 프로젝트", // project 이름

    startDate: "2023-06-01", // 프로젝트 시작일
    endDate: "2023-06-01", // 프로젝트 시작일

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
