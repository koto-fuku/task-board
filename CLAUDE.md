# Task Board Project

## Project Overview

React + TypeScript + Vite で構築したタスク管理ボードアプリケーション。

## Tech Stack

| カテゴリ | 技術 | バージョン |
|---|---|---|
| UIライブラリ | React | ^19.2 |
| 言語 | TypeScript | ~6.0 |
| ビルドツール | Vite | ^8.0 |
| スタイリング | Plain CSS | — |
| 状態管理 | React useState / useEffect | — |
| 永続化 | localStorage | — |
| デプロイ | GitHub Pages / GitHub Actions | — |

外部UIライブラリ・CSSフレームワークは使用しない。

## Deploy

- 本番URL: **https://koto-fuku.github.io/task-board/**
- `main` ブランチへのプッシュで GitHub Actions が自動ビルド＆デプロイ
- ワークフロー: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## Component Naming Conventions

### ファイル・コンポーネント名

- コンポーネントファイルは **PascalCase** — `App.tsx`, `TaskList.tsx`, `TaskItem.tsx`
- コンポーネント関数も **PascalCase** — `export default function TaskItem() {}`
- 1ファイル1コンポーネントを基本とする

### 型・インターフェース

- 型エイリアスは **PascalCase** — `type Task = { ... }`

### 変数・関数

- 変数・関数は **camelCase** — `addTask`, `toggleTask`, `deleteTask`
- 定数（変化しない値）は **UPPER_SNAKE_CASE** — `const STORAGE_KEY = 'tasks'`
- イベントハンドラは `handle` プレフィックス — `handleKeyDown`, `handleSubmit`

### CSSクラス名

- **kebab-case** — `.task-list`, `.task-text`, `.input-row`
- 状態修飾は単一クラスで付与 — `<li className={task.done ? 'task done' : 'task'}>`

## Development

```bash
npm install    # 依存関係インストール
npm run dev    # 開発サーバー起動
npm run build  # プロダクションビルド
```

## Git Operation Rules

**コードを変更するたびに、必ずGitHubにプッシュすること。**

具体的な手順：

1. 変更をステージング
   ```
   git add <変更ファイル>
   ```
2. コミット（変更内容を明確に記述）
   ```
   git commit -m "変更内容の説明"
   ```
3. GitHubへプッシュ
   ```
   git push origin <ブランチ名>
   ```

### Commit Message Convention

- `feat:` 新機能の追加
- `fix:` バグ修正
- `refactor:` リファクタリング（動作変更なし）
- `style:` コードフォーマットの修正
- `docs:` ドキュメントの更新
- `chore:` ビルド・設定ファイルの変更

例：
```
feat: タスク追加フォームを実装
fix: タスク削除時にUIが更新されない問題を修正
```

### Branch Strategy

- `main` — 本番相当の安定ブランチ
- 機能追加は `feature/<機能名>` ブランチで作業し、完了後に `main` へマージ

## Development Guidelines

- コミット前にビルドエラーがないことを確認する（`npm run build`）
- 機密情報（APIキー、パスワード等）は絶対にコミットしない（`.env` は `.gitignore` に含める）
- `node_modules/` や `dist/` はコミットしない
