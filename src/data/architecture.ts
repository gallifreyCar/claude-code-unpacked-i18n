// Architecture data from Claude Code source

export interface Directory {
  name: string;
  files: number;
  description: {
    en: string;
    zh: string;
    ja: string;
  };
  category: string;
}

export const directories: Directory[] = [
  {
    name: 'utils/',
    files: 564,
    description: {
      en: 'Shared utility modules — the largest directory by far',
      zh: '共享实用模块 — 最大的目录',
      ja: '共有ユーティリティモジュール — 最大のディレクトリ',
    },
    category: 'Support & Utilities',
  },
  {
    name: 'components/',
    files: 389,
    description: {
      en: 'React (`Ink`) components for the terminal UI',
      zh: '终端 UI 的 React (`Ink`) 组件',
      ja: 'ターミナルUI用のReact (`Ink`) コンポーネント',
    },
    category: 'UI Layer',
  },
  {
    name: 'commands/',
    files: 189,
    description: {
      en: '95 CLI command handlers — from `/init` to `/ultraplan`',
      zh: '95 个 CLI 命令处理器 — 从 `/init` 到 `/ultraplan`',
      ja: '95個のCLIコマンドハンドラ — `/init`から`/ultraplan`まで',
    },
    category: 'Tools & Commands',
  },
  {
    name: 'tools/',
    files: 184,
    description: {
      en: '42 built-in tool implementations plus 11 feature-gated tools',
      zh: '42 个内置工具实现加上 11 个功能门控工具',
      ja: '42個の組み込みツール実装と11個の機能ゲート付きツール',
    },
    category: 'Tools & Commands',
  },
  {
    name: 'services/',
    files: 130,
    description: {
      en: 'Core service layer — API, MCP, compaction, streaming, analytics',
      zh: '核心服务层 — API、MCP、压缩、流式传输、分析',
      ja: 'コアサービス層 — API、MCP、圧縮、ストリーミング、分析',
    },
    category: 'Core Processing',
  },
  {
    name: 'hooks/',
    files: 104,
    description: {
      en: 'React hooks for terminal UI state management',
      zh: '终端 UI 状态管理的 React hooks',
      ja: 'ターミナルUIの状態管理用React hooks',
    },
    category: 'UI Layer',
  },
  {
    name: 'ink/',
    files: 96,
    description: {
      en: '`Ink` framework extensions — React rendering in the terminal via `Yoga` flexbox',
      zh: '`Ink` 框架扩展 — 通过 `Yoga` flexbox 在终端中进行 React 渲染',
      ja: '`Ink`フレームワーク拡張 — `Yoga` flexboxによるターミナルでのReactレンダリング',
    },
    category: 'UI Layer',
  },
  {
    name: 'bridge/',
    files: 31,
    description: {
      en: 'Remote control infrastructure — control Claude Code from phone or browser',
      zh: '远程控制基础设施 — 从手机或浏览器控制 Claude Code',
      ja: 'リモートコントロールインフラ — スマホやブラウザからClaude Codeを制御',
    },
    category: 'Infrastructure',
  },
  {
    name: 'constants/',
    files: 21,
    description: {
      en: 'Configuration constants, feature flags, default values',
      zh: '配置常量、功能标志、默认值',
      ja: '設定定数、機能フラグ、デフォルト値',
    },
    category: 'Support & Utilities',
  },
  {
    name: 'skills/',
    files: 20,
    description: {
      en: 'Skill system — loadable prompt modules for specialized tasks',
      zh: '技能系统 — 可加载的专用任务提示模块',
      ja: 'スキルシステム — 専門タスク用のロード可能なプロンプトモジュール',
    },
    category: 'Tools & Commands',
  },
  {
    name: 'cli/',
    files: 19,
    description: {
      en: 'CLI transport layer — `stdin`/`stdout`, `NDJSON`, remote IO',
      zh: 'CLI 传输层 — `stdin`/`stdout`、`NDJSON`、远程 IO',
      ja: 'CLIトランスポート層 — `stdin`/`stdout`、`NDJSON`、リモートIO',
    },
    category: 'Infrastructure',
  },
  {
    name: 'keybindings/',
    files: 14,
    description: {
      en: 'Terminal keyboard shortcuts and Vim mode bindings',
      zh: '终端键盘快捷键和 Vim 模式绑定',
      ja: 'ターミナルのキーボードショートカットとVimモードバインディング',
    },
    category: 'UI Layer',
  },
  {
    name: 'tasks/',
    files: 12,
    description: {
      en: 'Background task management for agent sub-tasks',
      zh: '代理子任务的后台任务管理',
      ja: 'エージェントのサブタスク用バックグラウンドタスク管理',
    },
    category: 'Core Processing',
  },
  {
    name: 'types/',
    files: 11,
    description: {
      en: 'Shared TypeScript type definitions',
      zh: '共享 TypeScript 类型定义',
      ja: '共有TypeScript型定義',
    },
    category: 'Support & Utilities',
  },
  {
    name: 'migrations/',
    files: 11,
    description: {
      en: 'Data migration scripts between versions',
      zh: '版本间的数据迁移脚本',
      ja: 'バージョン間のデータ移行スクリプト',
    },
    category: 'Infrastructure',
  },
  {
    name: 'context/',
    files: 9,
    description: {
      en: 'Context assembly — `CLAUDE.md`, tools, memory, system prompt',
      zh: '上下文组装 — `CLAUDE.md`、工具、内存、系统提示',
      ja: 'コンテキストアセンブリ — `CLAUDE.md`、ツール、メモリ、システムプロンプト',
    },
    category: 'Core Processing',
  },
  {
    name: 'memdir/',
    files: 8,
    description: {
      en: 'Persistent memory directory — session-to-session knowledge',
      zh: '持久化内存目录 — 会话到会话的知识',
      ja: '永続メモリディレクトリ — セッション間の知識',
    },
    category: 'Core Processing',
  },
  {
    name: 'entrypoints/',
    files: 8,
    description: {
      en: 'CLI bootstrap — main entry points for the `claude` command',
      zh: 'CLI 引导 — `claude` 命令的主入口点',
      ja: 'CLIブートストラップ — `claude`コマンドのメインエントリーポイント',
    },
    category: 'Infrastructure',
  },
  {
    name: 'state/',
    files: 6,
    description: {
      en: 'Global state management stores',
      zh: '全局状态管理存储',
      ja: 'グローバル状態管理ストア',
    },
    category: 'Core Processing',
  },
  {
    name: 'buddy/',
    files: 6,
    description: {
      en: 'AI companion pet — an easter egg with species, rarity, and personality',
      zh: 'AI 伴侣宠物 — 带有物种、稀有度和个性的彩蛋',
      ja: 'AIコンパニオンペット — 種族、レアリティ、性格を持つイースターエッグ',
    },
    category: 'Personality & UX',
  },
  {
    name: 'vim/',
    files: 5,
    description: {
      en: 'Vim mode — modal editing keybindings for the terminal UI',
      zh: 'Vim 模式 — 终端 UI 的模态编辑按键绑定',
      ja: 'Vimモード — ターミナルUIのモーダル編集キーバインド',
    },
    category: 'UI Layer',
  },
  {
    name: 'remote/',
    files: 4,
    description: {
      en: 'Remote session management',
      zh: '远程会话管理',
      ja: 'リモートセッション管理',
    },
    category: 'Infrastructure',
  },
  {
    name: 'server/',
    files: 3,
    description: {
      en: '`HTTP`/`WebSocket` server for bridge and remote modes',
      zh: '用于桥接和远程模式的 `HTTP`/`WebSocket` 服务器',
      ja: 'ブリッジとリモートモード用の`HTTP`/`WebSocket`サーバー',
    },
    category: 'Infrastructure',
  },
  {
    name: 'voice/',
    files: 1,
    description: {
      en: 'Voice mode — microphone input for hands-free coding',
      zh: '语音模式 — 免提编码的麦克风输入',
      ja: '音声モード — ハンズフリーコーディング用のマイク入力',
    },
    category: 'Personality & UX',
  },
];

export const categories = [
  'Tools & Commands',
  'Core Processing',
  'UI Layer',
  'Infrastructure',
  'Support & Utilities',
  'Personality & UX',
];

export const stats = {
  files: '1,900+',
  linesOfCode: '519K+',
  tools: '53+',
  commands: '95+',
};
