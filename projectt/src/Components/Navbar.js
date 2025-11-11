const Navbar = ({ setCurrentPage }) => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <button
            style={styles.navButton}
            onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-color)')}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
        </li>
        <li style={styles.navItem}>
          <button
            style={styles.navButton}
            onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-color)')}
            onClick={() => setCurrentPage('about')}
          >
            About
          </button>
        </li>
        <li style={styles.navItem}>
          <button
            style={styles.navButton}
            onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-color)')}
            onClick={() => setCurrentPage('services')}
          >
            Services
          </button>
        </li>
        <li style={styles.navItem}>
          <button
            style={styles.navButton}
            onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-color)')}
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'var(--primary-color)', // Use the root primary color
    padding: '0px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
  },
  navItem: {
    margin: '0 5px',
  },
  navButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'var(--text-color)', // Use the root text color
    fontSize: '19px',
    cursor: 'pointer',
  },
};

export default Navbar;
