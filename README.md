# project4
### 코인 거래소 만들기 프로젝트

라이트코인 0.15 버전 기반 코인 발행 
```
src/validation.cpp 
    CAmount nSubsidy = 500 * COIN; // 보상수량 조절
src/consensus/consensus.h에서
    static const int COINBASE_MATURITY = 10; // 숙성량 조절
```
