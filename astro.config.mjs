// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.settlers.top',
    integrations: [starlight({
        title: {
            en: 'Settlers Docs',
            ru: 'Settlers Docs'
        },
        defaultLocale: 'en', // основной язык сайта
        locales: {
            // Английская документация в src/content/docs/en/
            en: {
                label: 'English',
            },
            // Русская документация в src/content/docs/ru/
            ru: {
                label: 'Русский',
            },
        },
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/scriptology/settlers-documentation' }],
        sidebar: [
            {
                label: 'Guides',
                translations: {
                    ru: 'Руководства'
                },
                items: [
                    {
                        label: 'Getting Started',
                        translations: {
                            ru: 'Начало работы'
                        },
                        link: '/guides/getting-started'
                    },
                    {
                        label: 'Game Mechanics',
                        translations: {
                            ru: 'Игровая механика'
                        },
                        link: '/guides/game-mechanics'
                    },
                    {
                        label: 'Clan System',
                        translations: {
                            ru: 'Система кланов'
                        },
                        link: '/guides/clan-system'
                    },
                    {
                        label: 'Territory System',
                        translations: {
                            ru: 'Система территорий'
                        },
                        link: '/guides/territory-system'
                    },
                ],
            },
            {
                label: 'Reference',
                translations: {
                    ru: 'Справочник'
                },
                autogenerate: { directory: 'reference' },
            },
        ],
		}), icon({
			include: {
				mdi: ['*'],
				uis: ['*'],
				ri: ['*'],
			}
		})],
});