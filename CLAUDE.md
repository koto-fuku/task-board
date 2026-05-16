# Task Board Project

## Project Overview

React + TypeScript + Vite で構築したタスク管理ボードアプリケーション。

## Tech Stack

- React 19
- TypeScript
- Vite 8

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
