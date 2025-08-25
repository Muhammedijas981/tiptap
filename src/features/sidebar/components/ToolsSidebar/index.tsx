
import React from "react";
import styles from "./ToolsSidebar.module.css";
import {
  Layout as LayoutIcon,
  Plus,
  Briefcase,
  Search,
  Globe,
  PenTool,
  Edit3,
  Bookmark,
  Clock,
  ChevronUp,
  MoreHorizontal,
  Settings,
  HelpCircle,
} from "lucide-react";

export const ToolsSidebar: React.FC = () => (
  <div className={styles.sidebar}>
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <img src="/vettam logo.png" alt="Logo" width={20} height={20} />
        </div>
        <span className={styles.logoText}>Vettam.AI</span>
      </div>
      <button className={styles.collapseButton}>
        <LayoutIcon size={16} />
      </button>
    </div>
    <div className={styles.newChatContainer}>
      <button className={styles.newChat}>
        <span>New Chat</span>
      </button>
    </div>
    <div className={styles.content}>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Features</span>
        </div>
        <div className={styles.itemsContainer}>
          <a href="#" className={styles.item}>
            <Briefcase size={16} />
            <span>Workspace</span>
          </a>
          <a href="#" className={styles.item}>
            <Search size={16} />
            <span>Research</span>
          </a>
          <a href="#" className={styles.item}>
            <Globe size={16} />
            <span>Translate</span>
          </a>
          <a href="#" className={styles.item}>
            <PenTool size={16} />
            <span>Write</span>
          </a>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Tools</span>
        </div>
        <div className={styles.itemsContainer}>
          <a href="#" className={`${styles.item} ${styles.active}`}>
            <Edit3 size={16} />
            <span>Editor</span>
          </a>
          <a href="#" className={styles.item}>
            <Bookmark size={16} />
            <span>Bookmarks</span>
          </a>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.chatHistoryHeader}>
          <Clock size={16} />
          <span>Chat History</span>
        </div>
        <div className={styles.todayHeader}>
          <span>Today</span>
          <ChevronUp size={16} />
        </div>
        <div className={styles.chatList}>
          {[
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur.",
          ].map((text, i) => (
            <div key={i} className={styles.chatItem}>
              <span className={styles.chatText}>{text}</span>
              <button className={styles.moreBtn}>
                <MoreHorizontal size={12} />
              </button>
            </div>
          ))}
        </div>
        <button className={styles.viewMore}>View more</button>
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.avatarsSection}>
        <div className={styles.avatars}>
          <div className={styles.avatar}></div>
          <div className={styles.avatar}></div>
          <div className={styles.avatar}></div>
          <div className={styles.notificationDot}>4</div>
        </div>
      </div>
      <div className={styles.userSection}>
        <div className={styles.userRow}>
          <div className={styles.userAvatar}></div>
          <span className={styles.userName}>Michael Smith</span>
        </div>
        <div className={styles.footerActions}>
          <Settings size={18} className={styles.footerIcon} />
          <HelpCircle size={18} className={styles.footerIcon} />
        </div>
      </div>
    </div>
  </div>
);

export default ToolsSidebar;
