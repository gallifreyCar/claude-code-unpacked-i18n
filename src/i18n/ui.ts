// UI translations

export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.agentLoop': 'Agent Loop',
    'nav.architecture': 'Architecture',
    'nav.tools': 'Tools',
    'nav.commands': 'Commands',
    'nav.features': 'Hidden Features',

    // Hero
    'hero.title': 'Claude Code Unpacked',
    'hero.subtitle': 'What actually happens when you type a message into Claude Code? The agent loop, 50+ tools, multi-agent orchestration, and unreleased features, mapped straight from the source.',
    'hero.files': 'Files',
    'hero.linesOfCode': 'Lines of Code',
    'hero.tools': 'Tools',
    'hero.commands': 'Commands',
    'hero.startExploring': 'Start exploring',
    'hero.askDeepWiki': 'Ask DeepWiki',
    'hero.featuredOn': 'Featured on Hacker News',

    // Sections
    'section.agentLoop.title': 'The Agent Loop',
    'section.agentLoop.subtitle': 'From keypress to rendered response, step by step through the source.',
    'section.architecture.title': 'Architecture Explorer',
    'section.architecture.subtitle': 'Click around the source tree to explore what\'s inside.',
    'section.tools.title': 'Tool System',
    'section.tools.subtitle': 'Every built-in tool Claude Code can call, sorted by what it does.',
    'section.commands.title': 'Command Catalog',
    'section.commands.subtitle': 'Every slash command available in Claude Code, sorted by what it does.',
    'section.features.title': 'Hidden Features',
    'section.features.subtitle': 'Stuff that\'s in the code but not shipped yet. Feature-flagged, env-gated, or just commented out.',

    // Agent Loop
    'agentLoop.step': 'Step',
    'agentLoop.startSimulation': 'Start simulation',
    'agentLoop.watchHappens': 'Watch what happens when you send a message to Claude Code',
    'agentLoop.playSimulation': 'Play simulation',
    'agentLoop.previousStep': 'Previous step',
    'agentLoop.nextStep': 'Next step',
    'agentLoop.speed': 'speed',

    // Tool/Command labels
    'label.featureGated': 'Feature-gated',
    'label.clickToSee': 'Click to see details and source code',
    'label.explore': 'Click a feature to explore',

    // Footer
    'footer.disclaimer': 'Unofficial. Not affiliated with Anthropic. Based on publicly available source code, so some things might be wrong or outdated. Curation assisted by AI.',
    'footer.analysisDate': 'Analysis date',
    'footer.createdBy': 'Created by',
    'footer.source': 'Multilingual i18n version',
  },
  zh: {
    // Header
    'nav.home': '首页',
    'nav.agentLoop': '代理循环',
    'nav.architecture': '架构',
    'nav.tools': '工具',
    'nav.commands': '命令',
    'nav.features': '隐藏功能',

    // Hero
    'hero.title': 'Claude Code 解析',
    'hero.subtitle': '当你在 Claude Code 中输入一条消息时，实际上发生了什么？代理循环、50+ 工具、多代理编排和未发布功能，从源代码直接映射。',
    'hero.files': '文件',
    'hero.linesOfCode': '代码行数',
    'hero.tools': '工具',
    'hero.commands': '命令',
    'hero.startExploring': '开始探索',
    'hero.askDeepWiki': '询问 DeepWiki',
    'hero.featuredOn': '在 Hacker News 上推荐',

    // Sections
    'section.agentLoop.title': '代理循环',
    'section.agentLoop.subtitle': '从按键到渲染响应，逐步了解源代码。',
    'section.architecture.title': '架构浏览器',
    'section.architecture.subtitle': '点击源代码树探索其中的内容。',
    'section.tools.title': '工具系统',
    'section.tools.subtitle': 'Claude Code 可以调用的每个内置工具，按功能分类。',
    'section.commands.title': '命令目录',
    'section.commands.subtitle': 'Claude Code 中可用的每个斜杠命令，按功能分类。',
    'section.features.title': '隐藏功能',
    'section.features.subtitle': '代码中存在但尚未发布的功能。功能门控、环境门控或仅被注释掉。',

    // Agent Loop
    'agentLoop.step': '步骤',
    'agentLoop.startSimulation': '开始模拟',
    'agentLoop.watchHappens': '观看发送消息到 Claude Code 时发生的事情',
    'agentLoop.playSimulation': '播放模拟',
    'agentLoop.previousStep': '上一步',
    'agentLoop.nextStep': '下一步',
    'agentLoop.speed': '速度',

    // Tool/Command labels
    'label.featureGated': '功能门控',
    'label.clickToSee': '点击查看详情和源代码',
    'label.explore': '点击功能探索',

    // Footer
    'footer.disclaimer': '非官方。与 Anthropic 无关。基于公开可用的源代码，因此某些内容可能错误或过时。AI 辅助整理。',
    'footer.analysisDate': '分析日期',
    'footer.createdBy': '创建者',
    'footer.source': '多语言 i18n 版本',
  },
  ja: {
    // Header
    'nav.home': 'ホーム',
    'nav.agentLoop': 'エージェントループ',
    'nav.architecture': 'アーキテクチャ',
    'nav.tools': 'ツール',
    'nav.commands': 'コマンド',
    'nav.features': '隠し機能',

    // Hero
    'hero.title': 'Claude Code 解析',
    'hero.subtitle': 'Claude Codeにメッセージを入力すると実際に何が起こるのか？エージェントループ、50以上のツール、マルチエージェントオーケストレーション、未公開機能をソースから直接マッピング。',
    'hero.files': 'ファイル',
    'hero.linesOfCode': 'コード行数',
    'hero.tools': 'ツール',
    'hero.commands': 'コマンド',
    'hero.startExploring': '探索を始める',
    'hero.askDeepWiki': 'DeepWikiに聞く',
    'hero.featuredOn': 'Hacker Newsで紹介',

    // Sections
    'section.agentLoop.title': 'エージェントループ',
    'section.agentLoop.subtitle': 'キー入力から応答レンダリングまで、ソースをステップバイステップで。',
    'section.architecture.title': 'アーキテクチャエクスプローラ',
    'section.architecture.subtitle': 'ソースツリーをクリックして中身を探索。',
    'section.tools.title': 'ツールシステム',
    'section.tools.subtitle': 'Claude Codeが呼び出せるすべての組み込みツール、機能別に分類。',
    'section.commands.title': 'コマンドカタログ',
    'section.commands.subtitle': 'Claude Codeで利用可能なすべてのスラッシュコマンド、機能別に分類。',
    'section.features.title': '隠し機能',
    'section.features.subtitle': 'コードにはあるがまだ公開されていない機能。機能フラグ、環境変数、またはコメントアウトされているもの。',

    // Agent Loop
    'agentLoop.step': 'ステップ',
    'agentLoop.startSimulation': 'シミュレーション開始',
    'agentLoop.watchHappens': 'Claude Codeにメッセージを送信したときに何が起こるかを見る',
    'agentLoop.playSimulation': 'シミュレーション再生',
    'agentLoop.previousStep': '前のステップ',
    'agentLoop.nextStep': '次のステップ',
    'agentLoop.speed': '速度',

    // Tool/Command labels
    'label.featureGated': '機能ゲート付き',
    'label.clickToSee': 'クリックして詳細とソースコードを見る',
    'label.explore': '機能をクリックして探索',

    // Footer
    'footer.disclaimer': '非公式。Anthropicとは無関係。公開されているソースコードに基づいているため、一部が間違っているか古い可能性があります。AI支援で整理。',
    'footer.analysisDate': '分析日',
    'footer.createdBy': '作成者',
    'footer.source': '多言語i18n版',
  },
} as const;

export type UIKey = keyof typeof ui.en;
