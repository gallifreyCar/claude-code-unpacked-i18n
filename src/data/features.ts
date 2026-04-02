// Hidden/Unreleased features from Claude Code source

export interface HiddenFeature {
  id: string;
  name: string;
  description: {
    en: string;
    zh: string;
    ja: string;
  };
  deepWikiUrl?: string;
}

export const hiddenFeatures: HiddenFeature[] = [
  {
    id: 'buddy',
    name: 'Buddy',
    description: {
      en: 'A virtual pet that lives in your terminal. Species and rarity are derived from your account ID.',
      zh: '生活在你的终端中的虚拟宠物。物种和稀有度源自你的账户 ID。',
      ja: 'ターミナルに住むバーチャルペット。種族とレアリティはアカウントIDから派生します。',
    },
    deepWikiUrl: 'https://deepwiki.com/search/how-does-the-buddy-feature-wor_2d64811c-634e-476c-9461-46a6252b8edd?mode=fast',
  },
  {
    id: 'kairos',
    name: 'Kairos',
    description: {
      en: 'Persistent mode with memory consolidation between sessions and autonomous background actions.',
      zh: '持久模式，支持会话间的记忆整合和自主后台操作。',
      ja: 'セッション間のメモリ統合と自律的なバックグラウンドアクションを持つ永続モード。',
    },
    deepWikiUrl: 'https://deepwiki.com/search/how-does-the-kairos-feature-wo_3576a384-da6e-4072-ad5c-bd2d8e26e12c?mode=fast',
  },
  {
    id: 'ultraplan',
    name: 'UltraPlan',
    description: {
      en: 'Long planning sessions on Opus-class models, up to 30-minute execution windows.',
      zh: '在 Opus 级模型上进行长时间规划会话，执行窗口最长 30 分钟。',
      ja: 'Opusクラスのモデルで長時間のプランニングセッション、最大30分の実行ウィンドウ。',
    },
    deepWikiUrl: 'https://deepwiki.com/search/how-does-the-ultraplan-feature_8ca6fc2e-8748-40a7-a620-274c08e1f327?mode=fast',
  },
  {
    id: 'coordinator',
    name: 'Coordinator Mode',
    description: {
      en: 'A lead agent breaks tasks apart, spawns parallel workers in isolated git worktrees, collects results.',
      zh: '主代理分解任务，在隔离的 git worktree 中生成并行工作器，收集结果。',
      ja: 'リードエージェントがタスクを分割し、隔離されたgit worktreeで並列ワーカーを生成し、結果を収集します。',
    },
    deepWikiUrl: 'https://deepwiki.com/search/how-does-the-coordinator-mode_4039dc3a-6099-4b9f-b7a1-8c325bd1408a?mode=fast',
  },
  {
    id: 'bridge',
    name: 'Bridge',
    description: {
      en: 'Control Claude Code from your phone or a browser. Full remote session with permission approvals.',
      zh: '从手机或浏览器控制 Claude Code。完整的远程会话，带权限审批。',
      ja: 'スマホやブラウザからClaude Codeを制御。権限承認付きの完全なリモートセッション。',
    },
    deepWikiUrl: 'https://deepwiki.com/search/how-does-the-bridge-feature-wo_c49c5b30-85e4-45e1-8ad8-b2d97eaea726?mode=fast',
  },
  {
    id: 'daemon',
    name: 'Daemon Mode',
    description: {
      en: 'Run sessions in the background with `--bg`. Uses `tmux` under the hood.',
      zh: '使用 `--bg` 在后台运行会话。底层使用 `tmux`。',
      ja: '`--bg`でバックグラウンドでセッションを実行。裏では`tmux`を使用。',
    },
    deepWikiUrl: 'https://deepwiki.com/search/how-does-the-daemon-mode-featu_8ecab5b1-6631-48eb-942f-b5eff8dfbe71?mode=fast',
  },
  {
    id: 'uds-inbox',
    name: 'UDS Inbox',
    description: {
      en: 'Sessions talk to each other over Unix domain sockets.',
      zh: '会话通过 Unix domain sockets 相互通信。',
      ja: 'セッションがUnixドメインソケットを介して通信します。',
    },
    deepWikiUrl: 'https://deepwiki.com/search/how-does-the-uds-inbox-feature_fd97d225-9297-4991-bbdd-d7c9096426c9?mode=fast',
  },
  {
    id: 'autodream',
    name: 'Auto-Dream',
    description: {
      en: 'Between sessions, the AI reviews what happened and organizes what it learned.',
      zh: '会话之间，AI 会回顾发生的事情并整理学到的内容。',
      ja: 'セッションの間、AIは何が起こったかをレビューし、学んだことを整理します。',
    },
    deepWikiUrl: 'https://deepwiki.com/search/how-does-the-autodream-feature_86ca103d-7743-4c3d-a77b-80a8361d33a9?mode=fast',
  },
];
