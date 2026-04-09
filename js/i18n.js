// i18n translations for ClashFox Portal
const translations = {
    en: {
        hero_subtitle: 'Native Proxy GUI for Mihomo',
        hero_desc: 'Make kernel management a lot of fun! A powerful Electron GUI for managing your Mihomo proxy configuration with style and ease.',
        download: 'Download',
        github: 'GitHub',
        features_title: 'Powerful Features',
        features_subtitle: 'Everything you need to manage your Mihomo proxy configuration efficiently',
        feat_fast_title: 'Fast & Lightweight',
        feat_fast_desc: 'Built with Electron for cross-platform support while maintaining excellent performance and responsiveness for smooth user experience.',
        feat_ui_title: 'Modern UI Design',
        feat_ui_desc: 'Beautiful, intuitive interface with dark theme support, smooth animations, and thoughtful micro-interactions.',
        feat_config_title: 'Easy Configuration',
        feat_config_desc: 'Simplified configuration management for Mihomo with a user-friendly interface and helpful configuration tools.',
        feat_monitor_title: 'Real-time Monitoring',
        feat_monitor_desc: 'Track your proxy traffic, connections, and performance metrics in real-time with detailed and informative dashboards.',
        feat_secure_title: 'Secure & Private',
        feat_secure_desc: 'Your configuration stays local. No data is sent to external servers, ensuring complete privacy and data control.',
        feat_mac_title: 'macOS Native',
        feat_mac_desc: 'Deep integration with macOS including LaunchDaemon helper for seamless system-level proxy management and automation.',
        screenshots_title: 'App Screenshots',
        screenshots_subtitle: "Take a peek at ClashFox's beautiful interface",
        install_title: 'Quick Installation',
        install_subtitle: 'Get ClashFox up and running in minutes',
        step1_title: 'Download',
        step1_desc: 'Download the latest version from GitHub Releases for your platform (macOS)',
        step2_title: 'Install Mihomo',
        step2_desc: 'Mihomo kernel needs to be installed separately. ClashFox does not bundle the kernel.',
        step3_title: 'Configure',
        step3_desc: 'Launch ClashFox and configure your proxy subscription or local config file.',
        step4_title: 'Start Using',
        step4_desc: "Enjoy seamless proxy management with ClashFox's intuitive interface!",
        faq_title: 'Frequently Asked Questions',
        faq_subtitle: 'Common questions about ClashFox and Mihomo',
        faq2_q: 'How do I resolve kernel conflict issues?',
        faq2_a: "If you encounter conflicts, close other proxy services and try again. Since the Mihomo kernel requires exclusive running, running multiple proxy tools simultaneously (like ClashX Pro, Surge, etc.) may cause port conflicts.",
        faq4_q: 'Does ClashFox support proxy subscription links?',
        faq4_a: "Yes! ClashFox supports importing proxy configurations via subscription URLs. Go to Configuration > Import from URL and paste your subscription link. ClashFox will automatically fetch and update your proxy list.",
        faq5_q: 'Where are configurations, logs, and kernel stored?',
        faq5_desc: "The runtime root directory is located at ~/Library/Application Support/ClashFox.",
        faq6_q: 'What should I do when macOS shows \"App is damaged\" or \"Cannot verify developer\"?',
        faq6_tip: 'This is typically the default Gatekeeper blocking behavior for unnotarized apps, not a ClashFox-specific issue.',
        faq6_step1: 'Move the app to /Applications/ClashFox.app',
        faq6_step2: 'Open System Settings → Privacy & Security and click \"Still Open\"',
        faq6_step3: "If still blocked, run: sudo xattr -r -d com.apple.quarantine /Applications/ClashFox.app",
        nav_features: 'Features',
        nav_overview: 'Overview',
        nav_screenshots: 'Screenshots',
        nav_installation: 'Installation',
        nav_faq: 'FAQ',
        tab_all: 'All',
        tab_core: 'Core',
        tab_tools: 'Tools',
        tab_settings: 'Settings',
        cap_overview: 'Overview Dashboard',
        cap_kernel: 'Kernel Management',
        cap_config: 'Configuration',
        cap_logs: 'Logs Viewer',
        cap_foxboard: 'Foxboard',
        cap_trackers: 'Trackers',
        cap_settings: 'Settings',
        cap_help: 'Help',
        overview_title: 'Overview Components',
        overview_subtitle: 'Explore the key functional areas of ClashFox\'s interface',
        overview_network: 'Network Statistics',
        overview_network_desc: 'Monitor real-time traffic flow, bandwidth usage, and active connections.',
        overview_provider: 'Provider Management',
        overview_provider_desc: 'Manage proxy subscriptions, servers, and connection configurations.',
        overview_realtime: 'Real-time Monitoring',
        overview_realtime_desc: 'Track live performance metrics and application activity in real-time.',
        overview_rules: 'Rules Configuration',
        overview_rules_desc: 'Configure traffic routing rules, domain filtering, and proxy policies.',
        overview_running: 'Running Status',
        overview_running_desc: 'View kernel service status, uptime, and operational health indicators.',
        overview_quickactions: 'Quick Actions',
        overview_quickactions_desc: 'Access one-click controls, shortcuts, and frequently used operations.',
        overview_outbound: 'Outbound Configuration',
        overview_outbound_desc: 'Configure egress traffic settings, proxy chains, and outbound rules.',
        overview_schema: 'Schema Viewer',
        overview_schema_desc: 'Visualize configuration structure, schema relationships, and settings hierarchy.',
        overview_topology: 'Topology View',
        overview_topology_desc: 'Visualize network topology, connection paths, and proxy relationships.',
        tab_monitoring: 'Monitoring',
        tab_configuration: 'Configuration',
        tab_visualization: 'Visualization',
        footer_tagline: 'Native Proxy GUI for Mihomo',
        footer_desc: 'Make kernel management a lot of fun!',
        footer_resources: 'Resources',
        footer_releases: 'Releases',
        footer_issues: 'Issues',
        footer_changelog: 'Changelog',
        footer_community: 'Community',
        footer_repo: 'GitHub Repository',
        footer_docs: 'Documentation',
        footer_license: 'License',
        footer_view_license: 'View License',
        footer_copyright: '© 2026 ClashFox. Licensed under GPL-3.0',
        footer_made_by: 'Made with ❤️ by Kuochiang Lu'
    },
    zh: {
        hero_subtitle: 'Mihomo 原生代理 GUI',
        hero_desc: '让内核管理变得有趣！一款功能强大的 Electron GUI，助您轻松管理 Mihomo 代理配置。',
        download: '下载',
        github: 'GitHub',
        features_title: '强大功能',
        features_subtitle: '高效管理 Mihomo 代理配置所需的一切',
        feat_fast_title: '快速且轻量',
        feat_fast_desc: '基于 Electron 构建，跨平台支持，同时保持出色的性能和响应速度。',
        feat_ui_title: '现代 UI 设计',
        feat_ui_desc: '精美直观的界面，支持深色主题，流畅动画，精心设计的微交互。',
        feat_config_title: '简易配置',
        feat_config_desc: '简化 Mihomo 配置管理，用户友好的界面和实用的配置工具。',
        feat_monitor_title: '实时监控',
        feat_monitor_desc: '通过详细的信息面板实时跟踪代理流量、连接和性能指标。',
        feat_secure_title: '安全私密',
        feat_secure_desc: '您的配置保留在本地，不向外部服务器发送任何数据，确保完全的隐私和数据控制。',
        feat_mac_title: '原生 macOS',
        feat_mac_desc: '深度集成 macOS，包括 LaunchDaemon 助手，实现无缝的系统级代理管理和自动化。',
        screenshots_title: '应用截图',
        screenshots_subtitle: '一览 ClashFox 精美界面',
        install_title: '快速安装',
        install_subtitle: '几分钟内启动 ClashFox',
        step1_title: '下载',
        step1_desc: '从 GitHub Releases 下载适合您平台的最新版本 (macOS)',
        step2_title: '安装 Mihomo',
        step2_desc: 'Mihomo 内核需要单独安装，ClashFox 不捆绑内核。',
        step3_title: '配置',
        step3_desc: '启动 ClashFox 并配置您的代理订阅或本地配置文件。',
        step4_title: '开始使用',
        step4_desc: '通过 ClashFox 直观的界面享受无缝代理管理！',
        faq_title: '常见问题',
        faq_subtitle: '关于 ClashFox 和 Mihomo 的常见问题',
        faq2_q: '如何解决内核冲突问题？',
        faq2_a: '如果遇到冲突，请关闭其他代理服务后重试。由于 Mihomo 内核需要独占运行，若同时运行多个代理工具（如 ClashX Pro、Surge 等）可能会导致端口冲突。',
        faq4_q: 'ClashFox 支持代理订阅链接吗？',
        faq4_a: '支持！ClashFox 支持通过订阅 URL 导入代理配置。前往配置 > 从 URL 导入并粘贴您的订阅链接，ClashFox 将自动获取并更新您的代理列表。',
        faq5_q: '配置、日志和内核都存在哪里？',
        faq5_desc: '运行时根目录在 ~/Library/Application Support/ClashFox。',
        faq6_q: 'macOS 提示"已损坏"或"无法验证开发者"怎么办？',
        faq6_tip: '这通常是 Gatekeeper 对未公证应用的默认拦截，不是 ClashFox 独有问题。',
        faq6_step1: '先把应用移动到 /Applications/ClashFox.app',
        faq6_step2: '打开"系统设置 → 隐私与安全性"，点击"仍要打开"',
        faq6_step3: '如果还是被拦截，再执行 sudo xattr -r -d com.apple.quarantine /Applications/ClashFox.app 去掉隔离标记',
        nav_features: '功能',
        nav_overview: '概览',
        nav_screenshots: '快照',
        nav_installation: '安装',
        nav_faq: '常见问题',
        tab_all: '全部',
        tab_core: '核心',
        tab_tools: '工具',
        tab_settings: '设置',
        cap_overview: '概览面板',
        cap_kernel: '内核管理',
        cap_config: '配置管理',
        cap_logs: '日志查看',
        cap_foxboard: '工具面板',
        cap_trackers: '追踪器',
        cap_settings: '设置',
        cap_help: '帮助',
        overview_title: '概览组件',
        overview_subtitle: '探索 ClashFox 界面的关键功能区域',
        overview_network: '网络统计',
        overview_network_desc: '监控实时流量、带宽使用和活跃连接。',
        overview_provider: '提供商管理',
        overview_provider_desc: '管理代理订阅、服务器和连接配置。',
        overview_realtime: '实时监控',
        overview_realtime_desc: '实时跟踪性能指标和应用活动。',
        overview_rules: '规则配置',
        overview_rules_desc: '配置流量路由规则、域名过滤和代理策略。',
        overview_running: '运行状态',
        overview_running_desc: '查看内核服务状态、运行时间和运行状况指标。',
        overview_quickactions: '快捷操作',
        overview_quickactions_desc: '访问一键控制、快捷方式和常用操作。',
        overview_outbound: '出站配置',
        overview_outbound_desc: '配置出口流量设置、代理链和出站规则。',
        overview_schema: '架构查看器',
        overview_schema_desc: '可视化配置结构、架构关系和设置层次。',
        overview_topology: '拓扑视图',
        overview_topology_desc: '可视化网络拓扑、连接路径和代理关系。',
        tab_monitoring: '监控',
        tab_configuration: '配置',
        tab_visualization: '可视化',
        footer_tagline: 'Mihomo 原生代理 GUI',
        footer_desc: '让内核管理变得有趣！',
        footer_resources: '资源',
        footer_releases: '发布版本',
        footer_issues: '问题反馈',
        footer_changelog: '更新日志',
        footer_community: '社区',
        footer_repo: 'GitHub 仓库',
        footer_docs: '使用文档',
        footer_license: '开源许可',
        footer_view_license: '查看许可',
        footer_copyright: '© 2026 ClashFox. 基于 GPL-3.0 许可',
        footer_made_by: '由 Kuochiang Lu ❤️ 开发'
    }
};

// Language switching functionality
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
}

// Initialize language
function initializeLanguage() {
    if (!document.querySelectorAll('[data-i18n]').length) {
        console.warn('No elements with data-i18n attribute found');
        return;
    }
    
    setLanguage(currentLang);
    
    // Add event listeners for language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, setLanguage, initializeLanguage };
}

// Make functions available globally for direct calling from HTML
window.initializeLanguage = initializeLanguage;
window.setLanguage = setLanguage;