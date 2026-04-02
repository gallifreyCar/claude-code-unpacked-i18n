// Command data extracted from Claude Code source

export interface Command {
  name: string;
  description: {
    en: string;
    zh: string;
    ja: string;
  };
  category: string;
  featureGated?: boolean;
}

export interface CommandCategory {
  id: string;
  name: {
    en: string;
    zh: string;
    ja: string;
  };
  commands: Command[];
}

export const commandCategories: CommandCategory[] = [
  {
    id: 'setup',
    name: {
      en: 'Setup & Config',
      zh: '设置与配置',
      ja: 'セットアップと設定',
    },
    commands: [
      { name: '/init', description: { en: 'Initialize a project with a CLAUDE.md file', zh: '使用 CLAUDE.md 文件初始化项目', ja: 'CLAUDE.mdファイルでプロジェクトを初期化する' }, category: 'setup' },
      { name: '/login', description: { en: 'Authenticate with your Anthropic account', zh: '使用 Anthropic 账户认证', ja: 'Anthropicアカウントで認証する' }, category: 'setup' },
      { name: '/logout', description: { en: 'Sign out of your Anthropic account', zh: '登出 Anthropic 账户', ja: 'Anthropicアカウントからログアウトする' }, category: 'setup' },
      { name: '/config', description: { en: 'View or modify Claude Code configuration', zh: '查看或修改 Claude Code 配置', ja: 'Claude Codeの設定を表示・変更する' }, category: 'setup' },
      { name: '/permissions', description: { en: 'View and manage tool permissions', zh: '查看和管理工具权限', ja: 'ツールの権限を表示・管理する' }, category: 'setup' },
      { name: '/model', description: { en: 'Switch the active AI model', zh: '切换当前 AI 模型', ja: 'アクティブなAIモデルを切り替える' }, category: 'setup' },
      { name: '/theme', description: { en: 'Change the terminal color theme', zh: '更改终端颜色主题', ja: 'ターミナルのカラーテーマを変更する' }, category: 'setup' },
      { name: '/terminal-setup', description: { en: 'Install terminal key bindings', zh: '安装终端按键绑定', ja: 'ターミナルのキーバインドをインストールする' }, category: 'setup' },
      { name: '/doctor', description: { en: 'Diagnose common setup issues', zh: '诊断常见设置问题', ja: '一般的なセットアップの問題を診断する' }, category: 'setup' },
      { name: '/mcp', description: { en: 'Manage Model Context Protocol servers', zh: '管理模型上下文协议服务器', ja: 'Model Context Protocolサーバーを管理する' }, category: 'setup' },
      { name: '/hooks', description: { en: 'View hook configurations for tool events', zh: '查看工具事件的钩子配置', ja: 'ツールイベントのフック設定を表示する' }, category: 'setup' },
    ],
  },
  {
    id: 'workflow',
    name: {
      en: 'Daily Workflow',
      zh: '日常工作流',
      ja: '日次ワークフロー',
    },
    commands: [
      { name: '/compact', description: { en: 'Clear conversation history but keep a summary in context', zh: '清除对话历史但在上下文中保留摘要', ja: '会話履歴をクリアするが、コンテキストにサマリーを保持する' }, category: 'workflow' },
      { name: '/memory', description: { en: 'Read and write to persistent memory files', zh: '读写持久化内存文件', ja: '永続的なメモリファイルの読み書きを行う' }, category: 'workflow' },
      { name: '/context', description: { en: 'Visualize current context usage as a colored grid', zh: '以彩色网格可视化当前上下文使用情况', ja: '現在のコンテキスト使用状況をカラーグリッドで可視化する' }, category: 'workflow' },
      { name: '/plan', description: { en: 'Enable plan mode or view the current session plan', zh: '启用规划模式或查看当前会话计划', ja: 'プランニングモードを有効にするか、現在のセッションプランを表示する' }, category: 'workflow' },
      { name: '/resume', description: { en: 'Resume a previous session or plan', zh: '恢复之前的会话或计划', ja: '以前のセッションまたはプランを再開する' }, category: 'workflow' },
      { name: '/session', description: { en: 'Show remote session URL and QR code', zh: '显示远程会话 URL 和二维码', ja: 'リモートセッションのURLとQRコードを表示する' }, category: 'workflow' },
      { name: '/files', description: { en: 'List files currently in context', zh: '列出当前上下文中的文件', ja: '現在コンテキストにあるファイルを表示する' }, category: 'workflow' },
      { name: '/add-dir', description: { en: 'Add a directory to the working context', zh: '将目录添加到工作上下文', ja: '作業コンテキストにディレクトリを追加する' }, category: 'workflow' },
      { name: '/copy', description: { en: 'Copy Claude\'s last response to clipboard', zh: '将 Claude 的最后回复复制到剪贴板', ja: 'Claudeの最後の応答をクリップボードにコピーする' }, category: 'workflow' },
      { name: '/export', description: { en: 'Export the current conversation to a file or clipboard', zh: '将当前对话导出到文件或剪贴板', ja: '現在の会話をファイルまたはクリップボードにエクスポートする' }, category: 'workflow' },
      { name: '/summary', description: { en: 'Generate a summary of the current session', zh: '生成当前会话的摘要', ja: '現在のセッションのサマリーを生成する' }, category: 'workflow' },
      { name: '/clear', description: { en: 'Clear conversation history and free up context', zh: '清除对话历史并释放上下文', ja: '会話履歴をクリアしてコンテキストを解放する' }, category: 'workflow' },
      { name: '/brief', description: { en: 'Toggle brief response mode', zh: '切换简短回复模式', ja: '簡潔な応答モードを切り替える' }, category: 'workflow' },
      { name: '/vim', description: { en: 'Toggle vim keybindings for input', zh: '切换输入的 vim 按键绑定', ja: '入力のvimキーバインドを切り替える' }, category: 'workflow' },
      { name: '/keybindings', description: { en: 'View and customize keyboard shortcuts', zh: '查看和自定义键盘快捷键', ja: 'キーボードショートカットを表示・カスタマイズする' }, category: 'workflow' },
      { name: '/skills', description: { en: 'List available skills', zh: '列出可用技能', ja: '利用可能なスキルを表示する' }, category: 'workflow' },
      { name: '/tasks', description: { en: 'Manage background tasks and parallel work', zh: '管理后台任务和并行工作', ja: 'バックグラウンドタスクと並列作業を管理する' }, category: 'workflow' },
      { name: '/agents', description: { en: 'Manage agent configurations', zh: '管理代理配置', ja: 'エージェント設定を管理する' }, category: 'workflow' },
      { name: '/fast', description: { en: 'Toggle fast mode for quicker responses', zh: '切换快速模式以获得更快的响应', ja: 'より高速な応答のためにファストモードを切り替える' }, category: 'workflow' },
      { name: '/effort', description: { en: 'Set the thinking effort level', zh: '设置思考努力级别', ja: '思考の努力レベルを設定する' }, category: 'workflow' },
      { name: '/help', description: { en: 'Show available commands and usage information', zh: '显示可用命令和用法信息', ja: '利用可能なコマンドと使用方法を表示する' }, category: 'workflow' },
      { name: '/exit', description: { en: 'Exit Claude Code', zh: '退出 Claude Code', ja: 'Claude Codeを終了する' }, category: 'workflow' },
      { name: '/rename', description: { en: 'Rename the current conversation', zh: '重命名当前对话', ja: '現在の会話の名前を変更する' }, category: 'workflow' },
    ],
  },
  {
    id: 'git',
    name: {
      en: 'Code Review & Git',
      zh: '代码审查与 Git',
      ja: 'コードレビューとGit',
    },
    commands: [
      { name: '/review', description: { en: 'Review a pull request', zh: '审查拉取请求', ja: 'プルリクエストをレビューする' }, category: 'git' },
      { name: '/commit', description: { en: 'Generate a commit message and commit changes', zh: '生成提交消息并提交更改', ja: 'コミットメッセージを生成して変更をコミットする' }, category: 'git' },
      { name: '/commit-push-pr', description: { en: 'Commit, push, and create a pull request in one step', zh: '一步完成提交、推送和创建拉取请求', ja: '一度にコミット、プッシュ、プルリクエストを作成する' }, category: 'git' },
      { name: '/diff', description: { en: 'View uncommitted changes and per-turn diffs', zh: '查看未提交的更改和每轮差异', ja: '未コミットの変更とターンごとの差分を表示する' }, category: 'git' },
      { name: '/pr_comments', description: { en: 'View and respond to PR review comments', zh: '查看和响应 PR 审查评论', ja: 'PRレビューコメントを表示・応答する' }, category: 'git' },
      { name: '/branch', description: { en: 'Create a branch of the current conversation at this point', zh: '在此时创建当前对话的分支', ja: 'この時点で現在の会話のブランチを作成する' }, category: 'git' },
      { name: '/issue', description: { en: 'View and work on GitHub issues', zh: '查看和处理 GitHub issues', ja: 'GitHubのissuesを表示・作業する' }, category: 'git' },
      { name: '/security-review', description: { en: 'Run a security-focused code review', zh: '运行安全导向的代码审查', ja: 'セキュリティに焦点を当てたコードレビューを実行する' }, category: 'git' },
      { name: '/tag', description: { en: 'Toggle a searchable tag on the current session', zh: '在当前会话上切换可搜索标签', ja: '現在のセッションで検索可能なタグを切り替える' }, category: 'git' },
    ],
  },
  {
    id: 'debug',
    name: {
      en: 'Debugging & Diagnostics',
      zh: '调试与诊断',
      ja: 'デバッグと診断',
    },
    commands: [
      { name: '/status', description: { en: 'Show Claude Code status', zh: '显示 Claude Code 状态', ja: 'Claude Codeのステータスを表示する' }, category: 'debug' },
      { name: '/stats', description: { en: 'Show token usage and performance statistics', zh: '显示令牌使用和性能统计', ja: 'トークン使用量とパフォーマンス統計を表示する' }, category: 'debug' },
      { name: '/cost', description: { en: 'Show the cost of the current session', zh: '显示当前会话的成本', ja: '現在のセッションのコストを表示する' }, category: 'debug' },
      { name: '/usage', description: { en: 'Show plan usage limits', zh: '显示计划使用限制', ja: 'プランの使用制限を表示する' }, category: 'debug' },
      { name: '/version', description: { en: 'Show the installed Claude Code version', zh: '显示已安装的 Claude Code 版本', ja: 'インストールされたClaude Codeのバージョンを表示する' }, category: 'debug' },
      { name: '/feedback', description: { en: 'Send feedback to the Claude Code team', zh: '向 Claude Code 团队发送反馈', ja: 'Claude Codeチームにフィードバックを送信する' }, category: 'debug' },
      { name: '/rewind', description: { en: 'Restore code and/or conversation to a previous point', zh: '将代码和/或对话恢复到之前的时间点', ja: 'コードや会話を以前の時点に復元する' }, category: 'debug' },
      { name: '/debug-tool-call', description: { en: 'Debug a specific tool call by ID', zh: '按 ID 调试特定工具调用', ja: 'IDで特定のツール呼び出しをデバッグする' }, category: 'debug' },
      { name: '/heapdump', description: { en: 'Dump the JS heap to ~/Desktop', zh: '将 JS 堆转储到 ~/Desktop', ja: 'JSヒープを~/Desktopにダンプする' }, category: 'debug' },
    ],
  },
  {
    id: 'advanced',
    name: {
      en: 'Advanced & Experimental',
      zh: '高级与实验性',
      ja: '高度な機能と実験的機能',
    },
    commands: [
      { name: '/advisor', description: { en: 'Configure the advisor model', zh: '配置顾问模型', ja: 'アドバイザーモデルを設定する' }, category: 'advanced' },
      { name: '/ultraplan', description: { en: 'Run an advanced plan on Claude Code on the web', zh: '在 Web 上的 Claude Code 运行高级计划', ja: 'Web上のClaude Codeで高度なプランを実行する' }, category: 'advanced', featureGated: true },
      { name: '/remote-control', description: { en: 'Connect this terminal for remote-control sessions', zh: '连接此终端以进行远程控制会话', ja: 'このターミナルをリモートコントロールセッションに接続する' }, category: 'advanced', featureGated: true },
      { name: '/voice', description: { en: 'Toggle voice mode', zh: '切换语音模式', ja: '音声モードを切り替える' }, category: 'advanced', featureGated: true },
      { name: '/desktop', description: { en: 'Continue the current session in Claude Desktop', zh: '在 Claude Desktop 中继续当前会话', ja: 'Claude Desktopで現在のセッションを続ける' }, category: 'advanced', featureGated: true },
      { name: '/sandbox', description: { en: 'Configure command sandboxing', zh: '配置命令沙箱', ja: 'コマンドサンドボックスを設定する' }, category: 'advanced' },
      { name: '/plugin', description: { en: 'Manage Claude Code plugins', zh: '管理 Claude Code 插件', ja: 'Claude Codeプラグインを管理する' }, category: 'advanced' },
      { name: '/ide', description: { en: 'Manage IDE integrations and show status', zh: '管理 IDE 集成并显示状态', ja: 'IDE統合を管理してステータスを表示する' }, category: 'advanced' },
      { name: '/release-notes', description: { en: 'View release notes for the current version', zh: '查看当前版本的发布说明', ja: '現在のバージョンのリリースノートを表示する' }, category: 'advanced' },
      { name: '/privacy-settings', description: { en: 'Configure privacy and data sharing settings', zh: '配置隐私和数据共享设置', ja: 'プライバシーとデータ共有設定を構成する' }, category: 'advanced' },
    ],
  },
];
