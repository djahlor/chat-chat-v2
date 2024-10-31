import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, Bell } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'History', path: '/history' },
    { name: 'Settings', path: '/settings' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/50 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-400" />
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              nova
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-neutral-300 hover:text-white font-medium transition-colors ${
                  location.pathname === item.path ? 'text-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-neutral-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-400 rounded-full"></span>
            </button>
            <button className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-neutral-300 hover:text-white transition-colors">
                Sign in
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/40 transition-all shine">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}