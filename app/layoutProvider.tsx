'use client';
import React, { useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import ThemeToggler from './components/UI/ThemeToggler';

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <PrimaryProvider>
            <main className="flex h-screen w-screen items-center justify-center bg-light-secondary dark:bg-dark">
                <ThemeToggler className="absolute right-4 top-4" />

                {children}
            </main>
        </PrimaryProvider>
    );
};

const PrimaryProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

    useEffect(() => {
        // Проверка локального хранилища на наличие сохраненной темы
        const savedTheme = localStorage.getItem('theme') as
            | 'dark'
            | 'light'
            | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            // Проверка настроек системы пользователя
            const userPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
            const initialTheme = userPrefersDark ? 'dark' : 'light';
            setTheme(initialTheme);
            document.documentElement.classList.add(initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        if (theme) {
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            document.documentElement.classList.remove(theme);
            document.documentElement.classList.add(newTheme);
            localStorage.setItem('theme', newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <SessionProvider>
                <Toaster
                    toastOptions={
                        theme === 'dark'
                            ? {
                                  style: {
                                      background: 'var( --bg-full-dark)',
                                      color: 'white',
                                      border: '1px solid rgba(255,255,255,0.2)',
                                      boxShadow: 'unset'
                                  }
                              }
                            : { style: { background: 'var( --bg-full)' } }
                    }
                />

                {children}
            </SessionProvider>
        </ThemeContext.Provider>
    );
};
