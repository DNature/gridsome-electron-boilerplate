// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Gridsome',
	icon: {
		favicon: './src/assets/favicon.png',
		touchicon: './src/assets/favicon.png',
	},
	plugins: [
		{
			use: 'gridsome-plugin-typescript',
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				baseDir: './markdown',
				path: '**/*.md',
				typeName: 'MarkdownPage',
				remark: {
					externalLinksTarget: '_blank',
					externalLinksRel: ['noopener', 'noreferrer'],
					plugins: ['@gridsome/remark-prismjs'],
				},
			},
		},
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				tailwindConfig: './tailwind.config.js',
				purgeConfig: {
					// Prevent purging of prism classes.
					whitelistPatternsChildren: [/token$/],
				},
			},
		},
	],
	settings: {
		web: process.env.URL_WEB || false,
		twitter: process.env.URL_TWITTER || false,
		github: process.env.URL_GITHUB || false,
		nav: {
			links: [{ path: '/docs/', title: 'Docs' }],
		},
		sidebar: [
			{
				name: 'docs',
				sections: [
					{
						title: 'Getting Started',
						items: [
							'/docs/',
							'/docs/installation/',
							'/docs/writing-content/',
							'/docs/deploying/',
						],
					},
					{
						title: 'Configuration',
						items: ['/docs/settings/', '/docs/sidebar/'],
					},
				],
			},
		],
	},
};
