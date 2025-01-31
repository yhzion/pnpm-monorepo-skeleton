# pnpm-monorepo-skeleton

pnpm을 사용한 모노레포 프로젝트의 기본 구조입니다.

## 프로젝트 구조

```
.
├── apps/           # 애플리케이션 코드
├── packages/       # 공유 패키지
├── coverage/       # 테스트 커버리지 리포트
├── dist/          # 빌드 결과물
├── package.json    # 루트 패키지 설정
└── pnpm-workspace.yaml
```

## 기술 스택

- TypeScript 5.7+
- pnpm (패키지 매니저)
- Vitest 3.0+ (테스트 프레임워크)
- ESLint 9.19+ (코드 린터)
- Prettier 3.4+ (코드 포맷터)
- Husky (Git 훅 관리)
- lint-staged (스테이징된 파일 린팅)

## 필수 요구사항

- Node.js 16.x 이상
- pnpm 8.x 이상

## 설치

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

# 프로젝트 클린 (node_modules, dist 삭제 및 재설치)
pnpm clean

# 프로젝트 전반적인 상태 체크 (clean, build, test, lint, format)
pnpm health
```

## Git Hooks

- pre-commit: 커밋 전 린트와 포맷팅 검사

## 라이선스

MIT
