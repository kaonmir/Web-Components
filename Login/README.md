# Login page
* css animation을 넣어서 만든 로그인 페이지다.
* Web storage API를 사용하여 창을 닫았다 열어도 로그인이 유지되도록 만들었다.
### Client
* React로 만들었다.
* 입력 오류(username, password, invalid)가 났을 경우 아래에 빨간 글씨로 주저리 주저리 간섭한다.
* 입력 칸에서 enter를 누르면 바로 submit되도록 만들었다.
* 이 페이지를 실행하면 local storage의 hidden을 확인하여 이미 로그인이 되어 있는지 확인한다.
### Server
* Node.js로 만들었다.
* DB로 mysql을 사용했고 query문으로 아이디와 비밀번호를 확인한다.
* 올바르면 valid하다는 정보와 hidden number를 같이 보내 client의 local storage에 저장한다.
* hidden 값이 들어오면 비교하여 그 결과를 반환한다.
### 부가기능
* 타이머 기능을 넣어 로그인 지속 시간을 정한다. 지속 시간은 서버 쪽 변수로 정한다.
