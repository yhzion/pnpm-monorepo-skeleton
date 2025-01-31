# pnpm-monorepo-skeleton

pnpm을 사용한 모노레포 프로젝트의 기본 구조입니다.

## 프로젝트 구조

```
.
├── apps/           # 애플리케이션 코드
├── packages/       # 공유 패키지
├── package.json    # 루트 패키지 설정
└── pnpm-workspace.yaml
```

## 기술 스택

- TypeScript
- pnpm (패키지 매니저)
- Vitest (테스트 프레임워크)
- ESLint (코드 린터)
- Prettier (코드 포맷터)

## 시작하기

### 필수 요구사항

- Node.js 16.x 이상
- pnpm 8.x 이상

### 설치

```bash
# 의존성 설치
pnpm install
```

## 사용 가능한 스크립트

```bash
# 개발 모드 실행
pnpm dev

# 전체 빌드
pnpm build

# 린트 검사
pnpm lint

# 코드 포맷팅
pnpm format

# 테스트 실행
pnpm test

# 테스트 감시 모드
pnpm test:watch

# 테스트 커버리지 확인
pnpm test:coverage

# 프로젝트 클린
pnpm clean
```

## 라이선스

MIT
