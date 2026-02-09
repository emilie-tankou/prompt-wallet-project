import React, { useState } from 'react';
import '../css/pages.css/Dashboard.css';
 
const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
 
  const categories = [
    { name: 'All', color: '#9333ea' },
    { name: 'Marketing', color: '#ec4899' },
    { name: 'Création de Contenu', color: '#8b5cf6' },
    { name: 'E-commerce', color: '#6366f1' },
    { name: 'Development', color: '#3b82f6' }
  ];
 
  const promptData = [
    { title: 'Marketing', count: 4, category: 'Marketing', icon: '📊' },
    { title: 'Contenu', count: 4, category: 'Création de Contenu', icon: '✍️' },
    { title: 'E-commerce', count: 4, category: 'E-commerce', icon: '🛍️' },
    { title: 'Dev', count: 4, category: 'Development', icon: '💻' }
  ];
 
  const recentPrompts = [
    { title: 'Pricing Strategy', category: 'Marketing', color: '#ec4899' },
    { title: 'Database Schema', category: 'Development', color: '#3b82f6' },
    { title: 'Influencer Outreach', category: 'Marketing', color: '#ec4899' },
    { title: 'Content Calendar', category: 'Création de Contenu', color: '#8b5cf6' }
  ];
 
  const filteredPrompts = selectedCategory === 'All'
    ? promptData
    : promptData.filter(p => p.category === selectedCategory);
 
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">P</span>
            <span className="logo-text">Prompt Wallet</span>
          </div>
        </div>
 
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <span className="nav-icon">📊</span>
            Dashboard
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">⚡</span>
            Use Prompt
          </a>
        </nav>
 
        <div className="sidebar-section">
          <p className="section-title">INFO</p>
          <a href="#" className="nav-item">
            <span className="nav-icon">ℹ️</span>
            Terms of Use
          </a>
        </div>
 
        <button className="new-prompt-btn">
          <span>+</span> New Prompt
        </button>
 
        <div className="theme-toggle">
          <span className="theme-icon">☀️</span> Light
        </div>
      </aside>
 
      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="new-prompt-btn-top">
            + New Prompt
          </button>
        </header>
 
        {/* Categories */}
        <section className="categories-section">
          <h2>YOUR CATEGORIES</h2>
          <div className="categories-filter">
            {categories.map(cat => (
              <button
                key={cat.name}
                className={`category-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                style={{
                  backgroundColor: selectedCategory === cat.name ? cat.color : 'transparent',
                  borderColor: cat.color
                }}
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.name}
              </button>
            ))}
          </div>
 
          {/* Circular Cards Grid */}
          <div className="prompts-grid-circular">
            {filteredPrompts.map((prompt, index) => (
              <div key={index} className="prompt-card-circular">
                <div className="circle-container">
                  <div className="circle-content">
                    <span className="circle-icon">{prompt.icon}</span>
                    <h3 className="circle-title">{prompt.title}</h3>
                    <p className="circle-count">{prompt.count}</p>
                  </div>
                </div>
                <p className="card-label">Prompts {prompt.title}</p>
              </div>
            ))}
          </div>
        </section>
 
        {/* Recent Prompts */}
        <section className="recent-section">
          <h2>RECENT PROMPTS</h2>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
 
          <div className="recent-list">
            {recentPrompts.map((prompt, index) => (
              <div key={index} className="recent-item">
                <div className="recent-dot" style={{ backgroundColor: prompt.color }}></div>
                <div className="recent-info">
                  <h4>{prompt.title}</h4>
                  <p>{prompt.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
 
export default Dashboard;
 
 