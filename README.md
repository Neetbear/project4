# project4
### 코인 거래소 만들기 프로젝트

라이트코인 0.15 버전 기반 코인 발행 (도넛코인)
https://github.com/litecoin-project/litecoin.git
발행 과정에서 여러 기능들을 테스트 해보았고 보상수량과 숙성량을 조절해보았다
```
src/validation.cpp 
    CAmount nSubsidy = 500 * COIN; // 보상수량 조절
src/consensus/consensus.h에서
    static const int COINBASE_MATURITY = 10; // 숙성량 조절
```

메인 홈페이지 upbit open api 기반
aws 클라우드 - mongoDB 사용

donutcoin-cli(cli는 코인 소스를 실행시키기 위한 tool)을 사용하여 명령 줄에서 RPC(coin core의 procedure를 http protocol을 이용하여 호출해주는데 사용) 명령을 코인으로 보낼 수 있다.
예) 회원가입 유저에게 지갑을 생성해주거나 유저가 원하는 블록등의 정보를 확인해주고 또한 거래시 실제로 지갑에서 지갑으로 코인을 보내줄 수 있다
https://litecoin.info/index.php/Litecoin_API
```
// conf 파일 기본 구성
rpcuser=rpc유저
rpcpassword=rpc유저의 비밀번호
# rpc접속에 필요한 유저와 비밀번호를 설정합니다.

rpcallowip=rpc를 허용할 ip

#추가 허용 ip가 있을경우 아래에 추가합니다. 형식은 포트번호를 제외한 ip만 입력합니다.

rpcport=rpc포트

rpcthreads=4
#rpc 호출을 처리할 스래드 개수 디폴트:4
```

### 결론 및 느낀점
api를 가져다 쓰는데서 다른 사람들이 만든 코드를 고쳐 쓰는 것이 생각보다 어렵다는 사실을 알았습니다 
또한 코인 빌드에서 os나 버전에 따라서 다양한 오류가 발생하는 것을 확인하였습니다
결국 업비트 코인 api를 수정하는데 어려움을 느껴 거래 기능을 원하는 방식으로 수정하는데 실패를 경험했습니다 
