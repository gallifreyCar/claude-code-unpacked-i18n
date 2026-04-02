// Tool data extracted from Claude Code source

export interface Tool {
  name: string;
  description: {
    en: string;
    zh: string;
    ja: string;
  };
  category: string;
  featureGated?: boolean;
  sourceFile?: string;
}

export interface ToolCategory {
  id: string;
  name: {
    en: string;
    zh: string;
    ja: string;
  };
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    id: 'file',
    name: {
      en: 'File Operations',
      zh: '文件操作',
      ja: 'ファイル操作',
    },
    tools: [
      {
        name: 'FileRead',
        description: {
          en: 'Read the contents of a file from the filesystem',
          zh: '从文件系统读取文件内容',
          ja: 'ファイルシステムからファイルの内容を読み取る',
        },
        category: 'file',
        sourceFile: 'src/tools/FileReadTool.ts',
      },
      {
        name: 'FileEdit',
        description: {
          en: 'Make targeted edits to existing files using search and replace',
          zh: '使用搜索替换对现有文件进行精确编辑',
          ja: '検索と置換を使用して既存のファイルを編集する',
        },
        category: 'file',
        sourceFile: 'src/tools/FileEditTool.ts',
      },
      {
        name: 'FileWrite',
        description: {
          en: 'Create new files or overwrite existing ones',
          zh: '创建新文件或覆盖现有文件',
          ja: '新しいファイルを作成または既存のファイルを上書きする',
        },
        category: 'file',
        sourceFile: 'src/tools/FileWriteTool.ts',
      },
      {
        name: 'Glob',
        description: {
          en: 'Find files matching a glob pattern across the project',
          zh: '在项目中查找匹配 glob 模式的文件',
          ja: 'プロジェクト全体でglobパターンに一致するファイルを検索する',
        },
        category: 'file',
        sourceFile: 'src/tools/GlobTool.ts',
      },
      {
        name: 'Grep',
        description: {
          en: 'Search file contents using regular expressions',
          zh: '使用正则表达式搜索文件内容',
          ja: '正規表現を使用してファイルの内容を検索する',
        },
        category: 'file',
        sourceFile: 'src/tools/GrepTool.ts',
      },
      {
        name: 'NotebookEdit',
        description: {
          en: 'Replace, insert, or delete Jupyter notebook cells',
          zh: '替换、插入或删除 Jupyter notebook 单元格',
          ja: 'Jupyter notebookのセルを置換、挿入、削除する',
        },
        category: 'file',
        sourceFile: 'src/tools/NotebookEditTool.ts',
      },
    ],
  },
  {
    id: 'execution',
    name: {
      en: 'Execution',
      zh: '执行',
      ja: '実行',
    },
    tools: [
      {
        name: 'Bash',
        description: {
          en: 'Execute shell commands in the user\'s terminal with safety analysis',
          zh: '在用户终端中执行 shell 命令，带安全分析',
          ja: '安全分析付きでユーザーのターミナルでシェルコマンドを実行する',
        },
        category: 'execution',
        sourceFile: 'src/tools/BashTool.ts',
      },
      {
        name: 'PowerShell',
        description: {
          en: 'Execute PowerShell commands on Windows systems',
          zh: '在 Windows 系统上执行 PowerShell 命令',
          ja: 'WindowsシステムでPowerShellコマンドを実行する',
        },
        category: 'execution',
        sourceFile: 'src/tools/PowerShellTool.ts',
      },
      {
        name: 'REPL',
        description: {
          en: 'Run code in an interactive REPL session (Python, Node, etc.)',
          zh: '在交互式 REPL 会话中运行代码（Python、Node 等）',
          ja: '対話型REPLセッションでコードを実行する（Python、Nodeなど）',
        },
        category: 'execution',
        sourceFile: 'src/tools/REPLTool.ts',
      },
    ],
  },
  {
    id: 'search',
    name: {
      en: 'Search & Fetch',
      zh: '搜索与获取',
      ja: '検索と取得',
    },
    tools: [
      {
        name: 'WebBrowser',
        description: {
          en: 'Control a headless browser for web interaction',
          zh: '控制无头浏览器进行网页交互',
          ja: 'ヘッドレスブラウザを制御してWeb操作を行う',
        },
        category: 'search',
        featureGated: true,
        sourceFile: 'src/tools/WebBrowserTool.ts',
      },
      {
        name: 'WebFetch',
        description: {
          en: 'Fetch a URL and process it with an AI model',
          zh: '获取 URL 内容并使用 AI 模型处理',
          ja: 'URLを取得してAIモデルで処理する',
        },
        category: 'search',
        sourceFile: 'src/tools/WebFetchTool.ts',
      },
      {
        name: 'WebSearch',
        description: {
          en: 'Search the web and return results',
          zh: '搜索网络并返回结果',
          ja: 'Webを検索して結果を返す',
        },
        category: 'search',
        sourceFile: 'src/tools/WebSearchTool.ts',
      },
      {
        name: 'ToolSearch',
        description: {
          en: 'Search for available MCP tools by name or description',
          zh: '按名称或描述搜索可用的 MCP 工具',
          ja: '名前または説明で利用可能なMCPツールを検索する',
        },
        category: 'search',
        sourceFile: 'src/tools/ToolSearchTool.ts',
      },
    ],
  },
  {
    id: 'agents',
    name: {
      en: 'Agents & Tasks',
      zh: '代理与任务',
      ja: 'エージェントとタスク',
    },
    tools: [
      {
        name: 'Agent',
        description: {
          en: 'Spawn a sub-agent to handle complex tasks autonomously',
          zh: '生成子代理自主处理复杂任务',
          ja: '複雑なタスクを自律的に処理するサブエージェントを生成する',
        },
        category: 'agents',
        sourceFile: 'src/tools/AgentTool.ts',
      },
      {
        name: 'SendMessage',
        description: {
          en: 'Send messages between agents in multi-agent orchestration',
          zh: '在多代理编排中发送消息',
          ja: 'マルチエージェントオーケストレーションでエージェント間のメッセージを送信する',
        },
        category: 'agents',
        sourceFile: 'src/tools/SendMessageTool.ts',
      },
      {
        name: 'TaskCreate',
        description: {
          en: 'Create a new task in the task list',
          zh: '在任务列表中创建新任务',
          ja: 'タスクリストに新しいタスクを作成する',
        },
        category: 'agents',
        sourceFile: 'src/tools/TaskCreateTool.ts',
      },
      {
        name: 'TaskGet',
        description: {
          en: 'Get a task by ID from the task list',
          zh: '按 ID 从任务列表获取任务',
          ja: 'IDでタスクリストからタスクを取得する',
        },
        category: 'agents',
        sourceFile: 'src/tools/TaskGetTool.ts',
      },
      {
        name: 'TaskList',
        description: {
          en: 'List all tasks in the task list',
          zh: '列出任务列表中的所有任务',
          ja: 'タスクリストのすべてのタスクを表示する',
        },
        category: 'agents',
        sourceFile: 'src/tools/TaskListTool.ts',
      },
      {
        name: 'TaskUpdate',
        description: {
          en: 'Update a task in the task list',
          zh: '更新任务列表中的任务',
          ja: 'タスクリストのタスクを更新する',
        },
        category: 'agents',
        sourceFile: 'src/tools/TaskUpdateTool.ts',
      },
      {
        name: 'TaskStop',
        description: {
          en: 'Stop a running background task',
          zh: '停止正在运行的后台任务',
          ja: '実行中のバックグラウンドタスクを停止する',
        },
        category: 'agents',
        sourceFile: 'src/tools/TaskStopTool.ts',
      },
      {
        name: 'TeamCreate',
        description: {
          en: 'Create a team of agents with defined roles and capabilities',
          zh: '创建具有定义角色和能力的代理团队',
          ja: '定義された役割と能力を持つエージェントチームを作成する',
        },
        category: 'agents',
        sourceFile: 'src/tools/TeamCreateTool.ts',
      },
      {
        name: 'TeamDelete',
        description: {
          en: 'Remove a team and clean up its resources',
          zh: '移除团队并清理其资源',
          ja: 'チームを削除してリソースをクリーンアップする',
        },
        category: 'agents',
        sourceFile: 'src/tools/TeamDeleteTool.ts',
      },
      {
        name: 'ListPeers',
        description: {
          en: 'Discover other running Claude Code sessions',
          zh: '发现其他正在运行的 Claude Code 会话',
          ja: '他の実行中のClaude Codeセッションを検出する',
        },
        category: 'agents',
        featureGated: true,
        sourceFile: 'src/tools/ListPeersTool.ts',
      },
    ],
  },
  {
    id: 'planning',
    name: {
      en: 'Planning',
      zh: '规划',
      ja: 'プランニング',
    },
    tools: [
      {
        name: 'EnterPlanMode',
        description: {
          en: 'Switch to plan mode — outline steps before executing',
          zh: '切换到规划模式 — 执行前概述步骤',
          ja: 'プランニングモードに切り替え — 実行前にステップをアウトラインする',
        },
        category: 'planning',
        sourceFile: 'src/tools/EnterPlanModeTool.ts',
      },
      {
        name: 'ExitPlanMode',
        description: {
          en: 'Prompt the user to exit plan mode and start coding',
          zh: '提示用户退出规划模式并开始编码',
          ja: 'ユーザーにプランニングモードを終了してコーディングを開始するよう促す',
        },
        category: 'planning',
        sourceFile: 'src/tools/ExitPlanModeTool.ts',
      },
      {
        name: 'EnterWorktree',
        description: {
          en: 'Create or enter an isolated git worktree for safe experimentation',
          zh: '创建或进入隔离的 git worktree 以进行安全实验',
          ja: '安全な実験のために隔離されたgit worktreeを作成または入る',
        },
        category: 'planning',
        sourceFile: 'src/tools/EnterWorktreeTool.ts',
      },
      {
        name: 'ExitWorktree',
        description: {
          en: 'Exit the current worktree and return to the main branch',
          zh: '退出当前 worktree 并返回主分支',
          ja: '現在のworktreeを終了してメインブランチに戻る',
        },
        category: 'planning',
        sourceFile: 'src/tools/ExitWorktreeTool.ts',
      },
    ],
  },
  {
    id: 'mcp',
    name: {
      en: 'MCP',
      zh: 'MCP',
      ja: 'MCP',
    },
    tools: [
      {
        name: 'mcp',
        description: {
          en: 'Invoke a tool from a connected MCP (Model Context Protocol) server',
          zh: '调用已连接的 MCP（模型上下文协议）服务器中的工具',
          ja: '接続されたMCP（Model Context Protocol）サーバーのツールを呼び出す',
        },
        category: 'mcp',
        sourceFile: 'src/tools/MCPTool.ts',
      },
      {
        name: 'ListMcpResources',
        description: {
          en: 'List available resources from connected MCP servers',
          zh: '列出已连接 MCP 服务器的可用资源',
          ja: '接続されたMCPサーバーの利用可能なリソースを表示する',
        },
        category: 'mcp',
        sourceFile: 'src/tools/ListMcpResourcesTool.ts',
      },
      {
        name: 'ReadMcpResource',
        description: {
          en: 'Read data from a specific MCP resource',
          zh: '从特定 MCP 资源读取数据',
          ja: '特定のMCPリソースからデータを読み取る',
        },
        category: 'mcp',
        sourceFile: 'src/tools/ReadMcpResourceTool.ts',
      },
      {
        name: 'McpAuth',
        description: {
          en: 'Authenticate with an MCP server using OAuth or tokens',
          zh: '使用 OAuth 或令牌与 MCP 服务器进行认证',
          ja: 'OAuthまたはトークンを使用してMCPサーバーで認証する',
        },
        category: 'mcp',
        sourceFile: 'src/tools/McpAuthTool.ts',
      },
    ],
  },
  {
    id: 'system',
    name: {
      en: 'System',
      zh: '系统',
      ja: 'システム',
    },
    tools: [
      {
        name: 'AskUserQuestion',
        description: {
          en: 'Prompt the user for input or confirmation',
          zh: '提示用户输入或确认',
          ja: 'ユーザーに入力または確認を促す',
        },
        category: 'system',
        sourceFile: 'src/tools/AskUserQuestionTool.ts',
      },
      {
        name: 'TodoWrite',
        description: {
          en: 'Create and manage a persistent to-do list file',
          zh: '创建和管理持久化待办列表文件',
          ja: '永続的なToDoリストファイルを作成・管理する',
        },
        category: 'system',
        sourceFile: 'src/tools/TodoWriteTool.ts',
      },
      {
        name: 'Skill',
        description: {
          en: 'Load and execute a specialized skill module',
          zh: '加载并执行专业技能模块',
          ja: '専門スキルモジュールをロードして実行する',
        },
        category: 'system',
        sourceFile: 'src/tools/SkillTool.ts',
      },
      {
        name: 'Config',
        description: {
          en: 'Read and update Claude Code configuration settings',
          zh: '读取和更新 Claude Code 配置设置',
          ja: 'Claude Codeの設定を読み取り・更新する',
        },
        category: 'system',
        sourceFile: 'src/tools/ConfigTool.ts',
      },
      {
        name: 'RemoteTrigger',
        description: {
          en: 'Trigger an action on a remote Claude Code instance',
          zh: '在远程 Claude Code 实例上触发操作',
          ja: 'リモートのClaude Codeインスタンスでアクションをトリガーする',
        },
        category: 'system',
        featureGated: true,
        sourceFile: 'src/tools/RemoteTriggerTool.ts',
      },
      {
        name: 'CronCreate',
        description: {
          en: 'Schedule a new recurring cron job',
          zh: '调度新的周期性 cron 任务',
          ja: '新しい定期的なcronジョブをスケジュールする',
        },
        category: 'system',
        featureGated: true,
        sourceFile: 'src/tools/CronCreateTool.ts',
      },
      {
        name: 'CronDelete',
        description: {
          en: 'Cancel a scheduled cron job',
          zh: '取消已调度的 cron 任务',
          ja: 'スケジュールされたcronジョブをキャンセルする',
        },
        category: 'system',
        featureGated: true,
        sourceFile: 'src/tools/CronDeleteTool.ts',
      },
      {
        name: 'CronList',
        description: {
          en: 'List all active cron jobs',
          zh: '列出所有活动的 cron 任务',
          ja: 'すべてのアクティブなcronジョブを表示する',
        },
        category: 'system',
        featureGated: true,
        sourceFile: 'src/tools/CronListTool.ts',
      },
    ],
  },
  {
    id: 'experimental',
    name: {
      en: 'Experimental',
      zh: '实验性',
      ja: '実験的',
    },
    tools: [
      {
        name: 'Sleep',
        description: {
          en: 'Pause execution for a specified duration',
          zh: '暂停执行指定时长',
          ja: '指定した期間実行を一時停止する',
        },
        category: 'experimental',
        sourceFile: 'src/tools/SleepTool.ts',
      },
      {
        name: 'SendUserMessage',
        description: {
          en: 'Send a message to the user',
          zh: '向用户发送消息',
          ja: 'ユーザーにメッセージを送信する',
        },
        category: 'experimental',
        sourceFile: 'src/tools/SendUserMessageTool.ts',
      },
      {
        name: 'StructuredOutput',
        description: {
          en: 'Return structured output in the requested format',
          zh: '以请求的格式返回结构化输出',
          ja: '要求された形式で構造化された出力を返す',
        },
        category: 'experimental',
        featureGated: true,
        sourceFile: 'src/tools/StructuredOutputTool.ts',
      },
      {
        name: 'LSP',
        description: {
          en: 'Query Language Server Protocol for code intelligence',
          zh: '查询语言服务器协议获取代码智能',
          ja: 'コードインテリジェンスのためにLanguage Server Protocolをクエリする',
        },
        category: 'experimental',
        featureGated: true,
        sourceFile: 'src/tools/LSPTool.ts',
      },
    ],
  },
];
