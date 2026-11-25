# 네컷사진 부스 (PWA)

## 1. 구글 OAuth 클라이언트 ID 발급 (1회)
1. console.cloud.google.com → 프로젝트 생성
2. API 및 서비스 → 라이브러리 → **Google Drive API** 사용 설정
3. OAuth 동의 화면 → 외부 → **테스트 사용자**에 본인 구글 계정 추가
4. 사용자 인증 정보 → OAuth 클라이언트 ID → **웹 애플리케이션**
   - 승인된 JavaScript 원본: `https://<깃허브아이디>.github.io`
   - 로컬 테스트용: `http://localhost:8000`
5. 발급된 ID를 `config.js`에 붙여넣기 (공개 ID라 커밋 가능. 클라이언트 보안 비밀은 사용하지 않음)

## 2. 배포 (GitHub Pages)
이 폴더 자체를 새 저장소로 만들어 push → Settings → Pages → main / root.

## 3. 갤럭시 탭 설치
크롬으로 주소 접속 → 메뉴 → 홈 화면에 추가 → 전체화면·가로모드로 실행.

## 로컬 테스트
`python -m http.server 8000` 후 `http://localhost:8000`

## 메모
- 촬영 간격: `index.html`의 `INTERVAL`, 프레임 정의: `FRAMES`
- 드라이브에는 `drive.file` 권한(이 앱이 만든 파일만 접근)으로 내 드라이브 루트에 업로드
