# TypeScript Study Archive

이 저장소는 TypeScript 학습을 위한 아카이브입니다. 기초부터 고급 개념까지 단계별로 학습할 수 있도록 구성되어 있습니다.

## 폴더 구조

````
study-archive/
└── typescript/
    ├── README.md
    ├── basics/
    │   ├── 01-types/
    │   │   ├── basic-types.ts
    │   │   ├── interfaces.ts
    │   │   └── exercises/
    │   ├── 02-functions/
    │   │   ├── function-types.ts
    │   │   ├── parameters.ts
    │   │   └── exercises/
    │   └── 03-classes/
    │       ├── class-basics.ts
    │       ├── inheritance.ts
    │       └── exercises/
    ├── intermediate/
    │   ├── 01-generics/
    │   └── 02-type-inference/
    ├── advanced/
    │   ├── 01-utility-types/
    │   ├── 02-mapped-types/
    │   └── 03-conditional-types/
    └── projects/
        ├── project-1/
        └── project-2/

## 설치 및 설정

1. Node.js 설치 (https://nodejs.org)
2. TypeScript 전역 설치:
```bash
npm install -g typescript
````

3. 프로젝트 초기화:

```bash
cd study-archive/typescript
npm init -y
npm install typescript @types/node --save-dev
```

## 사용 방법

각 챕터별 예제 코드는 해당 폴더에서 다음과 같이 실행할 수 있습니다:

```bash
tsc filename.ts
node filename.js
```

또는 ts-node를 사용하여 직접 실행:

```bash
npm install -g ts-node
ts-node filename.ts
```

## 학습 진행 방법

1. basics 폴더부터 시작하여 순차적으로 학습을 진행합니다.
2. 각 주제별 폴더에는 예제 코드와 연습문제가 포함되어 있습니다.
3. exercises 폴더의 문제들을 해결하면서 학습내용을 복습합니다.
4. projects 폴더의 프로젝트를 통해 실전 경험을 쌓습니다.

## 참고 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

## 학습 체크리스트

- [ ] 기본 타입 이해하기
- [ ] 인터페이스와 타입 별칭
- [ ] 함수 타입
- [ ] 클래스와 상속
- [ ] 제네릭
- [ ] 타입 추론
- [ ] 고급 타입
- [ ] 실전 프로젝트 완성
