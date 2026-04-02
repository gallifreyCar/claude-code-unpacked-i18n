# Claude Code Unpacked - Multilingual Version

🌐 A multilingual version of [ccunpacked.dev](https://ccunpacked.dev), exploring the internal architecture of Claude Code.

**Languages / 语言 / 言語**: [English](#) | [中文](#) | [日本語](#)

## Overview

This website provides an interactive exploration of Claude Code's internal architecture, including:

- **Agent Loop**: Step-by-step visualization of the message processing pipeline
- **Architecture Explorer**: Interactive treemap of the source code structure
- **Tool System**: All 53+ built-in tools with descriptions
- **Command Catalog**: All 95+ slash commands with descriptions
- **Hidden Features**: Undocumented and feature-gated functionality

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **i18n**: Built-in Astro internationalization

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # UI components
│   ├── AgentLoop.astro  # Interactive agent loop visualization
│   ├── ArchitectureExplorer.astro
│   ├── ToolSystem.astro
│   ├── CommandCatalog.astro
│   └── ...
├── data/                # Static data
│   ├── tools.ts         # Tool definitions
│   ├── commands.ts      # Command definitions
│   ├── features.ts      # Hidden features
│   └── architecture.ts  # Directory structure
├── i18n/                # Internationalization
│   └── ui.ts            # UI translations
├── layouts/
│   └── Layout.astro     # Base layout
└── pages/               # Page routes
    ├── en/              # English pages
    ├── zh/              # Chinese pages
    └── ja/              # Japanese pages
```

## Credits

- Original concept and data: [ccunpacked.dev](https://ccunpacked.dev) by [@zackautocracy](https://github.com/zackautocracy)
- Source analysis based on [Claude Code source snapshot](https://github.com/zackautocracy/claude-code)
- Original source exposure discovered by [@Fried_rice](https://x.com/Fried_rice)

## License

MIT License - See [LICENSE](LICENSE) for details.

## Disclaimer

This is an unofficial project. It is not affiliated with, endorsed by, or maintained by Anthropic. All original Claude Code source code remains the property of Anthropic.

---

**Analysis Date**: March 31, 2026
