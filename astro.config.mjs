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
        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en'
            },
            ru: {
                label: 'Русский',
                lang: 'ru'
            },
        },
        social: [{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/settlers_channel' }],
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
                    {
                        label: 'Referral System',
                        translations: {
                            ru: 'Реферальная система'
                        },
                        link: '/guides/referral-system'
                    },
                    {
                        label: 'Roadmap',
                        translations: {
                            ru: 'План развития'
                        },
                        link: '/guides/roadmap'
                    }
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